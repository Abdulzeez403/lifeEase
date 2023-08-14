import React from 'react'
import AdminHeader from './components/head'
import AdminNav from './components/nav'
import { Container } from '@/components/container/container';

interface IProps {
    children: React.ReactNode;
}
const Adminlayout: React.FC<IProps> = ({ children }) => {
    return (
        <div className="bg-white px-[10rem] ">
            <AdminHeader />

            <div className='flex '>
                <div className="w-[35%]">
                    <AdminNav />
                </div>
                <div className='bg-[#F7F7F7] w-screen'>
                    {children}

                </div>

            </div>


        </div>

    )
}

export default Adminlayout
