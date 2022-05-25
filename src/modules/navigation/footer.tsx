import * as React from "react";
import {SiGitlab, SiGithub, SiDiscord, SiMatrix, SiTwitter} from 'react-icons/si/';
import {FaAt, FaServer} from 'react-icons/fa/';

const Footer = () => {

    return (
        <>
            <div className="relative bg-dracula-background border-t-4 border-neutral">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="justify-between items-center py-4 md:justify-start md:space-x-10">
                        <p className="text-gray-200 text-center">
                        <span className="text-xs">You can reach us over Tor @ monerod2jqtblreunnwtzqbjjj4slvsd3cjbhnzt2evwnry5u772l3qd.onion</span><br />
                        <a href="https://github.com/Monerod-Project" target="_blank" rel="noreferrer" className="text-indigo-400"><SiGithub title="View our Code Repositories" size={35} style={{margin: '0 auto', display: 'inline-block', padding: '5px'}}/></a>
                        <a href="https://discord.gg/ZypfV3kkb6" target="_blank" rel="noreferrer" className="text-indigo-400"><SiDiscord title="Chat with us on Discord" size={35} style={{margin: '0 auto', display: 'inline-block', padding: '5px'}}/></a>
                        <a href="https://matrix.to/#/!pGfBoPkfnkVTZbEviZ:monero.social?via=monero.social" target="_blank" rel="noreferrer" className="text-indigo-400"><SiMatrix title="Chat with us on Matrix" size={35} style={{margin: '0 auto', display: 'inline-block', padding: '5px'}}/></a>
                        <a href="https://twitter.com/monerodproject" target="_blank" rel="noreferrer" className="text-indigo-400"><SiTwitter title="Follow us on Twitter" size={35} style={{margin: '0 auto', display: 'inline-block', padding: '5px'}}/></a>
                        <a href="mailto:support@monerod.org" target="_blank" rel="noreferrer" className="text-indigo-400"><FaAt title="Shoot us an Email" size={35} style={{margin: '0 auto', display: 'inline-block', padding: '5px'}}/></a>
                        <a href="https://stats.uptimerobot.com/Yq6qQF3K0o" target="_blank" rel="noreferrer" className="text-indigo-400"><FaServer title="View our Infastructure Status" size={35} style={{margin: '0 auto', display: 'inline-block', padding: '5px'}}/></a><br />
                        2021-2022 MonerodProject | <a href="https://github.com/Monerod-Project/nodejs-pool-frontend" target="_blank" rel="noreferrer" className="text-indigo-400">v1.6.2</a> | We are in no way affiliated with the good folks at <a href="https://getmonero.org" target="_blank" rel="noreferrer" className="text-indigo-400">GetMonero.org</a><br />
                        <span className="text-xs">
                        Frontend: <a href="https://github.com/Monerod-Project/nodejs-pool-frontend" target="_blank" rel="noreferrer" className="text-indigo-400">Monerod</a>/<a href="https://github.com/provsalt/beast-oss" target="_blank" rel="noreferrer" className="text-indigo-400">provsalt</a> | 
                        Pool: <a href="https://github.com/Monerod-Project/nodejs-pool" target="_blank" rel="noreferrer" className="text-indigo-400">Monerod</a>/<a href="https://github.com/MoneroOcean/nodejs-pool" target="_blank" rel="noreferrer" className="text-indigo-400">MoneroOcean</a> | 
                        Bonus Hashrate: <a href="https://github.com/Monerod-Project/nodejs-pool-bonus-hashrate" target="_blank" rel="noreferrer" className="text-indigo-400">Monerod</a>/<a href="https://github.com/fallacy-xmr/hashrate-bonus" target="_blank" rel="noreferrer" className="text-indigo-400">fallacy</a> | 
                        {/*Wallet: <a href="https://git.monerod.org/monerodproject/open-monero" target="_blank" rel="noreferrer" className="text-indigo-400">Monerod</a>/<a href="https://github.com/moneroexamples/openmonero" target="_blank" rel="noreferrer" className="text-indigo-400">MoneroExamples</a> | 
                        Explorer: <a href="https://git.monerod.org/monerodproject/onion-monero-blockchain-explorer" target="_blank" rel="noreferrer" className="text-indigo-400">Monerod</a>/<a href="https://github.com/moneroexamples/onion-monero-blockchain-explorer" target="_blank" rel="noreferrer" className="text-indigo-400">MoneroExamples</a> | 
                        Wiki: <a href="https://js.wiki/" target="_blank" rel="noreferrer" className="text-indigo-400">Wiki.js</a> | */}
                        Discord Bot: <a href="https://github.com/Monerod-Project/nodejs-pool-discord-bot" target="_blank" rel="noreferrer" className="text-indigo-400">Monerod</a>/<a href="https://github.com/fallacy-xmr/pool-discord-bot" target="_blank" rel="noreferrer" className="text-indigo-400">fallacy</a> | 
                        XMRig-md: <a href="https://github.com/Monerod-Project/xmrig-md" target="_blank" rel="noreferrer" className="text-indigo-400">Monerod</a>/<a href="https://github.com/xmrig/xmrig" target="_blank" rel="noreferrer" className="text-indigo-400">XMRig</a>
                        </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
        )
}
export default Footer