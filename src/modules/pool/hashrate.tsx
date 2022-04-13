import { TimeScale } from "chart.js";
import * as React from "react";
import {abbreviateNumber} from "../utils";

interface Props {
    title: string
    hashrate: number
    alt: string
}

export const Hashrate = (props: Props) => {
    return (
        <div className="w-flex">
            <span className="text-gray-400 border-b border-purple-600" title={props.alt}>{props.title}</span>
            <span className="block text-xl text-gray-100 font-black">{abbreviateNumber(props.hashrate)}</span>
        </div>
    )
}