import React, { Component } from 'react'
import Header from './Header'
import Incexpdisplay from './Incexpdisplay'
import Listdata from './Listdata'
import Transaction from './Transaction'
import { v4 as uuidv4 } from 'uuid';
import Transactionlist from './Transactionlist'

export class Expenseapp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         items:[],
         item:{
             description:'',
             amount:''
         },
         id:'',
         balance:'0',
         income:'0',
         expense:'0'
      }
    }
    changeHandler=(e)=>{
        const updated={...this.state.item,
            [e.target.name]: e.target.value,id:uuidv4()}
        this.setState({
            item:updated
          });   
    }
    submitHandler=(e)=>{
        e.preventDefault();
       
        const newItem={...this.state.item}
        const items=[...this.state.items,newItem];
       
        this.setState({
            items:items,
            item:{
                description:'',
                amount:''
            }
        })
        this.calculateBalance(items);
        //this.calculateIncome(items);
       // this.calculateExpense(items);
    }
    calculateIncome(items)
    {
       
        console.log("Income");
        let amtIncome=items.map(function(item){
          { 
            if(item.amount > 0)
            {
              return Number(item.amount);
            }else
            {
              return false;
            }
            }
        }); 
       
     
        let income=amtIncome.reduce((a, b) => +a + +b, 0) ;
        
        this.setState({
          income:income,
                    
          }) 
    }
    calculateExpense(items)
    {
      console.log("Expense");
    }
    calculateBalance(items)
    {
     
      // calculate income 
      let amtIncome=items.map(function(item){
        { 
          if(item.amount > 0)
          {
            return Number(item.amount);
          }else
          {
            return false;
          }
          }
      }); 
     
   
      let income=amtIncome.reduce((a, b) => +a + +b, 0) ;
      
         
        let amtBalance=items.reduce((a, item) => +a + +item.amount, 0)  ;
        let expense=amtBalance-income;
       
           this.setState({
            balance:amtBalance,
            income:income,
            expense:expense       
            }) 
      
       
    }
   
  render() {
      
    return (
      <div>
         <Header balance={this.state.balance}/>
         <Incexpdisplay income={this.state.income} expense={this.state.expense} />
         <Listdata />
         <Transactionlist info={this.state.items}/>
         <Transaction onChangeHandler={this.changeHandler}
                      onSubmitHandler={this.submitHandler} 
                      singleItem={this.state.item} 
         />
         
      </div>
    )
  }
}

export default Expenseapp
