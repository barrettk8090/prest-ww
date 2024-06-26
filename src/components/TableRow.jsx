import { useState } from "react";

function TableRow({ stockData, isSorted, setIsSorted, peFilter}) {


    const sortedData = [...stockData].sort((a, b) => {
        if (isSorted) {
            return a?.summary?.company_data?.pe - b?.summary?.company_data?.pe;
        } else {
            return b?.summary?.company_data?.pe - a?.summary?.company_data?.pe;
        }
    });

    const filteredData = sortedData.filter(stock => {
        const pe = stock?.summary?.company_data?.pe;
        switch (peFilter) {
            case 'Max 10':
                return pe <= 10;
            case 'Min 5':
                return pe >= 5;
            case 'Between 5 and 10':
                return pe >= 5 && pe <= 10;
            default:
                return true; 
        }
    });


    return (
        <>
             {/* <button onClick={handleSort}>Sort</button> */}
            {filteredData.map((stock, index) => (
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
                    {/* <td>Proij 3=5 Annual; TOtal</td>
                    <td>PE CUrrent Rank</td> */}

                </tr>
            ))}
        </>
    );
}

export default TableRow;