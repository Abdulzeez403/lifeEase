import { ApImage } from '@/components/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../../public/image/Logo.png'
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { BsTelephone, BsTwitter } from 'react-icons/bs'
import { ApTextInput } from '@/components/input/TextInput'
import ApButton from '@/components/button'
import { Formik, FormikProps } from 'formik'

export const ContactPage = () => {

    const handleSignin = () => {
        console.log("Yeap")
    }
    return (

        <div className='my-10'>
            <div className='w-[100px] mx-auto '>
                <Link href="/">
                    <ApImage
                        src={Logo}
                        width={30}
                        height={30}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </Link>
            </div>


            <div className="flex gap-x-10  my-10 bg-white  "  >
                <div className="w-0 py-4 bg-[#056DFF]  md:w-[30%] lg:w-[30%]">
                    <h4 className="text-[2rem] font-bold pb-[2rem] text-white text-center ">Contact Us</h4>
                    <div className='w-[80%] mx-auto'>
                        <div className="flex  m-0 my-6">
                            <div className='flex gap-x-6'>
                                <CiLocationOn size={20} color="white" />
                                <h4 className="text-white" >123 Main Street, Anytown, USA</h4>
                            </div>

                        </div>
                        <div className="flex m-0 my-6">
                            <div className='flex gap-x-6'>
                                <AiOutlineMail size={20} color="white" />
                                <h4 className="text-white" >
                                    john.doe@example.com
                                </h4>
                            </div>

                        </div>

                        <div className="flex  m-0 my-6">
                            <div className='flex gap-x-6'>
                                <BsTelephone size={20} color="white" />
                                <h4 className="text-white" >
                                    +1 (555) 123-4567
                                </h4>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="w-[100%] gap-0 px-4 sm:w-[100%] md:w-[50%] lg:w-[50%]">
                    <div >
                        <Formik
                            //   validationSchema={FormSchema}
                            initialValues={{}}
                            onSubmit={handleSignin}
                        >
                            {(props: FormikProps<any>) => (

                                <div>
                                    <div className="flex justify-between items-center">
                                        <div className='mb-10 mt-2'>
                                            <h4 className="font-bold text-[2rem] ">Get in Touch</h4>
                                            <h4 className="font-semibold">Feel free to drop us a message below</h4>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <ApTextInput
                                            type="text"
                                            placeHolder="Your Name"
                                            name="name"
                                            className='background-red-500
                                        placeholder:text-[1rem] placeholder:text-[#b1aeae]
                                        w-[50%] my-4 rounded-md px-3 '
                                        />
                                    </div>
                                    <div className=''>

                                        <ApTextInput

                                            type="email"
                                            placeHolder="Your Email"
                                            name="email"
                                            className='
                                        placeholder:text-[1rem] placeholder:text-[#b1aeae]
                                        w-[50%] my-4 rounded-md px-3 '
                                        />
                                    </div>

                                    <div className=''>
                                        <ApTextInput
                                            type="textarea"
                                            placeHolder=" Write Your Message"
                                            name="Messaging"
                                            className='background-red-500
                                        w-[50%] border-none my-4  '
                                        />
                                    </div>



                                    <div className="my-4">
                                        <ApButton
                                            title="Send"
                                            type="submit"
                                            //   loading={loading}
                                            //   onClick={() => props.handleSubmit()}
                                            className="bg-[#056DFF] text-white text-light  py-3 px-8 rounded-lg font-bold mb-5"
                                        />
                                    </div>







                                </div>




                            )}
                        </Formik>
                    </div>
                </div>
            </div>




        </div>
    )
}
