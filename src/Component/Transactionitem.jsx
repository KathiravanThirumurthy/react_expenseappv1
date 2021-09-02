import React, { Component } from 'react'
import './Style.css';
export class Transactionitem extends Component {
  render() {
    const {description,amount}=this.props.info;
    return (
      <div>
          <div className="col-md-4 offset-md-4">
             <li className="list-group-item mb-2 d-flex justify-content-between align-items-center">
                 <span className="listdisplay">{description}</span>
                 <span className="listdisplay">{amount}</span>
             </li>
          </div>
          
      </div>
    )
  }
}

export default Transactionitem

