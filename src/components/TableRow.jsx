function TableRow({ stockData }) {
    return (
        <>
            {stockData.map((stock, index) => (
                <tr key={index}>
                    <td>{stock?.summary?.general?.company}</td>
                    <td>{stock?.summary?.company_data?.symbol}</td>
                    <td>{stock?.summary?.company_data?.price}</td>
                    <td>{stock?.summary?.company_data?.pe}</td>
                    <td>{stock?.summary?.company_data?.pb}</td>
                    <td>{stock?.summary?.company_data?.ps}</td>
                    <td>EPS 1 YR</td>
                    <td>EPS 3 YR</td>
                    <td>EPS 5 YR</td>
                    <td>EPS 10 YR</td>
                    <td>{stock?.summary?.ratio["ROC (Joel Greenblatt) (%)"].value}</td>
                    <td>{stock?.summary?.ratio["ROE (%)"].value}%</td>
                    <td>{stock?.summary?.ratio["FCF Growth (%)"].value}%</td>
                    <td>{stock?.summary?.ratio["Net-margin (%)"].value}%</td>
                    <td>Proij 3=5 Annual; TOtal</td>
                    <td>PE CUrrent Rank</td>

                </tr>
            ))}
        </>
    );
}

export default TableRow;