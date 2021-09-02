import React, { Component } from 'react'
import Transactionitem from './Transactionitem';

export class Transactionlist extends Component {
  render() {
      
      const {info}=this.props;
     return (
      <div>
          <ul className="list-group">
            
            {info.map(item=> <Transactionitem key={item.id} info={item}/>
              
            )}
            
        </ul>
      </div>
    )
  }
}

export default Transactionlist
