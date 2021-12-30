import React, { useState } from 'react'
import { createLoan } from '../APIService';

const CreateLoan = () => {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('')
  const [lengthMonths, setLengthMonths] = useState('')
  const [monthlyPmt, setMonthlyPmt] = useState('')
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await createLoan({amount, rate, lengthMonths, monthlyPmt})
    setAmount('');
    setRate('');
    setLengthMonths('');
    setMonthlyPmt('');
    if (res.message) {
      setSuccess(false);
      setError(res.message);
      setTimeout(() => setError(undefined), 4000);
    }
    else {
      setSuccess(`Successfully created loan. ID: ${res._id}`);
    }
  }

  return (
    <div className="container">
      <div style={{fontSize: "1.5rem", paddingBottom: "1rem"}}>Create a new loan</div>
      <form onSubmit={handleSubmit}>
        <div style={{display: 'flex', flexDirection: 'column'}}> 
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
      {success ? <div style={{color: "green", marginTop: "0.5rem", fontWeight: "500"}}>{success}</div> : <></>}
    </div>
  )
}

export default CreateLoan
