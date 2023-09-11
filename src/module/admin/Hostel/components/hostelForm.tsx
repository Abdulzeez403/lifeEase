import ApButton from '@/components/button'
import { ApTextInput } from '@/components/input/TextInput'
import { Switch } from 'antd'
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'

export const FormComponents = () => {

    const handleSignIn = () => {
        console.log("Yeap!")
    }
    return (
        <div className=' '>

            <div className=''>

                <Formik
                    //   validationSchema={FormSchema}
                    initialValues={{ hostelName: "", description: "", roomNumber: "" }}
                    onSubmit={handleSignIn}
                >
                    {(props: FormikProps<any>) => (
                        <Form className='flex justify-between items-center '>

                            <div className="w-[64%] bg-white px-6 my-2 py-2">
                                <h4 className="font-bold pb-1">Hostel Detail</h4>

                                <div className="">
                                    <ApTextInput
                                        label="Hostel Name"
                                        type="text"
                                        placeHolder="Add Hostel Name"
                                        name="hostelName"
                                        className="border-[2px] 
                                 placeholder:text-[.8rem] placeholder:text-[#6F6E6E] pl-4 rounded-md  bg-white"
                                    />
                                </div>

                                <div className="pt-2">
                                    <ApTextInput
                                        label="Hostel Description"
                                        type="textarea"
                                        placeHolder="Write a description..."
                                        name="description"
                                        className=" border-[2px] border-[#6F6E6E] 
                                 placeholder:text-[.8rem] placeholder:text-[#6F6E6E] pl-4 rounded-md h-[12rem] bg-white"
                                    />
                                </div>
                            </div>

                            <div className="block w-[36%] pl-3 my-3  ">

                                <div className="bg-white px-4  py-2">
                                    <h4 className="font-bold pb-1">Pricing</h4>
                                    <p className="text-sm pb-[.5rem]">Selling Price</p>
                                    <div className='flex gap-x-6  border-2  pt-[.5rem] px-2 rounded-md border-slate-200 '>
                                        <div>
                                            <h4 className=" text-[1.2rem] text-slate-400">N</h4>
                                        </div>

                                        <div>

                                            <ApTextInput
                                                name="price"
                                                className="bg-white h-[.5rem] placeholder:text-[1.2rem] text-black focus:bg-nonw"
                                                placeHolder='0.00'

                                            />
                                        </div>


                                    </div>


                                </div>

                                <div className="mt-10 bg-white px-4 py-2  ">
                                    <h4 className="font-bold pb-3">Avaliability</h4>
                                    <div className="flex justify-between items-center py-4">
                                        <h4>Hostel Avaliable</h4>
                                        <Switch />
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4>Numbers of room</h4>
                                        </div>
                                        <div className=" ">
                                            <ApTextInput
                                                name="roomNumber"
                                                className="bg-white border-2 border-blue-200 placeholder:text-center w-[2.9rem] h-[1rem] "
                                                placeHolder='12'

                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className=' mt-5 w-20 auto'>
                                    <ApButton title="Save Change" color="primary" btnSize="md" rounded="rounded-md" />

                                </div>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>

            <div>

            </div>

        </div>

    )
}
