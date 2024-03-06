import { Button } from "@/components/ui/button";


const Navbar = () => {
    const navLinks = ['Crypto Taxes', 'Free Tools', 'Resource Center'];
  return (
    <nav className='py-4 bg-white md:px-20 px-4 fixed top-0 w-full'>
        <div className='flex items-center justify-between'>
            <div>Brand</div>
            <div className="md:flex hidden items-center space-x-4">
                <ul className='flex'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='mx-5 font-semibold'>{link}</li>
                    ))}
                </ul>
                <Button className="bg-gradient-to-r from-blue-500 to-blue-700">Get Started</Button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar