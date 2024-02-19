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

  useEffect(()=>{
    if (budget.length>0 ){
      let s=budget.reduce((acc,obj)=>acc+obj.amount,0)
    console.log(s,'FT')
    setTotal(s)
    }
    
  },[budget.length])
    


    useEffect(()=>{
        const unsubscribe= readBudget(setBudget)
        return ()=>unsubscribe()
    },[])
    console.log(budget);
  return (
    <div className='budgetstyle'>
        <AddNewItem/>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {budget.length>0 && budget.map(obj=><BudgetList {...obj} key={obj.id}/>)}
          </List>
          <div>
            total:{total}
          </div>
    </div>
  )
}

