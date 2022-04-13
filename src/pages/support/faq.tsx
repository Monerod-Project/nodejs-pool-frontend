import {Helmet} from "react-helmet";
import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";

// Feel free to submit PRs to add FAQs
const faqs = [
    {
        question: "Why does it say my wallet address is invalid?",
        answer: "Do you have a typo? Ensure you are entering your address correctly."
    },
    {
        question: "How does the bonus hashrate work?",
        answer: "Every mining address on the pool that is actively mining is included in the rotation. The rotation is every 30 minutes, so it will eventually get to you! You can contribute to the bonus hashrate by running XMRig-md."
    },
    {
        question: "How can I set a starting difficulty?",
        answer: "No need! The pool will auto-adjust your worker's difficulty for you."
    },
    {
        question: "How do I set my auto-payout threshold and notifications?",
        answer: "You can find both of these options on the Settings page of the Pool dropdown menu."
    },
    {
        question: "Is there a payout fee?",
        answer: "There is no payout fee, no fees at all in fact!"
    },
    {
        question: "Why can't my miner can't connect to the pool?",
        answer: "Give both ports 4444 and 5555 a try, ensuring to set tls to true for port 5555 and tls to false for 5555."
    },
    {
        question: "My netowrk/firewall does not allow port 4444 and 5555.",
        answer: "These are the only ports we support at the moment. We may support 80 and 443 in the future, sorry!"
    },
    {
        question: "When do payments/withdrawals happen, as I've met my threshhold?",
        answer: "Payments run every 2 hours."
    },
    {
        question: "Why is my worker's name x?",
        answer: "You'll need to update the pass field to something in your XMRig config.json file."
    }
]

export default function FAQ() {
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="bg-dracula-background h-screen flex flex-col items-center">
                <Helmet>
                    <title>FAQ | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Frequently Asked Questions." />
                </Helmet>
                <h1 className="text-3xl text-gray-200 my-6 font-black">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => {
                    return (
                        <div tabIndex={0} key={index}
                             className="collapse w-3/5 collapse-plus bg-dracula-purple text-gray-200 static my-0.5">
                            <div className="collapse-title md:text-xl sm:text-md font-medium">
                                <p>{faq.question}</p>
                            </div>
                            <div className="collapse-content">
                                <p className="text-white flex-wrap">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
    );
}
