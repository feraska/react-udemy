import React, { useState } from "react"
import '../form/Form.css'
import Results from "../results/Results";
const Form = (e)=> {
    const [results, setResults] = useState([]);
    const [data, setData] = useState({
        'current-savings':0,
        'yearly-contribution':0,
        'expected-return':0,
        duration:0
    })
    
    
    const changeHandler = (e) => {
        const {id, value} = e.target
        setData({...data,[id]:value})   
    }
    const calculateHandler = (e,userInput) => {
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
        e.preventDefault()
        console.log(userInput)
        const yearlyData = []; // per-year results
    
        let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];
    
        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings += yearlyInterest + yearlyContribution;
          yearlyData.push({
            // feel free to change the shape of the data pushed to the array!
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          });
        }
        
        setResults(yearlyData)
    
        // do something with yearlyData ...
      };
      const clickReset = () => {
        setResults([])
      }
    return(
        <>
      
        <form className="form" onSubmit={(e)=>calculateHandler(e,data)} onReset={clickReset}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={(e)=>changeHandler(e)}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(e)=>changeHandler(e)} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(e)=>changeHandler(e)}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(e)=>changeHandler(e)}/>
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
          
        </p>
      </form>
      
      <Results results= {results}/>
      </>
    )
}
export default Form