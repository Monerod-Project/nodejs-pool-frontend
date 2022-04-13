import * as React from "react";
import {abbreviateNumber} from "../utils";
import Moment from "react-moment";
import moment from "moment-timezone";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

interface Props {
    title: string
    workers: number
    alt: string
}

export const Workers = (props: Props) => {
    return (
        <div className="w-flex">
            <span className="text-gray-400 border-b border-purple-600" title={props.alt}>{props.title}</span>
            <span className="block text-xl text-gray-100 font-black">{props.workers}</span>
        </div>
    )
}

interface WorkerList {
    Workers: {
        Identifier: string
        Hash: number
        ValidShares: number
        InvalidShares: number
        Hashes: number
        Lts: number
    }[]
}

export const WorkerList = (workers: WorkerList) => {
    return (
        <Table className="divide-y divide-gray-100 w-full rounded-lg">
            <Thead className="divide-y divide-gray-100">
                <Tr>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Name</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Hashrate</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Shares</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Hashes</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Last Seen</div>
                    </Th>
                </Tr>
            </Thead>
            <Tbody className="divide-y divide-gray-700">
            {
                workers.Workers.map((worker: any, i: number) => {
                    if (worker.Worker === 0) {
                        return
                    }
                    if (i > 10) {
                        return
                    }
                    return (
                        <Tr key={worker.Identifer}>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100">
                                    {
                                    worker.identifer === "global" ? "~" : ""
                                    }
                                    {
                                    worker.identifer === "" || worker.identifer === "x" ? "Update XMRig Pass Field" : ""
                                    }
                                    {
                                    worker.identifer === "MonerodBonus" ? "🔥" + worker.identifer : worker.identifer
                                    }
                                </div>
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100">{abbreviateNumber(worker.hash)}</div>
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100">{worker.validShares}/{worker.invalidShares}</div>
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100">{worker.totalHash}</div>
                            </Td>
                            <Td className="px-2 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-100"><Moment local format="l h:mma">{moment(worker.lts * 1000).format()}</Moment></div>
                            </Td>
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    )
}
