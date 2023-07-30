import React from 'react'
import { BookingHeader } from './components/head'
import RoomsImage from './components/rooms'
import { AgentPage } from './components/agent'
import { FooterComponent } from '../home/components/footer'
import HostelsComponents from './components/hostels'
import { Container } from '@/components/container/container'
// import MapComponent from './components/map'


export const BookingPage = () => {
    // const position: [number, number] = [51.505, -0.09];
    return (
        <Container>
            <BookingHeader />
            <RoomsImage />
            <AgentPage />
            {/* <MapComponent position={position} /> */}
            <HostelsComponents />
            <div className="bg-black mt-20">
                <FooterComponent />
            </div>
        </Container>
    )
}
