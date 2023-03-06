import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Injector from '../Molecules/Injector'
// import { useState, Fragment } from 'react'
// import { Dialog, Transition } from '@headlessui/react'


const ConnectButtonLocal = () => {

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
        
    })

    // { isConnected && <Injector /> }
    if (!isConnected) return (

    <div >
        <Injector />
        </div>
    )
    // if (isConnected) return <MyDialog />
    return <button className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 h-fit" onClick={() => connect()}>Connect Wallet</button>

 

}

export default ConnectButtonLocal