import {Helmet} from "react-helmet";
import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import {WorkerList} from "../../modules/pool/workers";
import Skeleton from "../../modules/pool/skeleton";
import useSWR from "swr";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "gatsby";
import {apiUrl} from "../../modules/utils";

const fetcher = (url: string) => axios.get(url).then(res => Object.values(res.data))

const MinerWorkers = () => {
    const api = {
        //Miner Workers Hashrate
        workerStats: useSWR(apiUrl + "miner/" + Cookies.get("wallet") + "/stats/allworkers", fetcher, {refreshInterval: 1000 * 60}),
    };
    
    const date = new Date
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>Your Workers | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Pool Miner Worker information." />
                </Helmet>
                <div id="main" className="container mx-auto">
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">Your Workers</h1>
                    <div className="my-4 mx-8">
                        {!api.workerStats.data ? <Skeleton width={"w-full"}/> :
                            <>
                                <WorkerList Workers={api.workerStats.data}/>
                            </>
                        }
                    </div>
                </div>
                    <p className="text-sm text-gray-200">If you have more than 10 workers please use <a className="text-indigo-400" href="https://github.com/xmrig/xmrig-proxy/releases" rel="noreferrer" target="_blank">XMRig-Proxy</a>.</p><br />
                    <Link to="/pool/dashboard" className="mx-2 my-2 lg:mx-0 text-sm text-white text-center bg-indigo-600 hover:bg-indigo-700 font-bold rounded py-2 px-2 shadow-lg">Back</Link>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
    );
}

export default MinerWorkers