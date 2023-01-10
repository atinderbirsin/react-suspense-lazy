import { createRef, useState } from "react";

function Dropdown({ data, label }) {
    const ref = createRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Please select a value");

  function handleDocumentClick(e) {
    console.log(e)
    console.log(isOpen, ref.current.contains(e?.target));
    if (isOpen && !ref.current.contains(e.target)) {
        setIsOpen((current) => setIsOpen(!current));
    } else {
        return;
    }
  }

  useState(() => {
    document.addEventListener('click' , handleDocumentClick, true);

    return () => {
        document.removeEventListener('click', handleDocumentClick);
    }
  }, [])

  function handleDropdownOptionClick(e) {
    console.log(e.target.innerHTML);
  }

  const options = data.map((option) => {
    return (
      <div
        key={option.name}
        onClick={handleDropdownOptionClick}
        className="h-full cursor-pointer hover:bg-blue-200 px-3"
      >
        {option.name}
      </div>
    );
  });

  function handleDropdownClick() {
    setIsOpen((current) => setIsOpen(!current));
  }

  return (
    <div
    ref={ref}
      onClick={handleDropdownClick}
      className="rounded cursor-pointer border border-gray-200 p-2 m-4 w-44"
    >
      {label || selected}
      <div>{isOpen && options}</div>
    </div>
  );
}

export default Dropdown;
