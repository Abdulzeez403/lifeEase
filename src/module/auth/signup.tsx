import React from "react";
import SignImage from "../../../public/image/signupImage.png";
import Logo from "../../../public/image/Logo.png";
import { ApImage } from "@/components/image";
import { ApTextInput } from "@/components/input/TextInput";
import { Form, Formik, FormikProps } from "formik";
import { ApText } from "@/components/typography";
import ApButton from "@/components/button";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { useUserContext } from "./context";
import { IAuthSignUp } from "./model";
export const Signup = () => {
  const { loading, CreateUser } = useUserContext();

  const handleSignUp = (values: any) => {
    const payload = { ...values };
    CreateUser(payload);
    console.log("SignUp");
  };
  return (
    <div className="flex h-[50%] overflow-hidden">
      <div className="w-[100%] px-4 md:w-[40%] lg:w-[40%] md:px-10 lg:px-10  pt-3">
        <div className="">
          <div className="w-[100px] mb-[6rem] ">
            <ApImage src={Logo} width={30} height={30} alt="image" />
          </div>
          <div className="my-8">
            <h4 className="font-bold text-[1.5rem] py-1">Create an account</h4>
            <ApText>Lets get you started</ApText>
          </div>

          <Formik
            //   validationSchema={FormSchema}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            onSubmit={handleSignUp}
          >
            {(props: FormikProps<any>) => (
              <Form>
                <div>
                  <div className="">
                    <ApTextInput
                      type="text"
                      placeHolder="First Name"
                      name="firstName"
                      className=" border-b-2 border-[#6F6E6E] placeholder:text-[1rem] placeholder:text-[#6F6E6E]"
                    />
                    <ApTextInput
                      type="text"
                      placeHolder="Last Name"
                      name="lastName"
                      className=" border-b-2 border-[#6F6E6E] placeholder:text-[1rem] placeholder:text-[#6F6E6E]"
                    />
                  </div>

                  <div className="py-6">
                    <ApTextInput
                      type="email"
                      placeHolder="Email"
                      name="email"
                      className=" border-b-2 border-[#6F6E6E] placeholder:text-[1rem] placeholder:text-[#6F6E6E]"
                    />
                  </div>

                  <div className="pb-8">
                    <ApTextInput
                      type="password"
                      placeHolder="Password"
                      name="password"
                      className=" border-b-2 border-[#6F6E6E] placeholder:text-[1rem] placeholder:text-[#6F6E6E]"
                    />
                  </div>

                  <ApButton
                    title={loading ? "Loading..." : "Create an account"}
                    type="submit"
                    className="bg-[#056DFF] text-white text-light w-full py-3 rounded-lg font-bold mb-5"
                  />
                  <div className="flex gap-x-2  w-full py-2.5 rounded-lg border-2 justify-center mb-5">
                    <FcGoogle size={20} />
                    <ApText className="font-bold">Sign in with Google</ApText>
                  </div>

                  <div className="flex gap-x-1 justify-center md:justify-end lg:justify-end">
                    <ApText>Already have an account? </ApText>
                    <li>
                      {" "}
                      <Link href="" className="border-b-2 border-black">
                        Login
                      </Link>
                    </li>
                  </div>

                  <div className="flex justify-between mt-[5rem]">
                    <ApText className="font-bold">Need Help?</ApText>
                    <div className="flex gap-x-2">
                      <BsTwitter size={25} />
                      <AiOutlineInstagram size={25} />
                      <AiFillLinkedin size={25} />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div className="relative  h-[100px] hidden sm:hidden md:block md:w-[70%] lg:w-[70%] lg:block">
        <div className=" ">
          <ApImage src={SignImage} width={350} height={50} alt="image" />
        </div>
        <div className="absolute left-[2rem]  bottom-[-30rem] rgiht-[2rem]">
          <h4 className="w-[90%] text-white font-bold text-[2rem]">
            Sign up to <span className="text-[#056DFF]">LifeEase</span> website
            to unlock personalized recommendations, save your{" "}
            <span className="text-[#056DFF]">favorite hostels</span>, book
            seamlessly, leave reviews. Join today to find your perfect home away
            from home!
          </h4>
        </div>
      </div>
    </div>
  );
};
