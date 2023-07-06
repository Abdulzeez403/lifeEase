import React from 'react'
import { Navbar } from './components/navbar'
import { HeroPage } from './components/hero'

export const HomePage = () => {

    return (
        <div className='bg-[#056DFF]  p-6 pb-0'>
            <Navbar />
            <HeroPage />
        </div>


    )
}
