import { collection, getDocs } from 'firebase/firestore'
import { types } from "../utils/types"
import {db} from '../firebase-config'


const getAllCourses = async () => {
  const querySnapshot = await getDocs(collection(db, `${types.collectionName}`));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}

export default getAllCourses