import {Helmet} from "react-helmet";
import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import {BlockTable} from "../../modules/pool/blocks";
import Skeleton from "../../modules/pool/skeleton";
import useSWR from "swr";
import axios from "axios";
import {apiUrl} from "../../modules/utils";

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const Blocks = () => {
    const api = {
        //Pool Blocks
        poolBlocks: useSWR(apiUrl + "pool/blocks", fetcher, {refreshInterval: 1000 * 60}),
    }
    const date = new Date
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>Pool Blocks | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Pool Block information." />
                </Helmet>
                <div id="main" className="container mx-auto">
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">Recent Pool Blocks</h1>
                    <div className="my-4 mx-8">
                        {!api.poolBlocks.data ? <Skeleton width={"w-full"}/> :
                            <>
                                <BlockTable Blocks={api.poolBlocks.data}/>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
    );
}

export default Blocks