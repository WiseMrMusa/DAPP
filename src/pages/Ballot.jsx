import { useContractRead, useContractReads } from 'wagmi'
import inecABI from '../utils/abi/inec.json'
import ballotABI from '../utils/abi/ballot.json'
import BGStyle from '../components/Pattern/BGStyle'


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
            <BGStyle />
            <h1
                className=" text-2xl font-semibold mb-10"
            >
                Ballots
                {/* {ballotNames} */}
            </h1>
            <div className=' grid grid-cols-3 gap-4'>
                {ballotNames.map((e, i) => {
                    return (

                        <div className='group cursor-pointer relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 '>
                            <div>
                                <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"><svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"><defs><pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:R56hd6:)"></rect><svg x="50%" y="16" class="overflow-visible"><rect stroke-width="0" width="73" height="57" x="0" y="56"></rect><rect stroke-width="0" width="73" height="57" x="72" y="168"></rect></svg></svg></div>
                            </div>
                            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/5 group-hover:ring-zinc-900/10 "></div>
                            <div
                                key={i}
                                className=" relative rounded-2xl p-4"
                            >
                                <span className='mt-4 text-sm font-semibold leading-7 text-zinc-900 '>{e}
                                </span>
                                <p className='mt-1 text-sm text-zinc-600 w-80 break-words'>
                                    {ballotAddress[i]}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>


        </main>
    )
}

export default Ballot