import clsx from "clsx";
import React, {useEffect, useState} from "react";
import {Button, InputForm} from "..";
import {useForm} from "react-hook-form";

const Login = () => {
  const [variant, setvariant] = useState("LOGIN");
  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    reset();
  }, [variant]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white text-lg rounded-md px-6 py-8 w-[500px] flex flex-col items-center gap-6"
    >
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome to Rest06
      </h1>
      <div className="flex w-full border-b justify-start gap-6">
        <span
          onClick={() => setvariant("LOGIN")}
          className={clsx(
            variant === "LOGIN" && "border-b-4 border-main-700 ",
            "cursor-pointer"
          )}
        >
          Login
        </span>
        <span
          onClick={() => setvariant("REGISTER")}
          className={clsx(
            variant === "REGISTER" && "border-b-4 border-main-700",
            "cursor-pointer"
          )}
        >
          New Account
        </span>
      </div>
      <form className="flex w-full px-4 flex-col gap-4">
        <InputForm
          label="Phone number"
          inputClassname="rounded-md"
          register={register}
          id="phone"
          placeholder="Type your phone number here"
          validate={{required: "This field connot empty."}}
          errors={errors}
        />
        <InputForm
          label="Password"
          inputClassname="rounded-md"
          register={register}
          id="password"
          placeholder="Type your password here"
          validate={{required: "This field connot empty."}}
          type="password"
          errors={errors}
        />
        {variant === "REGISTER" && (
          <InputForm
            label="Your Fullname"
            inputClassname="rounded-md"
            register={register}
            id="name"
            placeholder="Type your phone name here"
            validate={{required: "This field connot empty."}}
            errors={errors}
          />
        )}
        <Button handleOnClick={handleSubmit(onSubmit)} className="py-2 my-6">
          {variant === "LOGIN" ? "SIGN IN" : "Register"}
        </Button>
        <span className="cursor-pointer text-main-500 hover:underline w-full text-center">
          Forgot your password?
        </span>
      </form>
    </div>
  );
};

export default Login;
