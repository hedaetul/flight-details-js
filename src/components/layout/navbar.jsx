import logo from "@/dist/images/logo.png"
import Image from "next/image"
import { RiArrowDropDownLine } from "react-icons/ri"

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between">
                <Image width={20} height={20} src={logo} alt="logo" />
                <div className="flex items-center justify-center gap-4">
                    <h3 className="cursor-pointer text-sm font-medium text-gray-700">
                        BDT{" "}
                        <RiArrowDropDownLine className="inline text-2xl text-gray-700" />
                    </h3>
                    <button className="h-fit w-28 cursor-pointer rounded-md bg-violet-950 py-2 font-semibold text-white">
                        Sign In
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
