import React from 'react'

interface IProps {
    children: React.ReactNode;
}

export const Container: React.FC<IProps> = ({ children }) => {
    return (
        <div className="w-[100%] overflow-hidden sm:w-[100%] 
    md:w-[80%] md:mx-auto md:justify-center 
    lg:w-[80%] lg:mx-auto lg:justify-center">

            {children}

        </div>
    )
}
