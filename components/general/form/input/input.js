import React from "react";

export const Input = ({ label, name, placeHolder, defaultValue, textArea, register }) => {
	 const registerInput = register && register(name);
  return (
    <div className="relative w-full">
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      {!textArea ? (
        <input
          {...registerInput}
          type="text"
          placeholder={placeHolder}
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          defaultValue={defaultValue}
        />
      ) : (
        <>
          <textArea
            {...registerInput}
            type="text"
            placeholder={placeHolder}
            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            defaultValue={defaultValue}
          ></textArea>
        </>
      )}
    </div>
  );
};
