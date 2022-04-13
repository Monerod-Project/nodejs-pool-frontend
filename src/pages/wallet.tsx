import * as React from "react";
import Navigation from "../modules/navigation/navigation";
import Footer from "../modules/navigation/footer";
import {Helmet} from "react-helmet";

const Wallet = () => {

    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>Web Wallet | Monerod XMR Platform</title>
                    <meta name="description" content="A Monero Web Wallet for creating Monero accounts, as well as sending and receiving XMR."/>
                </Helmet>
                <div className="container">
                    <iframe
                    src="https://wallet.monerod.org"
                    style={{width: '100%', height: '100vh'}}
                    />
                </div>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
        )
}
export default Wallet