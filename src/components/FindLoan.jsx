import React, { useState } from 'react'
import { findLoan } from '../APIService';

const FindLoan = () => {
  const [loanID, setLoanID] = useState('')
  const [currLoan, setCurrLoan] = useState(undefined);

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await findLoan(loanID);
    console.log(res)
    setLoanID('');
    setCurrLoan(res);
  } 

  return (
    <div className="container">
      <div>
        <label style={{marginRight: "0.2rem"}}>Loan ID</label>
        <input type="text" value={loanID} onChange={e => setLoanID(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>Find</button>
      </div>
      { 
      !currLoan
        ? <></>
        : <div className="loan-detail-container">
          <div style={{fontSize: "1.15rem", marginBottom: "0.3rem"}}><b>Loan Details:</b></div>
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

export default FindLoan
