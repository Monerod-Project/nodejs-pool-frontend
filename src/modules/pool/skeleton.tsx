import * as React from "react";

interface Props {
    width: string
}

const Skeleton = (props: Props) => {
    return (
        <div className={"w-full md:" + props.width}>
            <div className="flex flex-col p-8 space-y-10">
                <div className="space-y-2">
                    <div className="w-3/4 h-4 rounded bg-gray-700 animate-pulse"/>
                    <div className="w-full h-4 rounded bg-gray-700 animate-pulse"/>
                    <div className="w-5/6 h-4 rounded bg-gray-700 animate-pulse"/>
                </div>
            </div>
        </div>
    )
}

export default Skeleton
