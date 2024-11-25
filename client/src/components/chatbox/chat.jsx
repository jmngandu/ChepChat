import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect } from "react";
const Chatbox = () => {
  let students = [];
  useEffect(() => {
    async function getData() {
      const studeDoc = await getDocs(collection(db, "students"));
      studeDoc.forEach((doc) => {
        students.push(doc.data());
      });
    }
    getData();
  }, []);
  console.log(students);
  async function addData() {
    await setDoc(doc(db, "students", "3"), {
      name: "James mukuvi",
      course: "computer science",
      age: 21,
      year: 3,
    });
  }
  async function updateData() {
    await setDoc(
      doc(db, "students", "2"),
      {
        age: 21,
      },
      { merge: true }
    );
  }
  async function deleteData() {
    await deleteDoc(doc(db, "students", "3"));
  }
  return (
    <>
      <h1>chatbox</h1>
      <button onClick={addData}>Add data</button>
      <button onClick={deleteData}>Delete data</button>
      <button onClick={updateData}>Update data</button>
    </>
  );
};
export default Chatbox;
