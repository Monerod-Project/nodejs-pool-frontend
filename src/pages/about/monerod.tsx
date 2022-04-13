import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import {Helmet} from "react-helmet";
import {StaticImage} from "gatsby-plugin-image";

const Monerod = () => {

    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
                <Helmet>
                    <title>About MonerodProject | Monerod XMR Mining Pool</title>
                    <meta name="description" content="About MonerodProject."/>
                </Helmet>
                <div className="container mx-auto bg-gray-900">
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">About MonerodProject</h1>
                    <StaticImage className= "mx-auto" objectPosition="50% 50%" placeholder="blurred" layout="fixed" height={200} src="../../images/about.webp" alt="MonerodProject" /><br />
                    <p className="text-gray-200"><i>Monerod.org is a nonprofit, but not a formal organization or company. This platform and its code is written by Monero community members from around the world, with contributions and cloud infastructure provided by our team.</i></p><br />
                    <p className="text-gray-200">Originally founded as MONEROMINEco in February 2021, our goal was to not only provide a mining pool to aid in hashrate decentralization, but a hub for the community to learn and discuss Monero. Since then we've targeted XMR adoption, built up our community, and decided to rebrand to Monerod along the way. We are "staffed" with an excellent team, and our community's growth and passion has been astounding (shoutout to all of our amazing Community Liasons)!</p><br />
                    <p className="text-gray-200">Please feel free to join our Discord/Matrix community to discuss cryptocurrency at large, view announcements, and participate in events/giveaways.</p>
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">Our Team</h1>
                    <div className="flex flex-wrap -m-4 mb-4">
                            <div className="p-2 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700 h-56">
                                    <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                    <StaticImage className="rounded-full" src="../../images/resin.webp" alt="localboast" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Localboast</h2>
                                        <p className="leading-relaxed text-base text-gray-300">I'll have a Hazy IPA please.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700 h-56">
                                    <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                    <StaticImage className="rounded-full" src="../../images/lazrex.webp" alt="Lazrex" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Lazrex</h2>
                                        <p className="leading-relaxed text-base text-gray-300">Hi, I’m Laz, I’m an addict, I love numbers, math, and probability. I’m here because no matter how hard I try, I can’t crack the crypto code and I keep coming back over and over. I’ll continue to study blockchain knowledge and one day I’ll figure out how to tilt the probability in my favor, until then you can find me in discord chatting endlessly or drinking beer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700 h-56">
                                    <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                    <StaticImage className="rounded-full" src="../../images/ulysses.webp" alt="Ulysses" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Ulysses</h2>
                                        <p className="leading-relaxed text-base text-gray-300">Ulysses Patera here, musician, expert in mid-century technology (especially electronics), vintage sci-fi enthusiast, and maybe someday futurist. I'm here to explore money as a social construct as we enter the next modern age.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700 h-56">
                                    <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                    <StaticImage className="rounded-full" src="../../images/bforemanl.webp" alt="Bforemanl" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Bforemanl</h2>
                                        <p className="leading-relaxed text-base text-gray-300">My name is Brent. I am from Toronto, Ontario. I am the keeper of the birds. I enjoy chatting about crypto, and learning about crypto currency. A true Monero fan!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700 h-56">
                                    <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                    <StaticImage className="rounded-full" src="../../images/craigwell.webp" alt="Craigwell" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Craigwell</h2>
                                        <p className="leading-relaxed text-base text-gray-300">I put the "Idiot" in "Idiot Savant". You can pull me into a conversation about anything, and what I don't have two paragraphs worth of understanding of - I'll google quick and give you a take. Atlantic Canadian. Carpenter and Trades Mutt. Dreaming of System Admin. Gen X Refugee. Beer, Hockey, Family. Mechanical adventures.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700 h-56">
                                    <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                    <StaticImage className="rounded-full" src="../../images/ted.webp" alt="Ted" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Ted</h2>
                                        <p className="leading-relaxed text-base text-gray-300">I am just a computer nerd who has no idea what he is doing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700 h-56">
                                    <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                    <StaticImage className="rounded-full" src="../../images/b1k.webp" alt="B1k" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-200 text-lg title-font font-medium mb-3">B1k</h2>
                                        <p className="leading-relaxed text-base text-gray-300">Hello I'm b1k. Jack of all trades, master of none. I have enjoyed tinkering with computers since the mid nineties, so crypto mining was right up my alley.  Monero has perfected the way crypto should be done... private, fast with inexpensive transactions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 lg:w-1/2 md:w-full">
                                <div className="flex border-2 rounded-lg p-8 sm:flex-row flex-col border-gray-700 h-56">
                                    <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-dracula-purple flex-shrink-0">
                                    <StaticImage className="rounded-full" src="../../images/brundlebear.webp" alt="Brundlebear" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-200 text-lg title-font font-medium mb-3">Brundlebear</h2>
                                        <p className="leading-relaxed text-base text-gray-300">Houston raised bug enthusiast with an interest in blockchain. Jack of all trades and a master of none.</p>
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
export default Monerod