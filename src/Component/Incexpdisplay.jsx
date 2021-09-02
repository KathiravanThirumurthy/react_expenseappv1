import React, { Component } from 'react'
import './Style.css';

export class Incexpdisplay extends Component {
  render() {
    const {income,expense}=this.props;
    return (
      <div>
          <div className="col-md-4 offset-md-4">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-6">
                            <h1 className="displayheader">Income</h1>
                            <h2 className="displayIncome">${income}</h2>
                    </div>
                    <div className="col-md-6">
                            <h1 className="displayheader">Expense</h1>
                            <h2 className="displayExpense">${expense}</h2>
                    </div>
                    </div>
                    
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Incexpdisplay
