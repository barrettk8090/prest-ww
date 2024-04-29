import { useState, useEffect } from "react"
import DataSelector from './DataSelector'
import TableColumns from './TableColumns'
import TableRow from './TableRow'
import Select from 'react-select'
import ListOfStocks from "./ListOfStocks"

function DynamicTableMain() {
    
  const stockSymbols = ListOfStocks();

    //  API Stock Data
    const [stockData, setStockData] = useState([]);
    // Dropdown <Select> options
    const [selectedOptions, setSelectedOptions] = useState([]);
    // Sort state - High to Low PE
    const [isSorted, setIsSorted] = useState(false);
    // Price to Earnings filter
    const [peFilter, setPeFilter] = useState('');
    const pageSize=100;
    const [page, setPage] = useState(0);

    const handleLoadMore = () => {
      setPage(page + 1);
    };
  
    const handleChange = (selected) => {
      setSelectedOptions(selected);
   };

  //  Sorts the data based on the PE ratio - highest to lowest for now
   const handleSort = () => {
    setIsSorted(!isSorted);
};
  // Filter state
  const handleFilterChange = (event) => {
    setPeFilter(event.target.value);
  };
  const clearFilter = () => {
    setPeFilter('');
  };

  //  const stockSymbols = ['WMT', 'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', "NFLX", "WATT"]

   useEffect(() => {
    const fetchStockData = async () => {
      const start = page * pageSize;
      const end = start + pageSize;
      const currentSymbols = stockSymbols.slice(start, end);

      const fetchPromises = currentSymbols.map(symbol =>
        fetch(`https://api.gurufocus.com/public/user/${import.meta.env.VITE_REACT_APP_GURU_API_TOKEN}/stock/${symbol}/summary`)
          .then(response => response.json())
      );

      const results = await Promise.all(fetchPromises);
      setStockData(prevData => [...prevData, ...results]);;
    };

    fetchStockData();
 }, [page]);


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
          <div className="dropdown">
            <h3 className="filter-menu"> Filters + </h3>
            <h4> Price to Earnings </h4>
            <input type="radio" value="Max 10" name="pe" onChange={handleFilterChange} checked={peFilter === 'Max 10'} /> Max 10
            <input type="radio" value="Min 5" name="pe" onChange={handleFilterChange} checked={peFilter === 'Min 5'} /> Min 5
            <input type="radio" value="Between 5 and 10" name="pe" onChange={handleFilterChange} checked={peFilter === 'Between 5 and 10'} /> Between 5 and 10
            <button onClick={clearFilter}>Clear Filter</button>
            <h3>Add additional data:</h3>
            <Select styles={customStyles} options={options} onChange={handleChange} isMulti value={selectedOptions} />
            <button onClick={() => setSelectedOptions([])}>Clear Selection</button>
          </div>
          <table>
            <TableColumns columns={selectedOptions} handleSort={handleSort} isSorted={isSorted} setIsSorted={setIsSorted}/>
            <tbody>
              <TableRow stockData={stockData} isSorted={isSorted} setIsSorted={setIsSorted} peFilter={peFilter}/>
            </tbody>
          </table>
          <button onClick={handleLoadMore}>Load More</button>
        </div>
    )
}

export default DynamicTableMain