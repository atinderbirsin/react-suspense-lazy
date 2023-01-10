import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const data = [
        { name: 'Red', value: 'red' },
        { name: 'Green', value: 'green' },
        { name: 'Blue', value: 'blue' },
    ]

    return <Dropdown data={data} label="Please select a option"/>

};

export default DropdownPage;