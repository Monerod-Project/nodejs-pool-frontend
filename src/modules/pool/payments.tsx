import Moment from "react-moment";
import moment from "moment-timezone";
import * as React from "react";
import {FaExternalLinkSquareAlt} from 'react-icons/fa/';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

var explorerUrl = "https://xmrchain.net/tx/"

interface Props {
    time: number
}

interface Payments {
    Payments: {
        Payees: number
        Amount: string
        Fee: string
        Hash: string
        Time: string
        Date: string
        "(UTC+1)": string
    }[]
}

export const PaymentTable = (payments: Payments) => {
    return (
        <Table className="divide-y divide-gray-100 w-full rounded-lg">
            <Thead className="divide-y divide-gray-100">
                <Tr>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Payees</div>
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
                        <div className="text-xs text-gray-100 uppercase text-left">Fee</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">TX</div>
                    </Th>
                    <Th
                        scope="col"
                        className="w-1/6 px-1 md:px-1 py-2 text-left text-xs uppercase"
                    >
                        <div className="text-xs text-gray-100 uppercase text-left">Paid</div>
                    </Th>
                </Tr>
            </Thead>
            <Tbody className="divide-y divide-gray-700">
            {
                payments.Payments.map((payment: any, i: number) => {
                    var amountPaid = payment.value;
                    amountPaid /= Math.pow(10, 12);
                    var feePaid = payment.fee;
                    feePaid /= Math.pow(10, 12);
                    if (payment.Payment === 0) {
                        return
                    }
                    if (i > 15) {
                        return
                    }
                    return (
                        <Tr key={payment.Hash}>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100">{payment.payees}</div>
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100">{amountPaid.toFixed(6)}{" XMR"}</div>
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100">{feePaid.toFixed(6)}{" XMR"}</div>
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-indigo-400"><a href={explorerUrl + payment.hash} rel="noreferrer" target="_blank"><FaExternalLinkSquareAlt/></a></div>
                            </Td>
                            <Td className="px-2 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-100"><Moment local format="l h:mma">{moment(payment.ts).format()}</Moment></div>
                            </Td>
                        </Tr>
                    )
                })}
            </Tbody>
        </Table>
    )
}
