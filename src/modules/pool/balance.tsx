import * as React from "react";
import {FaPiggyBank} from 'react-icons/fa/';

interface Props {
    balance: number
    paid: number
    max: number
    fiat: number
}

export const Balance = (props: Props) => {
var amountDue = props.balance;
amountDue /= Math.pow(10, 12);

var amountPaid = props.paid;
amountPaid /= Math.pow(10, 12);

var paymentThreshold = props.max;
paymentThreshold /= Math.pow(10, 12);
    return (
        <div className="w-flex bg-dashboard-blue-500 rounded-md">
            <div className="w-full">
                <div className="flex items-center justify-between px-4 py-4 space-x-4">
                    <div className="flex items-center static">
                        <span
                            className="rounded-full relative p-1 bg-dracula-purple border-4 border-black z-10 transform -translate-y-9">
                            <FaPiggyBank size={30}/>
                        </span>
                        <p className="text-md text-white transform -translate-x-12 font-semibold text-left">
                            Balance
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0 text-white font-bold">
                    <span
                            className="text-sm text-gray-300 text-right block">Pending/Paid: {amountDue.toFixed(6)}/{amountPaid.toFixed(6)} XMR</span>
                        <span
                            className="text-sm text-gray-300 text-right block">Pending/Paid: {(props.fiat * amountDue).toFixed(2)}/{(props.fiat * amountPaid).toFixed(2)} {localStorage.getItem("currency") || "USD"}</span>
                        <span
                            className="text-sm text-gray-300 text-right block">Payment Threshold: {paymentThreshold} XMR</span>
                    </div>
                </div>
                <div className="w-full h-4">
                    <progress value={amountDue} max={paymentThreshold}
                              className="progress progress-primary bg-dracula-line h-full text-center text-xs text-white"/>
                </div>
            </div>
        </div>
    )
}
