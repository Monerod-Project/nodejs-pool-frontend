import * as React from "react";
import {useEffect, useState} from "react";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../modules/navigation/navigation";
import Footer from "../modules/navigation/footer";
import {Helmet} from "react-helmet";
import Cookies from "js-cookie";
import {website} from '../modules/utils';
import {FaSwimmingPool, FaHandHoldingUsd, FaFire, FaCode, FaExchangeAlt, FaCashRegister, FaWallet, FaSearch, FaDatabase} from 'react-icons/fa/';

const moneroRegex = /^[4|8]{1}([A-Za-z0-9]{105}|[A-Za-z0-9]{94})$/

const Home = () => {
    const [wallet, setWallet] = useState("")
    const [signInerr, setError] = useState("")

    const walletChange = (event: any) => {
        setWallet(event.target.value)
    }

    {/*useEffect(() => {
        if (typeof window === "undefined") return
        if (Cookies.get("wallet") !== undefined) window.location.href = "/"
    }, []);*/}


    const signIn = () => {
        if (wallet === "") {
            setError("Please enter a valid address.")
            return
        }
        let addr = moneroRegex.test(wallet)
        if (addr === false) {
            setError("Sorry, that's not a valid address.")
            return
        }
        if (typeof window !== 'undefined') {
            Cookies.set("wallet", wallet, {sameSite: "strict", expires: 365 * 10})
        }
        document.location.href = website + 'pool/dashboard'
    }

    return (
        <>
            <Helmet>
                <title>Home | Monerod XMR Mining Pool</title>
                <meta name="description" content="Monerod is a Monero Platform offering a variety of zero-fee services to aid in XMR adoption."/>
                <meta property="og:title" content="Monerod Monero/XMR Platform" />
                <meta property="og:description" content="Monerod is a Monero Platform offering a variety of zero-fee services to aid in XMR adoption." />
                <meta name="theme-color" content="#6d1fde"/>
                <meta property="og:type" content="website" />
            </Helmet>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen flex relative z-20 items-center bg-circuit bg-cover">
                <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
                    <div className="flex p-6">
                            <StaticImage className= "mx-auto" src="../images/world.svg" alt="Decentralized" height={150} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-2xl md:text-3xl text-dracula-foreground lg:text-5xl font-black text-center leading-tight">
                            A Nonprofit & Entirely Open Source Monero Mining Pool<br />
                        </h1>
                        <h3 className="leading-normal text-gray-300 text-base text-sm my-4 text-center italic">
                            XMR is decentralized, anonymous, financial freedom. We're just here to help.
                        </h3>
                    </div>

                    <div className="m-4">
                        <form action="">
                            <div className="mb-4">
                                {/*<label className="mb-2 text-sm text-gray-400">Mining Wallet Address</label>*/}
                                <input type="text" onChange={walletChange} placeholder="Mining Wallet Address" className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-indigo-300 bg-gray-700 text-white placeholder-gray-500 border-gray-600 focus:ring-gray-900 focus:border-gray-500" />
                            </div>
                            <div className="mb-4">
                                <button type="button" onClick={signIn} className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign In</button>
                            </div>
                            {signInerr ? <div className="w-full text-white bg-red-600 py-2 mb-2 text-center rounded-lg">{signInerr}</div> : ""}
                            <p className="text-sm text-center text-gray-400">Need a wallet? <a href="https://www.getmonero.org/downloads/" target="_blank" rel="noreferrer" className="text-indigo-400 focus:outline-none focus:underline focus:border-indigo-800">Get the Official Monero Wallet</a>.</p>
                        </form>
                    </div>

                    <div className="my-3 indicator">
                        {/*<div className="indicator-item indicator-bottom badge badge-primary">{require('../../package.json').version}</div>*/}
                        {/*<Link to="/login" className="mx-auto lg:mx-0 hover:underline text-xl text-gray-800 text-center bg-dracula-green font-extrabold rounded py-4 px-8 shadow-lg w-48">
                            Sign in
                        </Link>*/}
                    </div>
                    <div className="block w-full mx-auto relative">
                        {/*<StaticImage src="../images/dashboard-screenshot.png" alt="Dashboard screenshot"/>*/}
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex justify-center my-4">
                                <span className="font-black text-dracula-foreground text-center text-3xl ">Why Monerod</span>
                            </div>
                            <div className="flex border-2 rounded-lg p-4 sm:flex-row flex-col border-gray-700 mb-4">
                                <div
                                className="w-16 h-16 sm:mr-4 sm:mt-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                <FaHandHoldingUsd size={40}/>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Zero Fees</h2>
                                    <p className="leading-relaxed text-base text-gray-300">This pool has no fees, we even pay your withdrawal TX fee! We encourage those who can to use <a href="https://p2pool.io" target="_blank" rel="noreferrer" className="text-indigo-400 focus:outline-none focus:underline focus:border-indigo-800">P2Pool</a>!</p>
                                </div>
                            </div>
                            <div className="flex border-2 rounded-lg p-4 sm:flex-row flex-col border-gray-700 mb-4">
                                <div
                                className="w-16 h-16 sm:mr-4 sm:mt-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                <FaFire size={40}/>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Bonus Hashrate</h2>
                                    <p className="leading-relaxed text-base text-gray-300">All active miners are automatically part of our Bonus Hashrate rotation! Use XMRig-md to contribute to our crowd-funded hash!</p>
                                </div>
                            </div>
                            <div className="flex border-2 rounded-lg p-4 sm:flex-row flex-col border-gray-700 mb-4">
                                <div
                                className="w-16 h-16 sm:mr-4 sm:mt-4 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                <FaCode size={40}/>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Open Source</h2>
                                    <p className="leading-relaxed text-base text-gray-300">All of our code is public, and we have excellent community members willing to contribute!</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div className="flex justify-center my-4">
                                <span className="font-black text-dracula-foreground text-center text-3xl ">Connection Guide</span>
                            </div>
                            <div className="flex border-2 rounded-lg p-4 sm:flex-row flex-col border-gray-700">
                                <div className="align-middle w-auto">
                                    <p className="text-gray-200 flex">
                                        <b>1</b>. Download <a href="https://github.com/Monerod-Project/xmrig-md/releases" target="_blank" rel="noreferrer" className="text-indigo-400 flex mr-2 ml-2">XMRig-md</a> or <a href="https://github.com/xmrig/xmrig/releases" target="_blank" rel="noreferrer" className="text-indigo-400 flex ml-2">XMRig Official</a>.
                                    </p><br />
                                    <p className="text-gray-200 mb-8">
                                        <b>2</b>. Update the following values in XMRig's config.json file, then Sign In here with your mining wallet address:<br /><br />
                                        "url": "mine.monerod.org:4444",<br />
                                        "user": "YourMiningWalletAddress",<br />
                                        "pass": "YourMiningWorkerName",<br />
                                        "keepalive": true,<br />
                                        "tls": true,<br /><br />
                                        <i>Unencrypted Mining: Set your config.json's "url" to "mine.monerod.org:5555" with "tls" set to false.</i><br /><br />
                                        <i>Tor Mining: Set your config.json's "url" to <span className="text-sm">"monerod3ejgt6a54uq5gha3mt5qilwivrzp4genp2flhpudkjnhf33id.onion:4444"</span> with "tls" set to true.</i>
                                    </p>
                                    <p className="text-gray-200">
                                        <b>3</b>. Run XMRig as administrator (Windows) or sudo (Linux)!
                                    </p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
    )
}

export default Home
