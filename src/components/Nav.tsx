import React, {useState} from 'react'
import IntervalLogo from '@/assets/img/logo.svg'
import Icon from "@/components/ui/Icon.tsx";


const Nav: React.FC = () => {
    const [navItems, ] = useState([{ name: "About", icon: ""}, { name: "Intervals", icon: "timer"}]);
    return (
        <>
            <div className="fixed mt-4 ml-4">
                <div className="w-[145px] flex flex-col items-center justify-center h-full p-5 border border-solid border-gray-200">
                    <img src={IntervalLogo} className="w-10" alt="Stadium"/>
                    <ul className="nav-items text-center mt-2">
                        {
                            navItems.map((item, i) => (
                                <li key={i} className="flex items-center justify-center"><a className="hover:underline mr-1" href="#">{item.name}</a> {item.icon && <Icon name={item.icon} /> }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;