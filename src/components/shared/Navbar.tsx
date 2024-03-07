import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hamburger from "../Hamburger";


const Navbar = () => {
    const navLinks = ['Crypto Taxes', 'Free Tools', 'Resource Center'];
  return (
    <nav className='py-4 bg-white md:px-20 px-4 fixed top-0 w-full z-10'>
        <div className='flex items-center justify-between'>
            <div>
                <Image src="/assets/images/KoinX.png" alt="brand" height={50} width={100}/>
            </div>
            <div className="laptop:flex hidden items-center space-x-4">
                <ul className='flex'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='mx-5 font-semibold cursor-pointer transition-all ease-linear hover:scale-[1.05]'>{link}</li>
                    ))}
                </ul>
                <Button className="bg-gradient-to-r from-blue-500 to-blue-700">Get Started</Button>
            </div>
            <div className="laptop:hidden block">
                <Hamburger/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar