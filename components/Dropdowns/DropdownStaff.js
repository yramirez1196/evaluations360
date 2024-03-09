import React from "react";
import { createPopper } from "@popperjs/core";

export const DropdownStaff = ({ showEdit }) => {
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
          "bg-white  text-base z-20 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        
        <div>
          <button
            className={
              "focus:outline-none text-sm py-2 px-4 font-normal text-left w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
            onClick={() => {
              showEdit();
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};
