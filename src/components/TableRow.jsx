function TableRow({ stockData }) {
    return (
        <>
            {stockData.map((stock, index) => (
                <tr key={index}>
                    <td>{stock?.summary?.general?.company}</td>
                    <td>{stock?.summary?.company_data?.symbol}</td>
                    <td>{stock?.summary?.company_data?.financial_health_grade}</td>
                    <td>{stock?.summary?.company_data?.price}</td>
                    <td>{stock?.summary?.company_data?.pe}</td>
                    <td>{stock?.summary?.company_data?.pb}</td>
                    <td>{stock?.summary?.company_data?.ps}</td>
                    <td>EPS 5 YR</td>
                    <td>EPS 10 YR</td>
                    <td>{stock?.summary?.ratio["ROC (Joel Greenblatt) (%)"].value}</td>
                    <td>Return Share Equity</td>
                    <td>Free Cash Flow</td>
                    <td>Profit MArgin Trial 12</td>
                    <td>Proij 3=5 Annual; TOtal</td>
                    <td>PE CUrrent Rank</td>

                </tr>
            ))}
        </>
    );
}

export default TableRow;