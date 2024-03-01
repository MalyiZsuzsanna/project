import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from './firebaseApp'
import {addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc} from 'firebase/firestore'

export const readBudget=(setBudget)=>{
    const budgetRef=collection(db,'budget')
    const q=query(budgetRef,orderBy('timestamp','desc'))
    onSnapshot(q,(snapshot)=>{
     setBudget(snapshot.docs.map(doc=>({...doc.data(),id:doc.id}) ));
    })
    
}


export const toggleDone=async (id,done)=>{
    const docRef=doc(db,'budget',id)
    done=!done
    await updateDoc(docRef,{done})

  }
  export const updateBudget=async (id,descr)=>{
    const docRef=doc(db,'budget',id)
    await updateDoc(docRef,{descr})
  }

  export const addNewBudget=async (newItem,newAmount)=>{
    const collectionRef=collection(db,'budget')
    const newBudget={
      descr:newItem,
      done:false,
      amount:newAmount,
      timestamp:serverTimestamp()
    }
    await addDoc(collectionRef,newBudget)
  }
  export const deleteBudget=async (id)=>{
  const docRef=doc(db,'budget',id)
  await deleteDoc(docRef)
}
  
  
  export const sanitizeHTML=(html)=>{
    const doc=new DOMParser().parseFromString(html,'text/html')
    return doc.body.textContent || ''
}



export const truncatedStory=(description,maxLength)=>{
    //eltávolítjuk a HTML elemeket:
    const sanitizedDescription=sanitizeHTML(description)
    let truncatedStory=sanitizedDescription
    if(sanitizedDescription.length>maxLength){
        const lastIndexSpace=sanitizedDescription.lastIndexOf(' ',maxLength)
        if(lastIndexSpace!=-1){
            truncatedStory=sanitizedDescription.substring(0,lastIndexSpace)
        }else{
            truncatedStory=sanitizedDescription.substring(0,maxLength)
        }

    }
    return truncatedStory
}