import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import { getAuth} from 'firebase/auth'

const app = initializeApp(firebaseConfig);

export const storage=getStorage(app)
export const db=getFirestore(app)
// létrehoztuk a referenciát a szolgátatásban
export const auth=getAuth(app)



