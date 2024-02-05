import React from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";
import { useModal } from "hooks/modal";
import { ContainerEvaluations } from "./ContainerEvaluations";

const NotificationDropdownEvaluations = ({ id, isCreate }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const { Modal, hide, isShow, show } = useModal();
  return (
    <>
      <button
        className="text-blueGray-500 py-1 px-3 focus:outline-none"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-20 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <Link href={`/profile/${id}`}>
          <button
            className={
              "focus:outline-none text-sm py-2 px-4 font-normal text-left w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            View Profile
          </button>
        </Link>
        <div>
          {" "}
          <button
            className={
              "focus:outline-none text-sm py-2 px-4 font-normal text-left w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={() => {
              show();
            }}
          >
            Evaluate
          </button>
        </div>
      </div>
      <div>
        <Modal isShow={isShow}>
          <ContainerEvaluations isCreate={isCreate} />
        </Modal>
      </div>
    </>
  );
};

export default NotificationDropdownEvaluations;
