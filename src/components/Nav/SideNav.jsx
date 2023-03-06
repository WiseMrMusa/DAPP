import { Link } from "react-router-dom"

/* eslint-disable jsx-a11y/no-redundant-roles */
const SideNav = () => {
    return (
        <nav className=' mt-10 block'>
            <ul role="list">
                <li className=' mt-6 relative'></li>
                <h2 className=' text-xs font-semibold text-zinc-900'> Guides </h2>
                <div className=' relative mt-3 pl-2'>
                    <div
                        className="absolute inset-x-0 top-0 h-16 rounded-md bg-zinc-800/5 will-change-transform z-50"
                        data-projection-id="26"
                    // style="height: 32px; top: 0px; border-radius: 2.95203% / 25%; opacity: 1; transform: none; transform-origin: 50% 50% 0px;"
                    ></div>

                    {/* LINE */}
                    <div
                        className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 "
                    // style="transform: none; transform-origin: 50% 50% 0px;"
                    ></div>

                    {/* POINTER */}
                    <div
                        className="absolute left-2 h-6 w-px bg-emerald-500"
                        data-projection-id="27"
                    // style="top: 4px; opacity: 1; transform: none; transform-origin: 50% 50% 0px;"
                    ></div>


                    <ul role="list" className="border-l border-transparent">
                        <li className="relative">
                            <a className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900" href="/" aria-current="page">
                                <span className="truncate">Introduction</span>
                            </a>

                            <ul role="list" data-projection-id="66"
                            // style="opacity: 1;"
                            >
                                <li>
                                    <a
                                        className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 " href="/#guides"
                                    ><span class="truncate">Guides</span></a>
                                </li>
                                <li>
                                    <a
                                        className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 "
                                        href="/#resources"
                                    ><span class="truncate">Resources</span></a>
                                </li>
                            </ul>
                        </li>

                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/quickstart"
                            ><span class="truncate">Quickstart</span></a>
                        </li>

                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/sdks"
                            ><span className="truncate">SDKs</span></a>
                        </li>

                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/authentication"
                            ><span className="truncate">Authentication</span></a>
                        </li>


                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/pagination"
                            ><span className="truncate">Pagination</span></a>
                        </li>


                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/errors"
                            ><span className="truncate">Errors</span></a>
                        </li>

                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/webhooks"
                            ><span class="truncate">Webhooks</span></a>
                        </li></ul>
                </div>


                <li className=' mt-6 relative'></li>
                <h2 className=' text-xs font-semibold text-zinc-900'> Guides </h2>
                <div className=' relative mt-3 pl-2'>
                    <div
                        className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform"
                        data-projection-id="26"
                    // style="height: 32px; top: 0px; border-radius: 2.95203% / 25%; opacity: 1; transform: none; transform-origin: 50% 50% 0px;"
                    ></div>
                    <div
                        className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 "
                    // style="transform: none; transform-origin: 50% 50% 0px;"
                    ></div>
                    <div
                        className="absolute left-2 h-6 w-px bg-emerald-500"
                        data-projection-id="27"
                    // style="top: 4px; opacity: 1; transform: none; transform-origin: 50% 50% 0px;"
                    ></div>


                    <ul role="list" className="border-l border-transparent">
                        <li className="relative">
                            <a className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900" href="/" aria-current="page">
                                <span className="truncate">Introduction</span>
                            </a>

                            <ul role="list" data-projection-id="66"
                            // style="opacity: 1;"
                            >
                                <li>
                                    <a
                                        className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 " href="/#guides"
                                    ><span class="truncate">Guides</span></a>
                                </li>
                                <li>
                                    <a
                                        className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-7 text-zinc-600 hover:text-zinc-900 "
                                        href="/#resources"
                                    ><span class="truncate">Resources</span></a>
                                </li>
                            </ul>
                        </li>

                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/quickstart"
                            ><span class="truncate">Quickstart</span></a>
                        </li>

                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/sdks"
                            ><span className="truncate">SDKs</span></a>
                        </li>

                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/authentication"
                            ><span className="truncate">Authentication</span></a>
                        </li>


                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/pagination"
                            ><span className="truncate">Pagination</span></a>
                        </li>


                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a
                                className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/errors"
                            ><span className="truncate">Errors</span></a>
                        </li>

                        <li
                            className="relative"
                        // style="transform: none; transform-origin: 50% 50% 0px;"
                        >
                            <a className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-600 hover:text-zinc-900 "
                                href="/webhooks"
                            ><span className="truncate">Webhooks</span></a>
                        </li></ul>
                </div>
            </ul>
        </nav>
    )

}

const SideNacReu = () => {
    return (
        <nav className=' mt-10 block'>
            <ul role="list">
                <li className=' mt-6 relative'></li>
                <h2 className=' text-xs font-semibold text-zinc-900'> Resources </h2>
                <div className=' relative mt-3 pl-2'>
                    {/* <div
                        className="absolute inset-x-0 top-0 h-16 rounded-md bg-zinc-800/5 will-change-transform z-50"
                        data-projection-id="26"
                    // style="height: 32px; top: 0px; border-radius: 2.95203% / 25%; opacity: 1; transform: none; transform-origin: 50% 50% 0px;"
                    ></div> */}

                    {/* LINE */}
                    <div
                        className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 "
                    // style="transform: none; transform-origin: 50% 50% 0px;"
                    ></div>

                    {/* POINTER */}
                    <div
                        className="absolute left-2 h-6 w-px bg-emerald-500"
                        data-projection-id="27"
                    // style="top: 4px; opacity: 1; transform: none; transform-origin: 50% 50% 0px;"
                    ></div>


                    <ul role="list" className="border-l border-transparent">
                        <li className="relative">
                            <Link className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900" to="/pvc" aria-current="page">
                                <span className="truncate">PVC</span>
                            </Link>
                        </li>
                        <li className="relative">
                            <Link className="flex justify-between gap-2 py-1 pr-3 text-sm transition pl-4 text-zinc-900" to="/inec" aria-current="page">
                                <span className="truncate">INEC</span>
                            </Link>
                        </li>
                    </ul>


                </div>
            </ul>
        </nav>
    )
}

export { SideNav, SideNacReu }