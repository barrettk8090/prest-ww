function TableRow({stockData}){

    return(
        <tr>
            <td>{stockData?.summary?.general?.company}</td>
            {/* <td>{stockData.summary.ticker}</td> */}
        </tr>
    )
}

export default TableRow;