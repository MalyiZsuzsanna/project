import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from './firebaseApp'
import {addDoc, collection, doc, onSnapshot, serverTimestamp, updateDoc} from 'firebase/firestore'

export const readBudget=(setBudget)=>{
    const budgetRef=collection(db,'budget')
    onSnapshot(budgetRef,(snapshot)=>{
     setBudget(snapshot.docs.map(doc=>({...doc.data(),id:doc.id}) ));
    })
    
}

export const toggleDone=async (id,done)=>{
    const docRef=doc(db,'budget',id)
    done=!done
    await updateDoc(docRef,{done})

  }
  export const updateTodo=async (id,descr)=>{
    const docRef=doc(db,'budget',id)
    await updateDoc(docRef,{descr})
  }

  export const addNewBudget=async (newItem,newAmount)=>{
    const collectionRef=collection(db,'budget')
    const newBudget={
      descr:newItem,
      done:false,
      
      timestamp:serverTimestamp()
    }
    await addDoc(collectionRef,newBudget)
  }
  
  /*export const deleteTodo= async (id)=>{
    const docRef=doc(db,'budget',id)
    await deleteDoc(docRef)
  }*/


//autentikáció:
export const signIn=async (email,password)=>{
    try{
      await signInWithEmailAndPassword(auth,email,password)
    }catch(err){
      console.log(err);
    }
  }
  export const getCurrentUser=(setUser)=>{
    onAuthStateChanged(auth,(current)=>setUser(current))
  }
  export const signOutUser=async ()=>{
    await signOut(auth)
  }
  