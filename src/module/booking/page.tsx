import React from 'react'
import { BookingHeader } from './components/head'
import RoomsImage from './components/rooms'
import { AgentPage } from './components/agent'
import { FooterComponent } from '../home/components/footer'
import HostelsComponents from './components/hostels'
import { Container } from '@/components/container/container'
import { MyMapComponent } from './components/maps'



export const BookingPage = () => {
    return (
        <Container>
            <BookingHeader />
            <RoomsImage />
            <AgentPage />
            <MyMapComponent />
            <HostelsComponents />
            <div className="bg-black mt-20">
                <FooterComponent />
            </div>
        </Container>
    )
}
