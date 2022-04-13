import Moment from "react-moment";
import moment from "moment-timezone";
import * as React from "react";
import {FaCube, FaLockOpen, FaLock, FaSkull} from 'react-icons/fa/';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

var explorerUrl = "https://xmrchain.net/block/"

interface Props {
    time: number
}

interface Blocks {
    Blocks: {
        Block: number
        Hash: string
        Status: string
        Amount: string
        Time: string
        Effort: string
        Date: string
        "(UTC+1)": string
    }[]
}

export const LastBlockFound = (props: Props) => {
    return (
        <div className="w-full md:w-1/4 bg-dashboard-blue-500 rounded-md mx-2">
            <div className="shadow-lg w-full">
                <div className="flex items-center justify-between px-4 py-4 space-x-4">
                    <div className="flex items-center">
                        <FaCube className="h-10 text-dracula-purple"/>
                        <div className="mx-2">
                            <span className="text-gray-100 text-xl"><Moment unix local format="Do MMMM h:mm A">{moment.unix(props.time).unix()}</Moment></span>
                            <span className="my-1 block text-lg text-gray-400">Last Block Found</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BlockTable = (blocks: Blocks) => {
    return (
        <Table className="divide-y divide-gray-100 w-full rounded-lg">
            <Thead className="divide-y divide-gray-100">
                <Tr>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Block</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Status</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Amount</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Effort</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Found</div>
                    </Th>
                </Tr>
            </Thead>
            <Tbody className="divide-y divide-gray-700">
            {
                blocks.Blocks.map((block: any, i: number) => {
                    var blockAmount = block.value;
                    blockAmount /= Math.pow(10, 12);
                    var blockEffort = block.shares / block.diff;
                    blockEffort /= Math.pow(10, -2);
                    if (block.Block === 0) {
                        return
                    }
                    if (i > 15) {
                        return
                    }
                    return (
                        <Tr key={block.Hash}>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="text-sm text-indigo-400"><a href={explorerUrl + block.height} rel="noreferrer" target="_blank">{block.height}</a></div>
                                </div>
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                {block.unlocked === false ?
                                    <div className="px-1 py-1 inline-flex text-sm leading-5 rounded-md bg-yellow-600 text-gray-200">
                                        <FaLock title="Awaiting Confirmations" className="h-5 px-1" size={25}/>
                                        {/*<span className="font-semibold">Locked</span>*/}
                                    </div>
                                    :
                                    block.valid === false ?
                                    <div
                                        className="px-1 py-1 inline-flex text-sm leading-5 rounded-md bg-red-600 text-gray-200">
                                        <FaSkull title="Orphaned" className="h-5 px-1" size={25}/>
                                        {/*<span className="">😨 Orphaned</span>*/}
                                    </div>
                                    :
                                    <div
                                        className="px-1 py-1 inline-flex text-sm leading-5 rounded-md bg-green-600 text-gray-200">
                                        <FaLockOpen title="Confirmed" className="h-5 px-1" size={25}/>
                                        {/*<span>Unlocked</span>*/}
                                    </div>
                                }
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                {block.value === "" ?
                                    ""
                                    :
                                    <div className="text-sm text-gray-100">{blockAmount.toFixed(6)}{" XMR"}</div>
                                }
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                {blockEffort > 100 ?
                                    <div className="text-sm text-red-400">{blockEffort.toFixed(2)}{"%"}</div>
                                    :
                                    <div className="text-sm text-green-400">{blockEffort.toFixed(2)}{"%"}</div>
                                }
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100">
                                    <Moment local format="l h:mma">{moment(block.ts).format()}</Moment>
                                </div>
                            </Td>
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    )
}
