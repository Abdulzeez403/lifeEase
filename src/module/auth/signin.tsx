import ApButton from "@/components/button";
import { ApTextInput } from "@/components/input/TextInput";
import { ApText } from "@/components/typography";
import { Form, Formik, FormikProps } from "formik";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "./context";
import { IAuthSignIn } from "./model";

const SignIn = () => {
  const { loading, LogInUser } = useUserContext();

  const handleSignIn = (value: IAuthSignIn) => {
    const payload = { ...value };
    LogInUser(payload);
  };
  return (
    <div>
      <div className="font-bold text-center py-6">Welcome Back</div>
      <Formik
        //   validationSchema={FormSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSignIn}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <div>
              <div className="">
                <ApTextInput
                  label="Email"
                  type="text"
                  placeHolder="TheUser@gmail.com"
                  name="email"
                  className=" border-2 border-[#6F6E6E] 
                                        placeholder:text-[.8rem] placeholder:text-[#6F6E6E] pl-4"
                />
              </div>

              <div className="pt-2">
                <ApTextInput
                  label="Password"
                  type="password"
                  placeHolder="********"
                  name="password"
                  className=" border-2 border-[#6F6E6E] 
                                 placeholder:text-[1rem] placeholder:text-[#6F6E6E] pl-4"
                />
              </div>

              <div className="py-4 ">
                <li>
                  <Link
                    className="text-[#056DFF]  text-bold text-[.8rem] border-b-[1px] border-[#056DFF]"
                    href="/"
                  >
                    Forget password?
                  </Link>
                </li>
              </div>

              <ApButton
                title={loading ? "Loading.." : "Login"}
                type="submit"
                //   loading={loading}
                //   onClick={() => props.handleSubmit()}
                className="bg-[#056DFF] text-white text-light w-full py-3 rounded-lg font-bold mb-5"
              />

              <div className="flex items-center my-3">
                <div className="w-96 h-[2px] bg-black"></div>
                <h4 className="px-2 font-semibold">Or</h4>
                <div className="w-96 h-[2px] bg-black"></div>
              </div>

              <div className="flex gap-x-2  w-full py-2.5 rounded-lg border-2 justify-center mb-5">
                <FcGoogle size={20} />
                <ApText className="font-semibold">Sign in with Google</ApText>
              </div>

              <div className="flex gap-x-2  w-full py-2.5 rounded-lg border-2 justify-center mb-5">
                <FcGoogle size={20} />
                <ApText className="font-semibold">Sign in with Facebook</ApText>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
