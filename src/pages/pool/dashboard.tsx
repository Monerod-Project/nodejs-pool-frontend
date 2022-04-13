import * as React from "react";
import {useEffect} from "react";
import useSWR from "swr";
import axios from "axios";
import Cookies from "js-cookie";
import {Balance} from "../../modules/pool/balance";
import {WorkerList, Workers} from "../../modules/pool/workers";
import {Price} from "../../modules/pool/price";
import {Hashrate} from "../../modules/pool/hashrate";
import {Time} from "../../modules/pool/time";
import Skeleton from "../../modules/pool/skeleton";
import {Amount, Amount2} from "../../modules/pool/amount";
import {Helmet} from "react-helmet";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import DashChart from "../../modules/pool/dashchart";
import MinerChart from "../../modules/pool/minerchart";
import {FaSwimmingPool, FaGlobe, FaMonero, FaUser, FaUserPlus, FaUserCog} from 'react-icons/fa/';
import { Link } from "gatsby";
import {apiUrl} from "../../modules/utils";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const Dashboard = () => {
    
    const url = () => {
        if (typeof window === undefined) return null
        let coin;
        if (localStorage.getItem("currency") !== null) {
            coin = localStorage.getItem("currency")
        } else {
            coin = "USD"
        }
        return "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" + coin + "&ids=monero&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=1h"
    }

    useEffect(() => {
        if (typeof window === "undefined") return
        if (Cookies.get("wallet") === undefined) window.location.href = "/"
    }, []);

    let moneroPrice = useSWR(url, fetcher, {refreshInterval: 1000 * 60})

    const api = {
        //Network Stats
        netStats: useSWR(apiUrl + "network/stats", fetcher, {refreshInterval: 1000 * 60}),
        //Pool Stats
        poolStats: useSWR(apiUrl + "pool/stats", fetcher, {refreshInterval: 1000 * 60}),
        //Pool Ports
        poolPorts: useSWR(apiUrl + "pool/ports", fetcher, {refreshInterval: 1000 * 60}),
        //Payment threshold and email enabled boolean for miner
        userStats: useSWR(apiUrl + "user/" + Cookies.get("wallet"), fetcher, {refreshInterval: 1000 * 60}),
        //Miner Stats
        minerStats: useSWR(apiUrl + "miner/" + Cookies.get("wallet") + "/stats", fetcher, {refreshInterval: 1000 * 60}),
        //Miner Workers
        workerNames: useSWR(apiUrl + "miner/" + Cookies.get("wallet") + "/identifiers", fetcher, {refreshInterval: 1000 * 60}),
        //Bonus Hashrate
        bonusStats: useSWR("https://bonus-api.monerod.org/2/summary", fetcher, {refreshInterval: 1000 * 60}),
    }

    const date = new Date

    return (
        <>
           <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex z-0">
                <Helmet>
                    <title>Dashboard | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Network, Pool, and Miner statistics dashboard." />
                </Helmet>
                <div id="main" className="container mx-auto">
                    <div className="w-max inline-block mb-4 mt-6 ml-4 h-24 float-left">
                        <h1 className="text-3xl text-dracula-foreground">Good {date.getHours() > 12 ? "Evening" : "Morning"}</h1>
                        <span className="text-dracula-comment">
                            v1.6.0 Live! Provide feedback on our Discord/Matrix.<br />
                            Please support P2Pool if you can @ p2pool.io!
                        </span>
                    </div>
                    {!moneroPrice.data ? "" :
                        <div className="bg-dashboard-blue-500 rounded-md w-max mb-4 mt-6 ml-4 h-24 inline-block float-right">
                            <div className="w-full">
                                <div className="flex items-center justify-between px-4 py-4 space-x-4">
                                    <div className="flex items-center static">
                                        <span
                                            className="rounded-full relative p-1 bg-dracula-purple border-4 border-black z-10 transform -translate-y-9">
                                                <FaMonero size={30}/>
                                        </span>
                                        <p className="text-md text-white transform -translate-x-12 font-semibold text-left">
                                            Monero
                                        </p>
                                    </div>
                                    <Price title="Price" alt="Current XMR Price" price={moneroPrice.data[0].current_price}/>
                                </div>
                            </div>
                        </div>
                    }
                    {/*<div className="bg-dashboard-blue-500 rounded-md w-max mb-4 mt-6 h-24 inline-block float-right">
                        <div className="w-full">
                            <div className="flex items-center justify-between px-4 py-4 space-x-4">
                                <div className="flex items-center static">
                                    <span
                                        className="rounded-full relative p-1 bg-dracula-purple border-4 border-black z-10 transform -translate-y-9">
                                            <FaUserCog size={30}/>
                                    </span>
                                    <p className="text-md text-white transform -translate-x-12 font-semibold text-left">
                                        Setup
                                    </p>
                                </div>
                                <span className="text-align-left text-gray-200 inline">Please see our <a href="https://wiki.monerod.org" target="_blank" rel="noreferrer" className="text-indigo-400 inline">Wiki</a><br />for mining guides.</span>
                            </div>
                        </div>
                    </div>*/}

                    {/*NETWORK/POOL SECTION*/}
                    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 h-64 my-5 z-10 bg-dashboard-blue-500 w-full rounded-2xl">
                        <DashChart />
                    </div>
                    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 my-6 z-10">
                        {!api.poolStats.data || !api.bonusStats.data ?
                            <>
                                <Skeleton width={"w-4/10"}/>
                                <Skeleton width={"w-6/10"}/>
                            </>
                            :
                            <>
                                {!api.netStats.data ? "" :
                                <div className="w-flex bg-dashboard-blue-500 rounded-md">
                                    <div className="w-full">
                                        <div className="flex items-center justify-between px-4 py-4 space-x-4">
                                            <div className="flex items-center static">
                                                <span
                                                    className="rounded-full relative p-1 bg-dracula-purple border-4 border-black z-10 transform -translate-y-9">
                                                        <FaGlobe size={30}/>
                                                </span>
                                                <p className="text-md text-white transform -translate-x-12 font-semibold text-left">
                                                    Network
                                                </p>
                                            </div>
                                            <Table>
                                                <Tbody>
                                                    <Td className="pr-4 w-max"><Hashrate title="Hashrate" alt="Network Hashrate" hashrate={api.netStats.data?.difficulty / 120}/></Td>
                                                    <Td className="pr-4 w-max"><Amount title="Height" alt="Network Block Height" amount={api.netStats.data?.height}/></Td>
                                                    <Td className="pr-4 w-max"><Time title="Time" alt="Network Last Block Time" time={api.netStats.data?.ts * 1000}/></Td>
                                                </Tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                                }
                                <div className="w-flex bg-dashboard-blue-500 rounded-md">
                                    <div className="w-full">
                                        <div className="flex items-center justify-between px-4 py-4 space-x-4">
                                            <div className="flex items-center static">
                                                <span
                                                    className="rounded-full relative p-1 bg-dracula-purple border-4 border-black z-10 transform -translate-y-9">
                                                        <FaSwimmingPool size={30}/>
                                                </span>
                                                <p className="text-md text-white transform -translate-x-12 font-semibold text-left">
                                                    Pool
                                                </p>
                                            </div>
                                            <Table>
                                                <Tbody>
                                                    <Td className="pr-4 w-max"><Hashrate title="Hashrate" alt="Pool Hashrate" hashrate={api.poolStats.data?.pool_statistics.hashRate}/></Td>
                                                    <Td className="pr-4 w-max"><Hashrate title="Bonus Hashrate" alt="Pool Bonus Hashrate for Active Miners" hashrate={api.bonusStats.data?.hashrate.total[1]*1000}/></Td>
                                                    <Td className="pr-4 w-max"><Amount2 title="Miners" alt="Accounts/Workers Connected to Pool" amount={api.poolStats.data?.pool_statistics.miners} amount2={api.poolPorts.data?.global[0]?.miners + api.poolPorts.data?.global[1].miners}/></Td>
                                                    <Td className="pr-4 w-max"><Amount title="Blocks" alt="Blocks Found by Pool" amount={api.poolStats.data?.pool_statistics.totalBlocksFound}/></Td>
                                                    <Td className="pr-4 w-max"><Amount title="Effort" alt="Current Pool Block Effort" amount={(100 * (api.poolStats.data?.pool_statistics.roundHashes / api.netStats.data?.difficulty)).toFixed(2) + "%"}/></Td>
                                                    <Td className="pr-4 w-max"><Amount2 title="Payments" alt="Payments Made/Accounts Paid by Pool" amount={api.poolStats.data?.pool_statistics.totalPayments} amount2={api.poolStats.data?.pool_statistics.totalMinersPaid}/></Td>
                                                    <Td className="pr-4 w-max"><Amount title="PPLNS Window" alt="Pool PPLNS Window Length" amount={(api.poolStats.data?.pool_statistics.pplnsWindowTime / 3600).toFixed(2) + " Hours"}/></Td>
                                                    <Td className="pr-4 w-max"><Amount title="Network Share" alt="Pool Network Hashrate Share" amount={(100 * (api.poolStats.data?.pool_statistics.hashRate / (api.netStats.data?.difficulty / 120))).toFixed(4) + "%"}/></Td>
                                                </Tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    {/*MINER SECTION*/}
                    <hr />
                    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 h-64 my-5 z-10 bg-dashboard-blue-500 w-full rounded-2xl">
                        <MinerChart/>
                    </div>

                    <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4 my-6 z-10">
                        {!api.userStats.data || !api.minerStats.data || !moneroPrice.data || !api.workerNames.data ?
                            <>
                                <Skeleton width={"w-3/10"}/>
                                <Skeleton width={"w-5/10"}/>
                                <Skeleton width={"w-2/10"}/>
                            </>
                            :
                            <>
                                <Balance
                                    balance={api.minerStats.data?.amtDue}
                                    paid={api.minerStats.data?.amtPaid}
                                    max={api.userStats.data?.payout_threshold}
                                    fiat={moneroPrice.data[0]?.current_price}
                                />
                                <div className="w-flex bg-dashboard-blue-500 rounded-md">
                                    <div className="w-full">
                                        <div className="flex items-center justify-between px-4 py-4 space-x-4">
                                            <div className="flex items-center static">
                                                <span
                                                    className="rounded-full relative p-1 bg-dracula-purple border-4 border-black z-10 transform -translate-y-9">
                                                        <FaUser size={30}/>
                                                </span>
                                                <p className="text-md text-white transform -translate-x-12 font-semibold text-left">
                                                    Stats
                                                </p>
                                            </div>
                                            <Table>
                                                <Tbody>
                                                    <Td className="pr-4 w-max"><Hashrate title="Hashrate" alt="Your Total Effective Hashrate" hashrate={api.minerStats.data?.hash}/></Td>
                                                    <Td className="pr-4 w-max"><Workers title="Workers" alt="Your Total Workers" workers={Object.keys(api.workerNames.data)?.length}/></Td>
                                                    <Td className="pr-4 w-max"><Amount2 title="Shares" alt="Your Total Valid/Invalid Shares" amount={api.minerStats.data?.validShares} amount2={api.minerStats.data?.invalidShares}/></Td>
                                                    <Td className="pr-4 w-max"><Amount title="Pool Share" alt="Your Pool Hashrate Share" amount={(100 * (api.minerStats.data?.hash / api.poolStats.data?.pool_statistics.hashRate)).toFixed(4) + "%"}/></Td>
                                                </Tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-flex bg-dashboard-blue-500 rounded-md">
                                    <div className="w-full">
                                        <div className="flex items-center justify-between px-4 py-4 space-x-4">
                                            <div className="flex items-center static">
                                                <span
                                                    className="rounded-full relative p-1 bg-dracula-purple border-4 border-black z-10 transform -translate-y-9">
                                                        <FaUserPlus size={30}/>
                                                </span>
                                                <p className="text-md text-white transform -translate-x-12 font-semibold text-left">
                                                    Detail
                                                </p>
                                            </div>
                                            <Link to="/pool/minerworkers" className="mx-auto lg:mx-0 text-sm text-white text-center bg-indigo-600 hover:bg-indigo-700 font-bold rounded py-2 px-2 shadow-lg">Workers</Link>
                                            <Link to="/pool/minerpayments" className="mx-auto lg:mx-0 text-sm text-white text-center bg-indigo-600 hover:bg-indigo-700 font-bold rounded py-2 px-2 shadow-lg">Payments</Link>
                                            <Link to="/pool/minerblockpayments" className="mx-auto lg:mx-0 text-sm text-white text-center bg-indigo-600 hover:bg-indigo-700 font-bold rounded py-2 px-2 shadow-lg">Block Payments</Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
    )
}

export default Dashboard
