import {Listbox, Transition, Switch} from "@headlessui/react";
import {Fragment, useState, useEffect} from "react";
import * as React from "react";
import Navigation from "../../modules/navigation/navigation";
import Footer from "../../modules/navigation/footer";
import {Helmet} from "react-helmet";
import useSWR from "swr";
import axios from "axios";
import Cookies from "js-cookie";
import {apiUrl, minPay} from "../../modules/utils";
import {FaMoneyBill, FaBatteryFull, FaBell} from "react-icons/fa";

export default function Settings() {
    const [pError, setError] = useState("")
    const [pSuccess, setSuccess] = useState("")

    const currencies = [
        {value: "ARS", name: "Argentine Peso"},
        {value: "AUD", name: "Australian Dollar"},
        {value: "BDT", name: "Bangladeshi Taka"},
        {value: "BTC", name: "Bitcoin"},
        {value: "BRL", name: "Brazilian Real"},
        {value: "GBP", name: "British Pound Sterling"},
        {value: "BGN", name: "Bulgarian Lev"},
        {value: "CAD", name: "Canadian Dollar"},
        {value: "CZK", name: "Czech Republic Koruna"},
        {value: "CNY", name: "Chinese Yuan"},
        {value: "ETH", name: "Ethereum"},
        {value: "EUR", name: "Euro"},
        {value: "INR", name: "Indian Rupee"},
        {value: "IDR", name: "Indonesian Rupiah"},
        {value: "IRR", name: "Iranian Rial"},
        {value: "JPY", name: "Japanese Yen"},
        {value: "KES", name: "Kenyan Shilling"},
        {value: "MNT", name: "Mongolian Tugrik"},
        {value: "MYR", name: "Malaysian Ringgit"},
        {value: "MXN", name: "Mexican Peso"},
        {value: "NGN", name: "Nigerian Naira"},
        {value: "NOK", name: "Norwegian Krone"},
        {value: "PHP", name: "Philippine Peso"},
        {value: "PLN", name: "Polish Zloty"},
        {value: "RON", name: "Romanian Leu"},
        {value: "RUB", name: "Russian Ruble"},
        {value: "SGD", name: "Singapore Dollar"},
        {value: "ZAR", name: "South African Rand"},
        {value: "KRW", name: "South Korean Won"},
        {value: "SEK", name: "Swedish Krona"},
        {value: "TWD", name: "Taiwan Dollar"},
        {value: "TRY", name: "Turkish Lira"},
        {value: "THB", name: "Thai Baht"},
        {value: "USD", name: "United States Dollar"},
        {value: "VND", name: "Vietnamese Dong"},
    ]
    const [currency, setCurrency] = useState(currencies[currencies.length - 2])
    function saveCurrency() {
        localStorage.setItem("currency", currency.value)
        setSuccess("Currency Updated!")
        return
    }

    const fetcher = (url: string) => axios.get(url).then(res => res.data)
    const api = {
        //User Info
        userInfo: useSWR(apiUrl + "user/" + Cookies.get("wallet"), fetcher, {refreshInterval: 1000 * 60}),
    }
    var paymentThreshold = api.userInfo.data?.payout_threshold;
    paymentThreshold /= Math.pow(10, 12);

    const [amount, setAmount] = useState('')
    function saveAmount() {
        axios.post(apiUrl + 'user/updateThreshold', {'username': Cookies.get("wallet"), 'threshold': amount}).then(response => {console.log(response); setSuccess("Payment Threshold Updated!")}).catch(error => {
            if (error.response) {
                setError("Ensure you set an acceptable amount.")
                return
            }
		});
    }

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [enabled, setEnabled] = useState(Boolean(api.userInfo.data?.email_enabled))
    const onEnable = () => setEnabled(!enabled)
    function saveEmail() {
        axios.post(apiUrl + 'user/subscribeEmail', {'username': Cookies.get("wallet"), 'enabled': + enabled, 'from': from, 'to': to}).then(response => {console.log(response); setSuccess("Alert Preferences Updated!")}).catch(error => {
            if (error.response) {
                setError("Ensure your old email is correct.")
                return
            }
		});
    }
    
    return (
        <>
            <div className="sticky z-50">
                <Navigation/>
            </div>
            <div className="flex min-h-screen bg-gray-900">
                <Helmet>
                    <title>Pool Settings | Monerod XMR Mining Pool</title>
                    <meta name="description" content="Adjust your pool settings."/>
                </Helmet>
                <div className="container-lg mx-auto">
                    <div className="max-w-3xl rounded-lg py-2 px-8">
                        <div>
                        <h1 className="text-3xl text-gray-200 my-6 font-black text-center">Pool Settings</h1>
                        </div>
                        <br />
                        <div className="w-72">
                        <span title="Select the currency you would like to see the XMR price and your balance in." className="flex text-md font-semibold my-2 ml-2 text-gray-100"><FaMoneyBill className="mt-1 mr-2"/> Currency</span>
                            <Listbox value={currency} onChange={setCurrency}>
                                <div className="relative mt-1">
                                    <Listbox.Button
                                        className="relative w-full py-2 pl-3 pr-10 text-left text-white bg-gray-700 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500">
                                        <span className="block truncate">{currency.name}</span>
                                        <span
                                            className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        </span>
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100"
                                        leaveTo="opacity-0">
                                        <Listbox.Options
                                            className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-700 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {currencies.map((cur, i) => (
                                                <Listbox.Option
                                                    key={i}
                                                    className={({active}) =>
                                                        `${active ? 'text-white bg-indigo-600 pl-2' : 'bg-gray-700 text-white pl-2'} cursor-default select-none relative py-2 text-left pr-4`}
                                                    value={cur}>
                                                    {({selected, active}) => (
                                                        <>
                                                            <span
                                                                className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>{cur.name}</span>
                                                        </>
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6 mb-5">
                            <button
                                onClick={() => {saveCurrency()}}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>

                        <div className="w-72">
                        <span title="Set the amount of XMR you would like to accumulate (pending) before the pool pays you." className="flex text-md font-semibold my-2 ml-2 text-gray-100"><FaBatteryFull className="mt-1 mr-2"/> Auto-Payment Threshold</span>
                            <form>
                                <input onChange={event => setAmount(event.target.value)} type="text" name="Amount" placeholder={"Current: " + paymentThreshold.toFixed(3) + " XMR (minimum: " + minPay + ")"} className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-indigo-300 bg-gray-700 text-white placeholder-gray-500 border-gray-600 focus:ring-gray-900 focus:border-gray-500"/>
                            </form>
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6 mb-5">
                            <button
                                onClick={() => {saveAmount()}}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>

                        <div className="w-72">
                        <span title="Receive email alerts when your workers start and stop submitting shares to the pool, as well as when you are Bonus Hashing." className="flex text-md font-semibold my-2 ml-2 text-gray-100"><FaBell className="mt-1 mr-2"/> Email Alerts</span>
                            <form>
                                <input onChange={event => setFrom(event.target.value)} type="text" name="From" placeholder="FROM (only for changing email)" className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-indigo-300 bg-gray-700 text-white placeholder-gray-500 border-gray-600 focus:ring-gray-900 focus:border-gray-500 mb-1"/>
                            </form>
                            <form>
                                <input onChange={event => setTo(event.target.value)} type="text" name="To" placeholder="TO (or initial email setup)" className="w-full px-3 py-2 placeholder-gray-300 border rounded-md focus:outline-none focus:ring focus:border-indigo-300 bg-gray-700 text-white placeholder-gray-500 border-gray-600 focus:ring-gray-900 focus:border-gray-500"/>
                            </form>
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6 mb-5">
                            <Switch.Group>
                                    <Switch.Label className="mr-4 text-xs text-gray-100">Turn Off/On Alerts</Switch.Label>
                                    <Switch
                                    checked={enabled}
                                    onChange={onEnable}
                                    className={`${
                                        enabled ? 'bg-indigo-600' : 'bg-gray-500'
                                    } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4`}
                                    >
                                    <span
                                        className={`${
                                        enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                                    />
                                    </Switch>
                                </Switch.Group>
                            <button
                                onClick={() => {saveEmail()}}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                        {pError ? <div className="w-full text-white bg-red-600 py-2 mb-2 text-center rounded-lg">{pError}</div> : ""}
                        {pSuccess ? <div className="w-full text-white bg-green-600 py-2 mb-2 text-center rounded-lg">{pSuccess}</div> : ""}
                    </div>
                </div>
            </div>
            <div className="sticky z-50">
                <Footer/>
            </div>
        </>
    )
}
