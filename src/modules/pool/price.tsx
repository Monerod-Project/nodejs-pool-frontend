import * as React from "react";

interface Props {
    title: string
    price: number
    alt: string
}

export const Price = (props: Props) => {
    return (
        <div className="w-flex">
            <span className="text-gray-400 border-b border-purple-600" title={props.alt}>{props.title}</span>
            <span className="block text-xl text-gray-100 font-black">{props.price} {localStorage.getItem("currency") || "USD"}</span>
        </div>
    )
}
