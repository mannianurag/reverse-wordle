import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const docRef = doc(db, "testData", "sample");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMessage(docSnap.data().message);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Reverse Wordle MVP</h1>
      <p>Message from Firebase: {message}</p>
    </div>
  );
}

export default App;
