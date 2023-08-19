import { collection,addDoc ,doc, updateDoc,deleteDoc} from "firebase/firestore";
import { db } from "./config";

export async function save(data){
    console.log("saving....",data)
    try {
        const dbCollection = collection(db, 'tasks');
        const docRef = await addDoc (dbCollection, data);
       // console. log ("Document written with ID: ", docRef.id);
       return docRef.id;
     } catch (e) {
        console.error ("Error adding document: ", e);
    }
}

export async function update(id,data){
    console.log("updating....",id,data)
    const docRef = doc(db, "tasks",id);
    await updateDoc(docRef,data);
}

export async function remove(id){
    console.log("removing....",id)
    const docRef = doc(db,"tasks",id);
    await deleteDoc(docRef);
}