import { ImEyeBlocked } from "react-icons/im";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { BsSend } from "react-icons/bs";
import { useState } from 'react'
// import Card from "../components/Card";
import AccountOptions from "../components/AccountOptions";
import { IoIosArrowBack } from "react-icons/io";
import { GrClose } from "react-icons/gr";

function Page1() {
    const [tab, setTab] = useState("Account Options")

    return (
        <>
            <div className=" h-full bg-black">

                <div className="bg-gray-200 ml-2 mr-2">

                    <div className="bg-cyan-800 my-2 mx-2 text-white rounded">

                        <div className="flex justify-between">
                            <IoIosArrowBack className="mt-7 text-left ml-2" />
                            <div className="text-center text-2xl p-5">clinicPessa</div>
                            <GrClose className="mt-7 mr-2" />
                        </div>
                        <div className="h-5"></div>
                        <p className="text-center text-sm">Good morning, Robert</p>
                    </div>

                    <div className="bg-white">
                        <div className="rounded-md shadow-xl bg-white mx-5 text-cyan-700 mb-2">
                            <p className="right-px bg-cyan-200 w-fit rounded">Savings</p>
                            <div className="">
                                <p className="text-center font-bold">Balance</p>
                                <div className=" justify-center flex text-4xl">
                                    <p className="text-center">UGX 50,000</p> <ImEyeBlocked className="mt-1 mx-4" />
                                </div>

                                <div className="grid grid-cols-2 text-center">
                                    <div className="border-b border-gray-300 ml-6">Frequency: Monthly</div>
                                    <div className="border-b border-gray-300 mr-6">Autosave Amount: UGX 1,000</div>

                                    <div className="flex flex-col items-center gap-1 border-r mt-2 border-yellow-300 "> <LiaBoxOpenSolid className="w-4 h-4" /> <div>Deposit</div> </div>
                                    <div className="flex flex-col items-center gap-1"> <BsSend className="mt-2" /> Share Medical</div>
                                </div>
                            </div>


                        </div>


                        <div className="ml-3 mr-3 bg-white" >

                            <div className="grid grid-cols-3 text-center uppercase" >
                                <button className={`p-4 rounded ${tab === "Account Options" ? 'text-cyan-700 border-b-4 border-yellow-500 mr-7 ml-7' : 'border-none'}`} onClick={() => setTab((tab) => "Account Options")} >Account Options</button>
                                <button className={`p-4 rounded ${tab === "Invest" ? 'text-cyan-700 border-b-4 border-yellow-500 mr-7 ml-7' : 'border-none'}`} onClick={() => setTab((tab) => "Invest")}>Invest</button>
                                <button className={`p-4 rounded ${tab === "Transactions" ? 'text-cyan-700 border-b-4 border-yellow-500 mr-7 ml-7' : 'border-none'}`} onClick={() => setTab((tab) => "Transactions")}>Transactions</button>

                            </div>


                        </div>
                    </div>

                    <div className="mt-3">
                        {tab === "Account Options" && <AccountOptions />}
                    </div>

                    <div className="text-center text-gray-500 mt-20 pb-3">
                        clinicPessa T&Cs apply.
                    </div>

                </div>




            </div>
        </>
    )
}

export default Page1