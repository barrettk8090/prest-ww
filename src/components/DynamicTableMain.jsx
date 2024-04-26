import { useState, useEffect } from "react"
import DataSelector from './DataSelector'
import TableColumns from './TableColumns'
import TableRow from './TableRow'
import Select from 'react-select'

function DynamicTableMain() {
        
    const [stockData, setStockData] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);
  
    const handleChange = (selected) => {
      setSelectedOptions(selected);
   };

   const stockSymbols = ["MSFT", "AAPL", "WMT", "GOOGL", "AMZN"];

   useEffect(() => {
    const fetchStockData = async () => {
      const fetchPromises = stockSymbols.map(symbol =>
        fetch(`https://api.gurufocus.com/public/user/${import.meta.env.VITE_REACT_APP_GURU_API_TOKEN}/stock/${symbol}/summary`)
          .then(response => response.json())
      );

      const results = await Promise.all(fetchPromises);
      setStockData(results);
    };

    fetchStockData();
 }, []);

  console.log(stockData)

// Configurations for the react-select component
    const options = [
        { value: 'New Data 1', label: 'New Data 1' },
        { value: 'New Data 2', label: 'New Data 2' },
        { value: 'New Data 3', label: 'New Data 3' },
        { value: 'New Data 4', label: 'New Data 4' },
       ];
    
       const customStyles = {
        option: (provided) => ({
           ...provided,
           color: 'black', // Change the text color here
        }),
        control: (provided) => ({
           ...provided,
           color: 'black', // Change the text color of the control here
        }),
        singleValue: (provided) => ({
           ...provided,
           color: 'black', // Change the text color of the selected value here
        }),
       };

    return (
        <div>
        <Select
        styles={customStyles}
        options={options}
        onChange={handleChange}
        isMulti
        value={selectedOptions}
      />
      <button onClick={() => setSelectedOptions([])}>Clear Selection</button>
      <table>
        <TableColumns columns={selectedOptions}/>
        <tbody>
          <TableRow stockData={stockData} />
        </tbody>
      </table>
            
        </div>
    )
}

export default DynamicTableMain