import React from 'react'
import './Style.css';

function Header(props) {
  console.log("balance:"+props.balance);
  return (
   
    <div>
      <div className="col-md-4 offset-md-4">
        <h1 className="header">Expense App</h1>
        <h2 className="displayheader"> Your Balance: <span className="displayIncome">${props.balance}</span></h2>
        <hr></hr>
        </div>
    </div>
  )
}

export default Header
