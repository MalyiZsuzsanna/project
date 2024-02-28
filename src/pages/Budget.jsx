import React from 'react'
import { useState } from 'react'
import { readBudget } from '../utils'
import { useEffect } from 'react'
import List from '@mui/material/List';
import { BudgetList } from '../componens/BudgetList';
import { AddNewItem } from '../componens/AddNewItem';




export const Budget = () => {
    const [budget,setBudget]=useState([])
    const [total,setTotal]=useState(0)
  const CalcTot=(arr)=>{
    if (arr.length>0 ){
      console.log(arr)
      return arr.reduce((acc,obj)=>acc+(+obj.amount),0)

  }else{
      return 0
  }}
  useEffect(()=>{
    console.log('egy')
    setTotal(CalcTot(budget))
        
  },[budget.length])
    


    useEffect(()=>{
      console.log('kettő')
        readBudget(setBudget)
        setTotal(CalcTot(budget))
        
    },[])
    console.log(budget,total);
  return (
    <div className='budgetstyle'>
        <AddNewItem/>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {budget.length>0 && budget.map(obj=><BudgetList {...obj} key={obj.id}/>)}
          </List>
          <div className='total'>
            total:{total}
          </div>
    </div>
  )
}

