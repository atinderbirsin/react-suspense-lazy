import { useState } from "react";

function Dropdown({ data, label }) {
    const [isOpen, setIsOpen] = useState(false)

    const options = data.map((option) => {
        return <div key={option.name}>
            {option.name}
        </div>
    })
    
    function handleDropdownClick() {
        setIsOpen((current) => setIsOpen(!current));
    }

    return (
        <div onClick={handleDropdownClick}>
            {label ? label : "Please select a value"}
            <div>
                {isOpen && options}
            </div>
        </div>
    )
}

export default Dropdown;