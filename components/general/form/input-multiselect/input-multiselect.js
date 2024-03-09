import React from 'react'
import Select from "react-select";

export const InputMultiselect = ({options, label, defaultValue}) => {
	return (
    <div>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <Select
        defaultValue={[defaultValue]}
        isMulti
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        options={options}
      />
    </div>
  );
}
