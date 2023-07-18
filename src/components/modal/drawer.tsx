import React, { useState } from 'react';
import { Button, Drawer } from 'antd';


interface IProps {
    children: React.ReactNode;
    onDismiss: () => void;
    onOpen?: () => void;
    open: boolean;
}

const ApDrawer: React.FC<IProps> = ({ children, onDismiss, onOpen, open }) => {
    return (
        <Drawer  placement="right" onClose={onDismiss} open={open}>
            {children}
        </Drawer>

    );
};

export default ApDrawer;