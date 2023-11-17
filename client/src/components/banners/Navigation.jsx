import React from "react";
import {Link, NavLink} from "react-router-dom";
import {Button} from "..";
import {navigations} from "~/utils/constants";
import {clsx} from "clsx";
import withRouter from "~/hocs/withRouter";
import {twMerge} from "tailwind-merge";
import useUserStore from "~/store/useUserStore";
import useAppStore from "~/store/useAppStore";
import Login from "../login/Login";
const Navigation = ({location, navigate}) => {
  const {token} = useUserStore();
  const {setModal} = useAppStore();
  return (
    <div
      className={twMerge(
        clsx(
          " w-full bg-transparent flex items-center justify-between fixed z-50 top-[85px] px-[100px] py-[26px]",
          location.pathname !== "/" && "bg-white"
        )
      )}
    >
      <Link to="/">
        <img
          src={twMerge(
            clsx(location.pathname !== "/" ? "/logo1.png" : "/logo.png")
          )}
          alt="logo"
          className="w-[180px] object-contain"
        />
      </Link>
      <div
        className={clsx(
          "flex text-main-100 text-lg items-center gap-6",
          location.pathname === "/" ? "text-main-100" : "text-gray-700"
        )}
      >
        {navigations.map((el) => (
          <NavLink
            className={({isActive}) =>
              clsx(
                isActive && "font-medium",
                location.pathname === "/" ? "text-white" : "text-gray-900"
              )
            }
            key={el.id}
            to={el.path}
          >
            {el.text}
          </NavLink>
        ))}
        {!token ? (
          <Button
            className={twMerge(
              clsx("bg-transparent border-main-100 border"),
              location.pathname === "/" ? "text-white" : "text-gray-900"
            )}
            handleOnClick={() => setModal(true, <Login />)}
          >
            Sign in
          </Button>
        ) : (
          <Button
            className={twMerge(
              clsx("bg-transparent border-main-100 border"),
              location.pathname === "/" ? "text-white" : "text-gray-900"
            )}
          >
            Add Listing
          </Button>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navigation);
