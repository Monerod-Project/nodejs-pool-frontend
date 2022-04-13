import * as React from "react";

interface Payout {
    Payout: {
        Amount: string
        Date: string
    }[]
}

const PayoutTable = (payout: Payout) => {
    return (
        <table className="divide-y divide-gray-100 w-full md:1/2 mx-4 rounded-lg">
            <thead className="bg-dashboard-blue-400 text-gray-100">
            <tr>
                <th
                    scope="col"
                    className="w-1/6 px-2 md:px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                    Amount
                </th>
                <th
                    scope="col"
                    className="w-1/6 px-2 md:px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                    Date
                </th>
            </tr>
            </thead>
            <tbody className="bg-dashboard-blue-500 divide-y divide-gray-700">
            {
                payout.Payout.map((pay: any, i: number) => {
                    if (pay.Amount === 0) {
                        return
                    }
                    if (i > 4) {
                        return
                    }
                    return (
                        <tr key={i}>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="text-md font-medium text-gray-100">{pay.Amount}</div>
                                </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="text-md font-medium text-gray-100">{pay.Date}</div>
                                </div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default PayoutTable
