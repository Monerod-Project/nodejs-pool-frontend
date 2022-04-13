import {Helmet} from "react-helmet";
import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import {PaymentTable} from "../../modules/pool/payments";
import Skeleton from "../../modules/pool/skeleton";
import useSWR from "swr";
import axios from "axios";
import {apiUrl} from "../../modules/utils";

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const Payments = () => {
    const api = {
        //Pool Payments
        poolPayments: useSWR(apiUrl + "pool/payments", fetcher, {refreshInterval: 1000 * 60}),
    }
    const date = new Date
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>Pool Payments | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Pool payment information." />
                </Helmet>
                <div id="main" className="container mx-auto">
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">Recent Pool Payments</h1>
                    <div className="my-4 mx-8">
                        {!api.poolPayments.data ? <Skeleton width={"w-full"}/> :
                            <>
                                <PaymentTable Payments={api.poolPayments.data}/>
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

export default Payments