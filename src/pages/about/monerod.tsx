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
                <div className="container mx-auto h-screen bg-gray-900">
                    <h1 className="text-3xl text-gray-200 my-6 font-black text-center">About MonerodProject</h1>
                    <StaticImage className= "mx-auto" objectPosition="50% 50%" placeholder="blurred" layout="fixed" height={200} src="../../images/about.webp" alt="MonerodProject" /><br />
                    <p className="text-gray-200"><i>Monerod.org is a nonprofit, but not a formal organization or company. This platform and its code is written by Monero community members from around the world, with contributions and cloud infastructure provided by our team.</i></p><br />
                    <p className="text-gray-200">Originally founded as MONEROMINEco in February 2021, our goal was to not only provide a mining pool to aid in hashrate decentralization, but a hub for the community to learn and discuss Monero. Since then we've targeted XMR adoption, built up our community, and decided to rebrand to Monerod along the way. We are "staffed" with an excellent team, and our community's growth and passion has been astounding (shoutout to all of our amazing Community Liasons)!</p><br />
                    <p className="text-gray-200">Please feel free to join our Discord/Matrix community to discuss cryptocurrency at large, view announcements, and participate in events/giveaways.</p>
                </div>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
        )
}
export default Monerod