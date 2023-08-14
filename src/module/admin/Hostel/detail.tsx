import React from 'react'
import { UplaodImageComponents } from './components/upload'
import { FormComponents } from './components/hostelForm'

export const NewHosteldetail = () => {
    return (
        <div className=' mx-5 mt-4'>
            <div>
                <h3 className='font-semibold text-[1.5rem]'>Add New Hostel</h3>
                <p>Dashboard/ <span className="font-semibold">Add new hostel</span></p>
            </div>


            <div className='bg-white  mt-4'>
                <div className='py-3 '>

                    <h4 className="pl-6 font-semibold">Upload Hostel Images</h4>
                    <div className="flex justify-center gap-x-4 mt-2">
                        <UplaodImageComponents />
                        <UplaodImageComponents />
                        <UplaodImageComponents />
                    </div>
                </div>
            </div>

            <div>
                <FormComponents />
            </div>


        </div>
    )
}
