import React, { useState } from 'react';

const DataSelector = ({options, onChange}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (e) => {
        const selected = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedOptions(selected);
        onChange(selected);
    };

    return (
        <select multiple={true} value={selectedOptions} onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
     );
}

export default DataSelector;