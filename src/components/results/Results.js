import React from "react"
import '../results/Results.css'
const Results = ({results}) => {
    const length = results.length;
    console.log(length)
    return(
        <>
        {length&&
        <table className="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {results.map(
                    (item)=>(
                        <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{item.savingsEndOfYear}</td>
                        <td>{item.yearlyInterest}</td>
                        <td>
                            {
                            item.savingsEndOfYear-item.yearlyContribution*item.year
                            }
                            </td>
                        <td>{item.yearlyContribution*item.year}</td>
                        </tr>
                    )
                )
            
                
                
            
                    }
            </tbody>
        </table>
                }
                </>
                
        
        
        
    )
}

export default Results