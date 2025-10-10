import React, {useState} from 'react'
import IntervalLogo from '@/assets/img/logo.svg'


const Nav: React.FC = () => {
    const [navItems, ] = useState(["About", "Intervals⏱️"]);
    return (
        <>
            <div className="fixed mt-4 ml-4">
                <div className="w-[145px] flex flex-col items-center justify-center h-full p-5 border border-solid border-gray-200">
                    <img src={IntervalLogo} className="w-10" alt="Stadium"/>
                    <ul className="nav-items text-center mt-2">
                        {
                            navItems.map((item, i) => (
                                <li key={i}><a className="hover:underline" href="#">{item}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;