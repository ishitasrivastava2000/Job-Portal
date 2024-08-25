import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";
import MultiInput from "./MultiInput"

const dropDownData = [
    { title: "Job Title", icon: IconSearch, options: ['Designer', 'Developer', 'Product Manager',
        'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'
    ]},
    { title: "Location", icon: IconMapPin, options: ['Delhi', 'New York', 'San Fransisco', 'London',
        'Berlin', 'Tokyo', 'Sydney', 'Toronto'
    ]},
    { title: "Experience", icon: IconBriefcase, options: ['Entry Level', 'Intermeddiate', 'Expert']},
    {title: "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship']}
];

const Search=()=>
{
    return <div className="flex">
        {
            dropDownData.map((item, index) => <div key={index} className="w-1/5">
                <MultiInput {...item}/>
            </div>)
        }
    </div>
}
export default Search;