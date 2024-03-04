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
    
    setTotal(CalcTot(budget))
        
  },[budget.length])
    


    useEffect(()=>{
    
        readBudget(setBudget)
        setTotal(CalcTot(budget))
        
    },[])
    console.log(budget,total);
  return (
    <div className='budgetstyle'>
        <AddNewItem/>
         <List sx={{ width: '100%', maxWidth: '560', bgcolor: 'rgb(111,142,114, 0.6)', fontSize:'20px' }}>
          {budget.length>0 && budget.map(obj=><BudgetList {...obj} key={obj.id}/>)}
          </List>
          <div style={{display:'flex', justifyContent:'center', padding:'1rem', maxWidth:'100%', margin:'0 auto'}}>
            total:{total}
          </div>
    </div>
  )
}

