import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Helmet} from "react-helmet";
import * as React from "react";
import {website} from '../modules/utils';
import Navigation from "../modules/navigation/navigation";
import Footer from "../modules/navigation/footer";

const moneroRegex = /^[4|8]{1}([A-Za-z0-9]{105}|[A-Za-z0-9]{94})$/

const Login = () => {
    const [wallet, setWallet] = useState("")
    const [signInerr, setError] = useState("")

    const walletChange = (event: any) => {
        setWallet(event.target.value)
    }

    useEffect(() => {
        if (typeof window === "undefined") return
        if (Cookies.get("wallet") !== undefined) window.location.href = "/pool/dashboard"
    }, []);


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
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="flex items-center min-h-screen bg-gray-900">
                <Helmet>
                    <title>Sign In | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Sign in with your monero wallet address."/>
                </Helmet>
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto my-10">
                        <div className="text-center">
                            <h1 className="my-3 text-4xl font-semibold text-gray-200">Sign In</h1>
                            <p className="text-gray-400 text-sm">Sign In with your mining wallet address to access the Pool Dashboard</p>
                        </div>
                        <div className="m-7">
                            <form action="">
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm text-gray-400">Wallet Address</label>
                                    <input type="text" onChange={walletChange} placeholder="" className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-indigo-300 bg-gray-700 text-white placeholder-gray-500 border-gray-600 focus:ring-gray-900 focus:border-gray-500" />
                                </div>
                                <div className="mb-6">
                                    <button type="button" onClick={signIn} className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign In</button>
                                </div>
                                {signInerr ? <div className="w-full text-white bg-red-600 py-2 mb-2 text-center rounded-lg">{signInerr}</div> : ""}
                                <p className="text-sm text-center text-gray-400">Don&#x27;t have a wallet? <a href="https://www.getmonero.org/downloads/" className="text-indigo-400 focus:outline-none focus:underline focus:border-indigo-800">Download the Official Monero Wallet</a>.</p>
                            </form>
                        </div>

                        <div className="align-middle bg-dashboard-blue-500 w-auto px-4 py-4 rounded-md">
                            <h3 className="text-3xl text-dracula-foreground font-bold leading-none mb-3">Mine XMR With Us!</h3>
                            <p className="text-gray-200 flex">
                                <b>1</b>. Download <a href="https://git.monerod.org/monerodproject/xmrig-md/-/releases" target="_blank" rel="noreferrer" className="text-indigo-400 flex mr-2 ml-2">XMRig-md</a> or <a href="https://github.com/xmrig/xmrig/releases" target="_blank" rel="noreferrer" className="text-indigo-400 flex ml-2">XMRig Official</a>
                            </p>
                            <p className="text-gray-200 mb-8">
                                <b>2</b>. Update the following values in XMRig's config.json file, then Sign In here with your mining wallet address:<br /><br />
                                "url": "mine.monerod.org:4444",<br />
                                "user": "YourMiningWalletAddress",<br />
                                "pass": "YourMiningWorkerName",<br />
                                "keepalive": true,<br />
                                "tls": true,<br /><br />
                                <i>Unencrypted Mining: Set your config.json's "url" to "mine.monerod.org:5555" with "tls" set to false.</i><br /><br />
                                <i>Tor Mining: Set your config.json's "url" to <span className="text-xs">"monerod3ejgt6a54uq5gha3mt5qilwivrzp4genp2flhpudkjnhf33id.onion:4444"</span> with "tls" set to true.</i>
                            </p>
                            <p className="text-gray-200">
                                <b>3</b>. Run XMRig as administrator (Windows) or sudo (Linux)!
                            </p>
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
export default Login
