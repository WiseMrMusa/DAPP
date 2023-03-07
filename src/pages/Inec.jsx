import { useEffect, useState } from "react";
import { useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";

import Vote_Factory_Abi from "../utils/voting_factory.json";
import BGStyle from "../components/Pattern/BGStyle";
// import Ballot_Abi from "../utils/ballot.json";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

const contractAddress = "0x7d1deeb98D7c3CA7279198DC42485fCA22ecBa70";

const Inec = () => {
    const [name, setName] = useState("");
    const [period, setPeriod] = useState(null);
    const [tokenPerVote, setTokenPerVote] = useState(null);
    const [contenders1, setContenders1] = useState("");
    const [contenders2, setContenders2] = useState("");
    const [contenders3, setContenders3] = useState("");
    // const [allContenders, setAllContenders] = useState([]);

    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: Vote_Factory_Abi,
        functionName: "createBallot",
        args: [
            name,
            [contenders1, contenders2, contenders3],
            period,
            tokenPerVote,
        ],
    });

    const { data: voteFactoryData, isLoading: voteFactoryIsLoading, write: createBallot } = useContractWrite(config)




    // const { data: ballotName, isLoading: ballotIsLoading, isError: ballotIsError } = useContractRead({
    //     address: "0x789b976e837d7c0fae59d4e7cbdc86a56364cb68",
    //     abi: Ballot_Abi,
    //     functionName: 'name'
    // })




    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {
            console.log({ name, period, tokenPerVote, contenders1, contenders2, contenders3 })

            createBallot?.()
        }, 1000)
    }


    // 0x789b976e837d7c0fae59d4e7cbdc86a56364cb68

    useEffect(() => {
        if (voteFactoryData) {
            console.log(voteFactoryData);
        }
    }, [voteFactoryData])


    // useEffect(() => {
    //     if (ballotName) {
    //         console.log(ballotName);
    //     }
    // }, [ballotName])

    return (
        <main className="flex flex-col items-center mt-4 m-auto">
            <BGStyle />
            <form onSubmit={handleSubmit} className="relative flex flex-col mt-4 px-8 py-8 w-1/2 m-auto bg-zinc-50 shadow-2xl shadow-zinc-200 rounded-lg ring-1 ring-zinc-200">
                <div className="">
                    <div class="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50"><svg aria-hidden="true" class="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1"><defs><pattern id=":R56hd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="16"><path d="M.5 56V.5H72" fill="none"></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#:R56hd6:)"></rect><svg x="50%" y="16" class="overflow-visible"><rect stroke-width="0" width="73" height="57" x="0" y="56"></rect><rect stroke-width="0" width="73" height="57" x="72" y="168"></rect></svg></svg></div>
                </div>

                <h1 className="text-2xl text-center font-bold mb-8"> Create Ballot Box</h1>

                <div className="mb-8">
                    <div className="flex flex-col gap-4">

                        <div className="flex flex-col gap-2">
                            <label
                                className="text-sm">Ballot Name</label>
                            <input
                                type="text"
                                placeholder="Name of Vote Campaign"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                            />
                        </div>



                        <div className="flex flex-col gap-2">
                            <label
                                className=" text-sm">Contender 1</label>
                            <input
                                type="text"
                                placeholder="Name of Vote Campaign"
                                onChange={(e) => setContenders1(e.target.value)}
                                className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className=" text-sm">Contender 2</label>
                            <input
                                type="text"
                                placeholder="Name of Vote Campaign"
                                onChange={(e) => setContenders2(e.target.value)}
                                className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className=" text-sm">Contender 3</label>
                            <input
                                type="text"
                                placeholder="Name of Vote Campaign"
                                onChange={(e) => setContenders3(e.target.value)}
                                className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className=" text-sm">Vote Period</label>
                            <input
                                type="number"
                                placeholder="Set Vote Period in seconds"
                                onChange={(e) => setPeriod(e.target.value)}
                                className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                            />
                        </div>
                        <div className="">
                            <label
                                className=" text-sm">Token Per Vote</label>
                            <input
                                type="number"
                                placeholder="Set token amount used in voting"
                                onChange={(e) => setTokenPerVote(e.target.value)}
                                className="w-full shadow-inner p-2 px-4 ring-1 ring-zinc-200 rounded-md outline-none bg-zinc-50 z-50"
                            />
                        </div>

                    </div>
                </div>

                <button type="submit" className="w-full bg-zinc-800 text-white rounded-md p-2 hover:bg-zinc-900">Create Ballot</button>
            </form>
        </main>
    );
}

export default Inec;
