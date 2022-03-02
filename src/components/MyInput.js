import { useState } from "react";

function MyInput({
  titleText,
  type,
  myValue,
  id,
  mySetValueChange,
  placeholder,
}) {
  // const [inpValue, setInpValue] = useState("");

  const onInpValueChange = (e) => {
    mySetValueChange(e.target.value);
  };

  return (
    <div>
      <label className="text-xl text-center  font-semibold" htmlFor={id}>
        {titleText}:
      </label>
      <input
        onChange={onInpValueChange}
        value={myValue}
        type={type}
        className="border-2 rounded placeholder:text-red-500  border-gray-300 outline-blue-500 w-full block py-2 mb-8 "
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default MyInput;
