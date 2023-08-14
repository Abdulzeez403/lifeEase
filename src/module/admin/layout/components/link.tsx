import Link from 'next/link';
import React, { useState } from 'react'

interface IProps {
    Icon: any,
    title: string,
    handleChange: () => void;
    uri: any,
    type?: "My Dashboard" | "Manage Listing" | "Messages"
    // handleSwitch: (values: any) => void;
}

const ApLink: React.FC<IProps> = ({ Icon, title, handleChange, uri, type }) => {
    const [types, setTypes] = useState(type)

    const handleSwitch = (value: any) => {
        setTypes(value)
    }

    return (
        <li className={`flex gap-x-4 items-center py-4
            ${types == title && "bg-blue-300"}`}
            onClick={() => handleSwitch(title)}
        >
            <div>{Icon}</div>
            <Link href={uri} className="font-bold" >{title}</Link>

        </li>
    )
}

export default ApLink
