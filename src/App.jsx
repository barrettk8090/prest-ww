import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableColumns from './components/TableColumns'
import TableRow from './components/TableRow'


function App() {

  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetch(`https://api.gurufocus.com/public/user/${import.meta.env.VITE_REACT_APP_GURU_API_TOKEN}/stock/AAPL/summary`)
        .then(r => r.json())
        .then(data => setStockData(data))
}, []);

  console.log(stockData)



  return (
    <>
      <table>
        <TableColumns/>
        <tbody>
          <TableRow stockData={stockData} />
        </tbody>
      </table>


      
        
        
    </>
  )
}

export default App
