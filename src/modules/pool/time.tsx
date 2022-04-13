import * as React from "react";
import Moment from "react-moment";
import moment from "moment-timezone";

interface Props {
    title: string
    time: number
    alt: string
}

export const Time = (props: Props) => {
    return (
        <div className="w-flex">
            <span className="text-gray-400 border-b border-purple-600" title={props.alt}>{props.title}</span>
            <span className="block text-xl text-gray-100 font-black"><Moment local format="h:mma">{moment(props.time).format()}</Moment></span>
        </div>
    )
}
