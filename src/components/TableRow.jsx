function TableRow({stockData}){

    return(
        <tr>
            <td>{stockData?.summary?.general?.company}</td>
            <td>{stockData?.summary?.company_data?.symbol}</td>
            <td>{stockData?.summary?.company_data?.financial_health_grade}</td>
        </tr>
    )
}

export default TableRow;