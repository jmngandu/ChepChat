import { db } from "../firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import "./styles.scss";
import { useEffect } from "react";
import Chatbox from "./components/chatbox/chat";

function App() {
  let students = [];
  useEffect(() => {
    async function getData() {
      const readTheData = await getDocs(collection(db, "students"));
      readTheData.forEach((doc) => {
        students.push(doc.data());
      });
    }
    getData();
  }, []);

  console.log(students);
  async function addData() {
    await setDoc(doc(db, "students", "7"), {
      name: "Bob li",
      course: "Software Enginerring",
      age: 22,
      year: 4,
    });
  }
  async function deleteData() {
    await deleteDoc(doc(db, "students", "7"));
  }
  return (
    <>
      <div className="chepchat">
        <div className="sidebar">
          <button onClick={addData}>add data</button>
          <button onClick={deleteData}>delete doc</button>
        </div>
        <div className="chatbox">
          <Chatbox />
        </div>
      </div>
    </>
  );
}

export default App;
