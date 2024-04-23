import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataSelector from './components/DataSelector'
import TableColumns from './components/TableColumns'
import TableRow from './components/TableRow'
import Select from 'react-select'


function App() {

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

  const [stockData, setStockData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  

  const handleChange = (selected) => {
    setSelectedOptions(selected);
 };

  useEffect(() => {
    fetch(`https://api.gurufocus.com/public/user/${import.meta.env.VITE_REACT_APP_GURU_API_TOKEN}/stock/AAPL/summary`)
        .then(r => r.json())
        .then(data => setStockData(data))
}, []);

  console.log(stockData)



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

export default App
