import {Helmet} from "react-helmet";
import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import {apiUrl} from "../../modules/utils";

const apis = [
    {
        question: "POOL: Network Statistics",
        answer: apiUrl + "network/stats"
    },
    {
        question: "POOL: Pool Statistics",
        answer: apiUrl + "pool/stats"
    },
    {
        question: "POOL: Pool Ports",
        answer: apiUrl + "pool/ports"
    },
    {
        question: "POOL: Miner Settings",
        answer: apiUrl + "user/YOUR_MINING_ADDRESS"
    },
    {
        question: "POOL: Miner Statistics",
        answer: apiUrl + "miner/YOUR_MINING_ADDRESS/stats"
    },
    {
        question: "POOL: Miner Workers",
        answer: apiUrl + "miner/YOUR_MINING_ADDRESS/stats/allworkers"
    },
]

export default function API() {
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="bg-dracula-background h-screen flex flex-col items-center">
                <Helmet>
                    <title>APIs | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Frequently Asked Questions." />
                </Helmet>
                <h1 className="text-3xl text-gray-200 my-6 font-black">API Documentation</h1>
                {apis.map((api, index) => {
                    return (
                        <div tabIndex={0} key={index}
                             className="collapse w-3/5 collapse-plus bg-purple-600 text-gray-200 static my-0.5">
                            <div className="collapse-title md:text-xl sm:text-md font-medium">
                                <p>{api.question}</p>
                            </div>
                            <div className="collapse-content">
                                <p className="text-white flex-wrap">
                                    {api.answer}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
    );
}
