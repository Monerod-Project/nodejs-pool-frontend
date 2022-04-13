import * as React from "react";
import Navigation from "../modules/navigation/navigation";
import Footer from "../modules/navigation/footer";
import {Helmet} from "react-helmet";

const Explorer = () => {

    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>Blockchain Explorer | Monerod XMR Platform</title>
                    <meta name="description" content="A Monero Blockchain Explorer for viewing XMR transactions."/>
                </Helmet>
                <div className="container">
                    <iframe
                    src="https://explorer.monerod.org"
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
export default Explorer