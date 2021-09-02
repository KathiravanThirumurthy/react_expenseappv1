import React, { Component } from 'react'
import './Style.css';
export class Transaction extends Component {
  render() {
      const{onChangeHandler,onSubmitHandler,singleItem}=this.props;
     // console.log(this.props);
    return (
      <div>
        <h1 className="displayheader">Add new Transaction</h1>
        <div className="col-md-4 offset-md-4">
          <hr></hr>
          <form onSubmit={onSubmitHandler} >
                <div className="form-group">
                    <label htmlFor="description" className="labelalign">Description</label>
                    <input type="text" className="form-control" id="description" 
                     placeholder="Enter text" name="description" value={singleItem.description}
                     onChange={onChangeHandler} 
                     
                     />
                   <small className="smalltext">Enter your mode of payment</small> 
                </div>
                <div className="form-group">
                    <label htmlFor="amount" className="labelalign">Amount</label>
                    <input type="number" className="form-control" id="amount"  name="amount" value={singleItem.amount}
                    placeholder="Enter Amount"
                    onChange={onChangeHandler} />
                    <small className="smalltext">positive value corresponds to income and negative to expense</small> 
                </div>
               
                           
               
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
           </div>
      </div>
    )
  }
}

export default Transaction
