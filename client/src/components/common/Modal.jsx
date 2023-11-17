import React from "react";
import useAppStore from "~/store/useAppStore";

const Modal = () => {
  const {contentModal, setModal} = useAppStore();
  return (
    <div
      onClick={() => setModal(false, null)}
      className="absolute z-[9999] h-screen w-screen flex items-center justify-center bg-overplay-30"
    >
      {contentModal}
    </div>
  );
};

export default Modal;
