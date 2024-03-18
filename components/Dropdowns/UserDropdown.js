import React from "react";
import { createPopper } from "@popperjs/core";
import { signOut } from "next-auth/react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
     
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="focus:outline-none ">            <div className="items-center flex">
              <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                <img
                  alt="..."
                  className="w-full rounded-full align-middle border-none shadow-lg"
                  src="/img/team-1-800x800.jpg"
                />
              </span>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1 block">
              <Menu.Item>
                <div>
                  <button
                    type="button"
                    className={
                      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                    }
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UserDropdown;
