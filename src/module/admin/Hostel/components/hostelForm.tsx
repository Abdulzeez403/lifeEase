import { ApTextInput } from '@/components/input/TextInput'
import { Form, Formik, FormikProps } from 'formik'
import React from 'react'

export const FormComponents = () => {

    const handleSignIn = () => {
        console.log("Yeap!")
    }
    return (
        <div className='bg-white pl-[1.3rem]'>

            <div className=''>
                <h3 className='font-semibold text-[1.5rem]'>Hostel Detail</h3>

                <Formik
                    //   validationSchema={FormSchema}
                    initialValues={{ hostelName: "", description: "" }}
                    onSubmit={handleSignIn}
                >
                    {(props: FormikProps<any>) => (
                        <Form className='flex gap-x-10'>
                            <div className="w-[50%]">
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

                            <div>
                                <h4 className="font-bold pb-3">Pricing</h4>
                                <p>Selling Price</p>
                                <div className='flex gap-x-6  border-2 py-[.4rem] pt-[.5rem] px-2 rounded-md border-slate-200 '>
                                    <div>
                                        <h4 className=" text-[1.2rem] text-slate-400">N</h4>
                                    </div>

                                    <div>

                                        <ApTextInput
                                            name="price"
                                            className="bg-white h-[1.2rem] placeholder:text-[1.2rem] text-black "
                                            placeHolder='0.00'

                                        />
                                    </div>


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
