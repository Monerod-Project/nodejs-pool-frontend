import * as React from "react";
import Navigation from "../modules/navigation/navigation";
import Footer from "../modules/navigation/footer";
import {StaticImage} from "gatsby-plugin-image";
import {Helmet} from "react-helmet";

const Node = () => {

    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>Public Node | Monerod XMR Mining Pool</title>
                    <meta name="description" content="A Monero Public Node for remote wallet connections."/>
                </Helmet>
                <div className="container mx-auto h-screen bg-gray-900">
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">Public Node</h1>
                    <p className="text-gray-200">
                    Wallets, including the Official Monero Wallet, require a connection to the Monero blockchain. Makes sense. Our node allows folks to sync their wallets without having to download the entire blockchain. You can find the official guide <a href="https://www.getmonero.org/resources/user-guides/remote_node_gui.html" target="_blank" rel="noreferrer" className="text-indigo-400">here</a>. TLS (SSL) is required for our node, and some connection scenarios may require the <a href="https://letsencrypt.org/certificates/" target="_blank" rel="noreferrer" className="text-indigo-400">Let's Encrypt ISRG_Root_X1.pem</a> certificate.
                    </p>
                    <br />
                    <table className="divide-y divide-gray-100 w-80 mx-auto rounded-lg text-gray-200 text-left">
                    <tr><th>Address</th><th>Port</th><th>TLS</th></tr>
                    <tr><td>node.monerod.org</td><td>443</td><td>Yes</td></tr>
                    </table>
                    <br />
                    <p className="text-gray-200">
                    <b className="text-red-600">NOTE:</b><br />
                    It is strongly recommended that you host your own (local) copy of the blockchain. This is the only way to ensure nothing has been tampered with, with the added benefit of helping the network. We promise we're not malicious, but please only use our node if you cannot host your own copy.
                    </p>
                    <br /><hr /><br />
                    <StaticImage className= "mx-auto" objectPosition="50% 50%" placeholder="blurred" layout="fixed" height={450} src="../images/remote_node.webp" alt="Remote Node" />
                </div>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
        )
}
export default Node