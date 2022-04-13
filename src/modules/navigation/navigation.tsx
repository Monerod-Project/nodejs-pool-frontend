import {Fragment, useEffect, useState} from 'react';
import * as React from 'react';
import {Popover, Transition} from '@headlessui/react';
import Cookies from 'js-cookie';
import * as copy from 'copy-to-clipboard';
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import {FaTachometerAlt, FaCubes, FaReceipt, FaCog, FaPlug, FaInfoCircle, FaUsers, FaDonate, FaQuestionCircle, FaBook, FaBars, FaChevronDown, FaTimes, FaClipboard, FaSignOutAlt, FaExchangeAlt, FaCashRegister, FaWallet, FaSearch, FaDatabase} from 'react-icons/fa/';
import {SiDiscord, SiMatrix, SiGitlab, SiGithub} from 'react-icons/si/';
import {website} from '../../modules/utils';

{/*const pool = [
    {
        name: 'Dashboard',
        description: 'Your stats. Pool stats. Network stats.',
        href: '/pool/dashboard',
        icon: FaTachometerAlt,
    },
    {
        name: 'Blocks',
        description: 'List of recent pool blocks.',
        href: '/pool/blocks',
        icon: FaCubes,
    },
    {
        name: 'Payments',
        description: "List of recent pool payments.",
        href: '/pool/payments',
        icon: FaReceipt,
    },
    {
        name: 'Settings',
        description: 'Adjust your pool settings.',
        href: '/pool/settings',
        icon: FaCog,
    },
]*/}
const about = [
    {
        name: 'Monerod',
        description: 'About MonerodProject.',
        href: '/about/monerod',
        icon: FaInfoCircle,
    },
    {
        name: 'Git',
        description: 'View our code repositories.',
        href: 'https://github.com/Monerod-Project',
        icon: SiGithub,
    },
    {
        name: 'Donate',
        description: 'Support Us!',
        href: '/about/donate',
        icon: FaDonate,
    }
]
const support = [
    /*{
        name: 'FAQ',
        description: 'Frequently asked questions.',
        href: '/support/faq',
        icon: FaQuestionCircle,
    },*/
    {
        name: 'Discord',
        description: 'Chat with us on Discord.',
        href: 'https://discord.gg/ZypfV3kkb6',
        icon: SiDiscord,
    },
    {
        name: 'Matrix',
        description: 'Chat with us on Matrix.',
        href: 'https://matrix.to/#/!pGfBoPkfnkVTZbEviZ:monero.social?via=monero.social',
        icon: SiMatrix,
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const [wallet, setWallet] = useState("")

    useEffect(() => {
        const wallet = Cookies.get("wallet")
        setWallet(wallet ? wallet : "")
    }, []);
    return (
        <Popover className="relative bg-dracula-background border-b-4 border-neutral">
            {({open}) => (
                <>
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <Link to="/">
                                    <span className="sr-only">Monerod XMR Mining Pool</span>
                                    <StaticImage
                                        className="h-8 w-auto"
                                        src="../../images/icon.png"
                                        alt="Monerod"
                                        height={64}
                                        width={64}
                                    />
                                </Link>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <Popover.Button
                                    className="bg-dracula-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-gray-100">
                                    <span className="sr-only">Open Menu</span>
                                    <FaBars className="h-6 w-6" aria-hidden="true"/>
                                </Popover.Button>
                            </div>

                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                {/*<Popover className="relative">
                                    {({open}) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-200' : 'text-white',
                                                    'group bg-dracula-background rounded-md inline-flex items-center text-base font-medium hover:text-gray-300'
                                                )}
                                            >
                                                <span>Pool</span>
                                                <FaChevronDown
                                                    className={classNames(
                                                        open ? 'text-gray-200' : 'text-white',
                                                        'ml-2 h-3 w-3 group-hover:text-gray-300'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                >
                                                    <div
                                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div
                                                            className="relative grid gap-6 bg-dracula-background px-5 py-6 sm:gap-8 sm:p-8">
                                                            {pool.map((item) => (
                                                                <Link to={item.href} key={item.name}
                                                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-500">
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-white">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-50">{item.description}</p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                    </Popover>*/}

                                {/*<Link to="#"><a className="text-base font-medium text-white hover:text-gray-200">Exchange</a></Link>
                                <Link to="#"><a className="text-base font-medium text-white hover:text-gray-200">Market</a></Link>
                                <Link to="/wallet"><a className="text-base font-medium text-white hover:text-gray-200">Wallet</a></Link>
                                <Link to="/explorer"><a className="text-base font-medium text-white hover:text-gray-200">Explorer</a></Link>*/}
                                {wallet !== "" ?
                                <>
                                <Link to="/pool/dashboard"><a className="text-base font-medium text-white hover:text-gray-200">Dashboard</a></Link>
                                <Link to="/pool/blocks"><a className="text-base font-medium text-white hover:text-gray-200">Blocks</a></Link>
                                <Link to="/pool/payments"><a className="text-base font-medium text-white hover:text-gray-200">Payments</a></Link>
                                <Link to="/pool/settings"><a className="text-base font-medium text-white hover:text-gray-200">Settings</a></Link>
                                </>
                                :
                                <>
                                <Link to="/pool/blocks"><a className="text-base font-medium text-white hover:text-gray-200">Blocks</a></Link>
                                <Link to="/pool/payments"><a className="text-base font-medium text-white hover:text-gray-200">Payments</a></Link>
                                </>
                                }
                                <span className="text-gray-200"><b>|</b></span>
                                <Link to="/node"><a className="text-base font-medium text-white hover:text-gray-200">Node</a></Link>
                                
                                <Popover className="relative">
                                    {({open}) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-200' : 'text-white',
                                                    'group bg-dracula-background rounded-md inline-flex items-center text-base font-medium hover:text-gray-300'
                                                )}
                                            >
                                                <span>About</span>
                                                <FaChevronDown
                                                    className={classNames(
                                                        open ? 'text-gray-200' : 'text-white',
                                                        'ml-2 h-3 w-3 group-hover:text-gray-300'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                >
                                                    <div
                                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div
                                                            className="relative grid gap-6 bg-dracula-background px-5 py-6 sm:gap-8 sm:p-8">
                                                            {about.map((item) => (
                                                                <Link to={item.href} key={item.name}
                                                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-500">
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-white">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-50">{item.description}</p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <Popover className="relative">
                                    {({open}) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-200' : 'text-white',
                                                    'group bg-dracula-background rounded-md inline-flex items-center text-base font-medium hover:text-gray-300'
                                                )}
                                            >
                                                <span>Support</span>
                                                <FaChevronDown
                                                    className={classNames(
                                                        open ? 'text-gray-200' : 'text-white',
                                                        'ml-2 h-3 w-3 group-hover:text-gray-200'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel
                                                    static
                                                    className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
                                                >
                                                    <div
                                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div
                                                            className="relative grid gap-6 bg-dracula-background px-5 py-6 sm:gap-8 sm:p-8">
                                                            {support.map((item) => (
                                                                <Link to={item.href} key={item.name}
                                                                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-500">
                                                                    <item.icon
                                                                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                                        aria-hidden="true"/>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-white">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-50">{item.description}</p>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>

                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                {wallet !== "" ?
                                    <div
                                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600">
                                        <span>Signed In: {wallet.substr(0, 6)}</span> <FaClipboard title="Copy Address To Clipboard" className="h-4 mx-0.5" onClick={() => copy(wallet)}/> <FaSignOutAlt title="Sign Out" className="h-4 mx-0.5" onClick={() => {Cookies.remove('wallet'); document.location.href=website}}/>
                                    </div>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            static
                            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div
                                className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-dracula-background divide-y-2 divide-gray-50 relative">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <StaticImage
                                                className="h-8 w-auto"
                                                src="../../images/icon.png"
                                                height={64}
                                                width={64}
                                                alt="Monerod"
                                            />
                                        </div>
                                        <div className="py-6 px-5 space-y-6">           
                                            {wallet !== "" ?
                                            <div
                                                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600">
                                                <span>Signed In: {wallet.substr(0, 6)}</span> <FaClipboard title="Copy Address To Clipboard" className="h-4 mx-0.5" onClick={() => copy(wallet)}/> <FaSignOutAlt title="Sign Out" className="h-4 mx-0.5" onClick={() => {Cookies.remove('wallet'); document.location.href=website}}/>
                                            </div>
                                            :
                                            <></>
                                            }
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button
                                                className="bg-dracula-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close menu</span>
                                                <FaTimes className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    {/*<div className="mt-6">
                                        <nav className="grid gap-y-8">
                                        <span className="text-white">Pool</span>
                                            {pool.map((item) => (
                                                <Link to={item.href} key={item.name}
                                                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500">
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                                               aria-hidden="true"/>
                                                    <span
                                                        className="ml-3 text-base font-medium text-white">{item.name}</span>
                                                </Link>
                                            ))}
                                        </nav>
                                        </div>*/}
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                        {wallet !== "" ?
                                        <>
                                        <Link to="/pool/dashboard"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500 text-white">Dashboard</a></Link>
                                        <Link to="/pool/blocks"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500 text-white">Blocks</a></Link>
                                        <Link to="/pool/payments"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500 text-white">Payments</a></Link>
                                        <Link to="/pool/settings"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500 text-white">Settings</a></Link>
                                        </>
                                        :
                                        <>
                                        <Link to="/pool/blocks"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500 text-white">Blocks</a></Link>
                                        <Link to="/pool/payments"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500 text-white">Payments</a></Link>
                                        </>
                                        }
                                        {/*<Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500"><FaExchangeAlt className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true"/><span className="ml-3 text-base font-medium text-white">Exchange</span></Link>
                                        <Link to="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500"><FaCashRegister className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true"/><span className="ml-3 text-base font-medium text-white">Market</span></Link>
                                        <Link to="/wallet" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500"><FaWallet className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true"/><span className="ml-3 text-base font-medium text-white">Wallet</span></Link>
                                        <Link to="/explorer" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500"><FaSearch className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true"/><span className="ml-3 text-base font-medium text-white">Explorer</span></Link>*/}
                                        <Link to="/node"><a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-500 text-white">Node</a></Link>
                                        </nav>
                                    </div>
                                </div>

                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        {support.map((item) => (
                                            <Link to={item.href} key={item.name}
                                                  className="text-base font-medium text-white hover:text-gray-200">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>   
                                </div>

                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        {about.map((item) => (
                                            <Link to={item.href} key={item.name}
                                                  className="text-base font-medium text-white hover:text-gray-200">
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>   
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
