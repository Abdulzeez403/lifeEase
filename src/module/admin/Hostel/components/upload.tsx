import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

export const UplaodImageComponents: React.FC = () => (
    <div className=" border-dashed border-2 border-[#056DFF] w-[18rem] h-[17rem] bg-white rounded-md">
        <Dragger {...props}>
            <p className="ant-upload-drag-icon ">
                <InboxOutlined rev="" />
            </p>
            <p className="ant-upload-text font-bold ">Drag and Drop....JPEG</p>
            <p className="ant-upload-hint "> or </p>
            <p className="text-[#056DFF] border-b-2 border-[#056DFF] w-[8rem] mx-auto ">Upload From Device</p>


        </Dragger>
    </div>

);
