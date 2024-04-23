

function TableColumns({columns}){

    return(
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
            {columns.map((column, index) => (
        <th key={index}>{column.label}</th>
      ))}
          </tr>
        </thead>
        )
}

export default TableColumns;