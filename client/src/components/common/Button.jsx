import React from "react";
import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";
import {CgSpinner} from "react-icons/cg";

const Button = ({
  children,
  className,
  handleOnClick,
  type = "button",
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={handleOnClick}
      className={twMerge(
        clsx(
          "py-3 px-4 text-white bg-main-700 rounded-md flex items-center justify-center gap-3",
          className,
          disabled && "opacity-50"
        )
      )}
      disabled={disabled}
    >
      {disabled && (
        <span className="animate-spin">
          <CgSpinner />
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
