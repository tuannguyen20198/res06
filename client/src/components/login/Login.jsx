import clsx from "clsx";
import React, {useEffect, useState} from "react";
import {Button, InputForm, InputRadio} from "..";
import {useForm} from "react-hook-form";
import {apiRegster, apiSignIn} from "~/apis/auth";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import withRouter from "~/hocs/withRouter";
import useAppStore from "~/store/useAppStore";
import {useUserStore} from "~/store/useUserStore";

const Login = () => {
  const [variant, setvariant] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const {setModal} = useAppStore();
  const {token, setToken} = useUserStore();
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

  const onSubmit = async (data) => {
    if (variant === "REGISTER") {
      setIsLoading(true);
      const response = await apiRegster(data);
      setIsLoading(false);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Congrats!",
          text: response.mes,
          showConfirmButton: true,
          confirmButtonText: "Go sign in",
        }).then(({isConfirmed}) => {
          if (isConfirmed) setvariant("LOGIN");
        });
      } else toast.error(response.mes);
    }
    if (variant === "LOGIN") {
      //Login
      const {name, role, ...payload} = data;
      const response = await apiSignIn(payload);
      if (response.success) {
        toast.success(response.mes);
        setToken(response.accessToken);
        setModal(false, null);
      } else toast.error(response.mes);
    }
  };

  console.log(token);

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
          validate={{
            required: "This field connot empty.",
            pattern: {
              value: /(0[3|5|7|8|9])+([0-9]{8})\b/,
              message: "Phone number invalid.",
            },
          }}
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
        {variant === "REGISTER" && (
          <InputRadio
            label="Type account"
            register={register}
            id="role"
            validate={{required: "This field connot empty."}}
            errors={errors}
            options={[
              {label: "User", value: "USER"},
              {label: "Agent", value: "AGENT"},
            ]}
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
