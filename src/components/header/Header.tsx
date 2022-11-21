import React from 'react'
import {Link} from "react-router-dom"
import {LMarvel} from "../../assets"

type Props = {
    menus: Array<{name:string, url:string}>
    activeMenu: string
}

const Header:React.FC<Props> = ({menus, activeMenu}) => {
    return (
        <div className='grid grid-cols-2 bg-main-black p-2'>
            <div>
                <img 
                    src={LMarvel} 
                    alt="Marvel Logo" 
                    className='w-28'
                />
            </div>
            <div>
                <div className='hidden md:block'>
                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 float-right">
                        {menus.map((menu:{name:string, url:string}, key) => (
                            <li key={key}>
                                <Link 
                                    to={`/${menu.url}`}
                                    className={`${activeMenu === menu.url ? "text-red-600" : "text-white"} hover:text-red-600 hover:italic font-bold`}
                                >
                                    {menu.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header