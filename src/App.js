import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [word, setWord] = useState("");

  useEffect(() => {
    const fetchWord = async () => {
      const docRef = doc(db, "games", "today");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setWord(docSnap.data().word);
      }
    };

    fetchWord();
  }, []);

  return (
    <div>
      <h1>Reverse Wordle</h1>
      <p>Today's Word: {word}</p>
    </div>
  );
}

export default App;
