import {Helmet} from "react-helmet";
import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import BlockPaymentTable from "../../modules/pool/minerblockpayments";
import Skeleton from "../../modules/pool/skeleton";
import useSWR from "swr";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "gatsby";
import {apiUrl} from "../../modules/utils";

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const MinerBlockPayments = () => {
    const api = {
        //Miner Block payments
        minerBlockPayments: useSWR(apiUrl + "miner/" + Cookies.get("wallet") + "/block_payments", fetcher, {refreshInterval: 1000 * 60}),
    }
    const date = new Date
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>Your Block Payments | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Miner Block Payment information." />
                </Helmet>
                <div id="main" className="container mx-auto">
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">Your Recent Block Payments</h1>
                    <div className="my-4 mx-8">
                        {!api.minerBlockPayments.data ? <Skeleton width={"w-full"}/> :
                            <>
                                <BlockPaymentTable Payments={api.minerBlockPayments.data}/>
                            </>
                        }
                    </div>
                </div>
                    <Link to="/pool/dashboard" className="mx-2 my-2 lg:mx-0 text-sm text-white text-center bg-indigo-600 hover:bg-indigo-700 font-bold rounded py-2 px-2 shadow-lg">Back</Link>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
    );
}

export default MinerBlockPayments