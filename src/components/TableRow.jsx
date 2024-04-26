function TableRow({ stockData }) {
    return (
        <>
            {stockData.map((stock, index) => (
                <tr key={index}>
                    <td>{stock?.summary?.general?.company}</td>
                    <td>{stock?.summary?.company_data?.symbol}</td>
                    <td>{stock?.summary?.company_data?.financial_health_grade}</td>
                </tr>
            ))}
        </>
    );
}

export default TableRow;