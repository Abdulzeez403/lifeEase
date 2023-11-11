import React from 'react';
import { InputNumber } from 'antd';



const AppInputNumber: React.FC = () => {
    const onChange = (value: any) => {
        console.log('changed', value);
    };
    return (
        <InputNumber
            min={1}
            max={10}
            defaultValue={3}
            className='w-[4rem]'
            onChange={onChange} />

    )
}

export default AppInputNumber;