import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableRow from './components/TableRow'


function App() {

  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    fetch(`https://api.gurufocus.com/public/user/${import.meta.env.VITE_REACT_APP_GURU_API_TOKEN}/stock/WMT/summary`)
        .then(r => r.json())
        .then(data => setStockData(data))
}, []);

  console.log(stockData)



  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Ticker</th>
            <th>Financial Strength</th>
            <th>Proj 3-5 Yr % Annual Total Return</th>
            <th>Current PE Ratio</th>
            <th>Price to Book Value</th>
            <th>Price/Sales Ratio</th>
            <th>EPS Growth 5-Year</th>
            <th>EPS Growth 10-Year</th>
            <th>Return on Total Capital</th>
            <th>Return on Shareholders' Equity</th>
            <th>Free Cash Flow</th>
            <th>Profit Margin Trail 12 Mo</th>
            <th>Proj 3-5 Yr % Annual Total Return Rank</th>
            <th>PE Current Rank</th>
          </tr>
        </thead>
        <tbody>
          <TableRow stockData={stockData} />
        </tbody>

      </table>


      
        
        
    </>
  )
}

export default App
