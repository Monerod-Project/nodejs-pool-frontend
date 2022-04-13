import * as React from "react";

interface Props {
    title: string
    amount: string
    alt: string
}

interface Props2 {
    title: string
    amount: number
    amount2: number
    alt: string
}

export const Amount = (props: Props) => {
    return (
        <div className="w-flex">
            <span className="text-gray-400 border-b border-purple-600" title={props.alt}>{props.title}</span>
            <span className="block text-xl text-gray-100 font-black">{props.amount}</span>
        </div>
    )
}

export const Amount2 = (props2: Props2) => {
    return (
        <div className="w-flex">
            <span className="text-gray-400 border-b border-purple-600" title={props2.alt}>{props2.title}</span>
            <span className="block text-xl text-gray-100 font-black">{props2.amount}/{props2.amount2}</span>
        </div>
    )
}