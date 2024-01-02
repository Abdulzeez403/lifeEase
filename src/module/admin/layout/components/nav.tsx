import React, { useState } from 'react'
import { AiFillAppstore, AiFillSetting } from 'react-icons/ai';
import Link from "next/link"
import { FaThList } from 'react-icons/fa';
import { BiSolidMessageMinus } from 'react-icons/bi';
import { MdLogout, MdNotifications } from 'react-icons/md';
import ApLink from './link';

interface IProps {
    type?: "My Dashboard" | "Manage Listing" | "Messages"
}
const AdminNav: React.FC<IProps> = ({ type }) => {

    const [types, setTypes] = useState(type = "My Dashboard")

    return (
        <nav className='my-[6rem]'>
            <li className={`flex gap-x-4 items-center py-4 px-2
            ${types == "My Dashboard" && "bg-blue-300"}`}
                onClick={() => setTypes("My Dashboard")}>
                <AiFillAppstore size={25} />
                <Link href="/admin/dashboard" className="font-bold" >My Dashboard</Link>

            </li>
            <li className={`flex gap-x-4 items-center py-4 px-2 ${types == "Manage Listing" && "bg-blue-300"}`} onClick={() => setTypes("Manage Listing")}>
                <FaThList size={25} />
                <Link href="/admin/hostel" className="font-bold">Manage Listing</Link>
            </li>

            <li className={`flex gap-x-4 items-center py-4 px-2 ${types == "Messages" && "bg-blue-300"}`} onClick={() => setTypes("Messages")}>
                <BiSolidMessageMinus size={25} />
                <Link href="#" className="font-bold">Messages</Link>
            </li>
            <li className={`flex gap-x-4 items-center py-4 px-2 ${types == "Notifications" && "bg-blue-300"}`} onClick={() => setTypes("Notifications")}>
                <MdNotifications size={25} />
                <Link href="/admin/message" className="font-bold ">Notifications</Link>
            </li>
            <li className={`flex gap-x-4 items-center py-4 px-2 ${types == "Settings" && "bg-blue-300"}`} onClick={() => setTypes("Settings")}>
                <AiFillSetting size={25} />
                <Link href="#" className="font-bold">Settings</Link>
            </li>

            <li className={`flex gap-x-4 items-center py-4 px-2 my-[10rem] ${types == "SignOut" && "bg-blue-300"}`} onClick={() => setTypes("SignOut")}>
                <MdLogout size={25} />
                <Link href="#" className="font-bold">SignOut</Link>
            </li>

        </nav>
    )
}

export default AdminNav;
