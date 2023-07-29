import React from 'react'
import { BookingHeader } from './components/head'
import RoomsImage from './components/rooms'
import { AgentPage } from './components/agent'
import { FooterComponent } from '../home/components/footer'
import HostelsComponents from './components/hostels'


export const BookingPage = () => {
    return (
        <div>
            <BookingHeader />
            <RoomsImage />
            <AgentPage />
            <HostelsComponents />
            <div className="bg-black mt-20">
                <FooterComponent />
            </div>
        </div>
    )
}
