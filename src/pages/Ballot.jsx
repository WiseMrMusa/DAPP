import { useContractRead, useContractReads } from 'wagmi'
import inecABI from '../utils/abi/inec.json'
import ballotABI from '../utils/abi/ballot.json'


const Ballot = () => {
    const { data: ballotAddress, isError, isLoading } = useContractRead({
        address: '0x7d1deeb98D7c3CA7279198DC42485fCA22ecBa70',
        abi: inecABI,
        functionName: 'listOfBallots',
    })

    const group = ballotAddress.map((e) => {
        return ({
            address: e,
            abi: ballotABI,
            functionName: "name"
        })
    })


    const { data: ballotNames } = useContractReads({
        contracts: group
    })

    // const {data: ballotArray } = useContractRead({
    //     address: "0x1cC613630507D05C1adCa1dF5baA28A574268444",
    //     abi: ballotABI,
    //     functionName: "name"
    // })


    // const ballotArray = ballotAddress.map((e, i) => {
    //     const provider = new providers.AlchemyProvider(sepolia, providers,process.env.ALCHEMY_ID)
    //     // const provider = new providers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/vg54NOFfMEUDJBor6xjF7RH7DpcFUOUD');

    //     const contract = new Contract(e.address, ballotABI, provider);

    //     let dataM = contract.name();
    //     return { address: e, name: dataM }


    // }); 
    return (
        <main className="mt-8">
            <h1
                className=" text-2xl font-semibold mb-10"
            >
                Ballots
                {/* {ballotNames} */}
            </h1>
            <div className='grid grid-cols-3 gap-4'>
                {ballotNames.map((e, i) => {
                    return (
                        <div
                            key={i}
                            className='relative rounded-2xl px-4 pt-16 pb-4'
                        >
                            <span className='mt-4 text-sm font-semibold leading-7 text-zinc-900 '>{e}
                            </span>
                            <p className=' text-base w-46 break-words'>
                                {ballotAddress[i]}
                            </p>
                        </div>
                    )
                })}
            </div>


        </main>
    )
}

export default Ballot