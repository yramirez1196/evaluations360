import { useCallback, useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Styles from "./styles.module.scss";
import clsx from "clsx";
/* import { IconsCommon } from "@/consts";
import { Icon } from "@/components/icon"; */
export const useModal = () => {
  const [isShow, setIsShow] = useState(false);
  const cancelButtonRef = useRef(null);
  const hide = () => {
    setIsShow(false);
  };

  const show = () => {
    setIsShow(true);
  };

  const Modal = useCallback(
    ({
      children,
      isShow,
      actions,
      onClose,
      size = "max-w-2xl",
      title,
      CustomHeader,
    }) => {
      return (
        <Transition.Root show={isShow} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z-40 top-0 left-0 right-0  inset-0 overflow-y-auto"
            initialFocus={cancelButtonRef}
            open={isShow}
            onClose={hide}
          >
            <div
              className={clsx(
                "flex items-center justify-center  h-screen text-center  ",
                Styles.bgOverlay,
                Styles.paddingModal
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-transparent-45 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div
                  className={clsx(
                    "inline-block align-bottom text-left shadow-md overflow-hidden transform transition-all w-full ",
                    Styles.rounded,
                    Styles.bgContainer,
                    Styles.maxHScreen,
                    /*   size */
                  )}
                >
                  <div
                    className={clsx(
                      "  overflow-y-auto flex flex-col",
                      Styles.paddingModalChildren
                    )}
                  >
                    {CustomHeader ? (
                      <CustomHeader />
                    ) : (
                      <div
                        className={clsx(
                          "flex mb-6",
                          title ? "justify-between" : "justify-end"
                        )}
                      >
                        {title && (
                          <div>
                            <p className="text-lg font-normal">{title}</p>
                          </div>
                        )}

                        <div className=" flex justify-end items-center gap-x-2">
                          {actions && actions()}

                          <button
                            type="button"
                            className=" focus:outline-none"
                            onClick={() => {
                              hide();
                              onClose && onClose();
                            }}
                          >
                            <span className="sr-only">Close</span>X
                            {/* <Icon src={IconsCommon.IconX}></Icon> */}
                          </button>
                        </div>
                      </div>
                    )}

                    <div>{children}</div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      );
    },
    []
  );

  return { Modal, hide, isShow, show };
};
