import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import { StaticImage } from "gatsby-plugin-image";
import {Helmet} from "react-helmet";
import * as copy from 'copy-to-clipboard';
import {FaClipboard} from 'react-icons/fa/';

const Donate = () => {
var address="8B6nMw5K64bKcejt17PfBsjMpANKuRsBU3FeStsru5fTZeCwVqQVebUfwjPeoM8WshiAg1a5x85RgYx2s3JzTRLsKdK1Q9C"
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>Donate | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Donate to MonerodProject."/>
                </Helmet>
                <div className="container mx-auto h-screen bg-gray-900">
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">Donate to Monerod</h1>
                    <p className="text-gray-200 text-center text-2xl">
                    We don't need your hard-earned XMR, but it %100 helps us cover our infastructure costs and community drops/giveaways!
                    </p>
                    <br />
                    <p className="text-gray-200">

                    </p>
                    <br />
                    <p className="text-gray-200 text-center">
                    <b>Simple Donation</b><br />
                    Scan the QR code (or click the clipboard icon to copy the address), send what you please!<br />
                    <br />
                    <b>Discord-Based Donation</b><br />
                    Use the $store command in our Discord.<br />
                    <br />
                    <b>Pool Bonus Hashrate Contribution</b><br />
                    Download and run <a href="https://github.com/Monerod-Project/xmrig-md/releases" target="_blank" rel="noreferrer" className="text-indigo-400">XMRig-md</a>, default contribution of %1.
                    </p>
                    <br /><hr /><br />
                    <StaticImage className= "mx-auto" objectPosition="50% 50%" placeholder="blurred" layout="fixed" width={200} src="../../images/donate.webp" alt="Donate" />
                    <FaClipboard title="Copy Address To Clipboard" className="text-indigo-400 ml-auto mr-auto text-2xl" onClick={() => copy(address)}/>
                </div>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
        )
}
export default Donate