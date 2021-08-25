import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

export default function MultiSelect({ selectedValue, data, onChange }) {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      value={data.filter((obj) => selectedValue.includes(obj.value))}
      onChange={onChange}
      options={data}
    />
  );
}
