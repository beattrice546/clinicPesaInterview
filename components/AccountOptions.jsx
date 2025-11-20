import Card from "./Card";
import { ImEyeBlocked } from "react-icons/im";
import { HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";
import { FaHandHoldingUsd } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { SiTicktick } from "react-icons/si";

function AccountOptions(){
    return (
        <>
       

        <div className="grid grid-cols-2">
                                    <Card
                                        icon={HiOutlineDocumentCurrencyDollar}
                                        text="Pay Medical Bill"
                                        iconColor="text-green-500"
                                        iconSize="w-12 h-12"
                                    />
        
                                    <Card
                                        icon={FaHandHoldingUsd}
                                        text="Get Loan"
                                        iconColor="text-green-500"
                                        iconSize="w-8 h-8"
                                    />

                                    <Card className="mt-3 mb-3"
                                        icon={GoPeople}
                                        text="Join Mamas"
                                        iconColor="text-cyan-500"
                                        iconSize="w-8 h-8"
                                    />

                                    <Card className="mt-3 mb-3"
                                        icon={SiTicktick}
                                        text="My Approvals"
                                        iconColor="text-green-500"
                                        iconSize="w-8 h-8"
                                    />
        
                                </div>
        </>
    )
}
export default AccountOptions