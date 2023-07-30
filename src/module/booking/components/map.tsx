import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface IProps {
    position: [number, number];
}

const LeafletMap: React.FC<IProps> = ({ position }) => {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

const MapComponent: React.FC<IProps> = ({ position }) => {
    // const [mounted, setMounted] = useState(false);

    // useEffect(() => {
    //     setMounted(true);
    // }, []);

    // if (!mounted) {
    //     return null; // Return null during server-side rendering
    // }


    if (typeof window === 'undefined') {
        return null; // Return null during server-side rendering
    }

    return (
        <div>
            <LeafletMap position={position} />
        </div>
    );
};

export default MapComponent;
