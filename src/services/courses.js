import {
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc,
  arrayUnion,
} from "firebase/firestore";

import { types } from "../utils/types";
import { db } from "../firebase-config";

export async function getAllCourses() {
  const courses = [];
  const querySnapshot = await getDocs(
    collection(db, `${types.collectionName}`)
  );

  querySnapshot.forEach((doc) => {
    courses.push(doc.data().courses);
  });

  return courses[0];
}

export async function insertCourse(course) {
  const courseRef = doc(db, `${types.collectionName}/dragandrop`);

  await updateDoc(courseRef, {
    courses: arrayUnion(course),
  });
}

export async function updateCourses(courses) {
  const courseRef = doc(db, `${types.collectionName}/dragandrop`);

  await setDoc(courseRef, {
    courses: arrayUnion(...courses),
  });
}
