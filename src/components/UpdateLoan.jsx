import React, { useState } from 'react'
import { updateLoan } from '../APIService'

const UpdateLoan = () => {
  const [loanID, setLoanID] = useState('');
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('')
  const [lengthMonths, setLengthMonths] = useState('')
  const [monthlyPmt, setMonthlyPmt] = useState('')
  const [error, setError] = useState(undefined);
  const [currLoan, setCurrLoan] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await updateLoan(loanID, {amount, rate, lengthMonths, monthlyPmt})
    setLoanID('');
    setAmount('');
    setRate('');
    setLengthMonths('');
    setMonthlyPmt('');
    if (res.message) {
      setCurrLoan(false)
      setError(res.message);
      setTimeout(() => setError(undefined), 4000);
    } else {
      setCurrLoan(res);
    }
  }

  return (
    <div className="container">
      <div style={{fontSize: "1.5rem", paddingBottom: "1rem"}}>Update a loan</div>
      <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', flexDirection: 'column'}}> 
        <div className="input">
            <label>ID:</label>
            <input type="text" value={loanID} onChange={e => setLoanID(e.target.value)}></input>
          </div>
          <div className="input">
            <label>Amount:</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)}></input>
          </div>
          <div className="input">
            <label>Rate (out of 100):</label>
            <input type="number" value={rate} onChange={e => setRate(e.target.value)}></input>
          </div>
          <div className="input">
            <label>Length in Months:</label>
            <input type="number" value={lengthMonths} onChange={e => setLengthMonths(e.target.value)}></input>
          </div>
          <div className="input">
            <label>Monthly Payment:</label>
            <input type="number" value={monthlyPmt} onChange={e => setMonthlyPmt(e.target.value)}></input>
          </div>
        </div>
        <button style={{width: "10rem"}} type="submit">Submit</button>
      </form>
      {error ? <div style={{color: "red", marginTop: "0.5rem", fontWeight: "500"}}>{error}</div> : <></>}
      { 
      !currLoan
        ? <></>
        : <div className="loan-detail-container">
          <div style={{fontSize: "1.15rem", marginBottom: "0.3rem"}}><b>Updated Loan Details:</b></div>
          <div className="loan-detail"><b>ID:</b> {currLoan._id}</div>
          <div className="loan-detail"><b>Amount:</b> ${currLoan.amount}</div>
          <div className="loan-detail"><b>Rate:</b> {currLoan.rate}%</div>
          <div className="loan-detail"><b>Length:</b> {currLoan.lengthMonths} months</div>
          <div className="loan-detail"><b>Monthly Pmt:</b> ${currLoan.monthlyPmt}</div>
        </div>
      }
    </div>
  )
}

export default UpdateLoan
