import './App.css';
import {useState} from "react";

function App() {
  const [word,setWord] = useState("");
  const [isPalindrome,setPalindrome] = useState(" ");

  const checkPalindrome = () => {
      console.time('checkPalindrome');
      let newWord = word.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '');
      let a = newWord.length -1;
      for(let i=0;i<a/2;i++){
        let front = newWord[i];
        let back = newWord[a-i];

        if(front !== back){
          setPalindrome("This isn't a Palindrome 👎");
          console.timeEnd('checkPalindrome');
          return false;
        }
      }
      setPalindrome("You got a Palindrome 👌");
      console.timeEnd('checkPalindrome')
      return true;
  }
  return (
    <div className="App">
      <div className="palindromeForm">

        <div className="formHeaders">
          <img className="formLogo"src={"MeetBit_Icon_NoBG.svg"}/>
          <h3>Palindrome Challenge</h3>
          
        </div>
        
        <form>
          <input className="inputBox"type="text" placeholder="Palindrome" onChange={(e) => setWord(e.target.value)}></input><br />
          <p className="answer">{isPalindrome}</p>
          <button className="checkButton"type="button" onClick={checkPalindrome}>Check this string</button>
        </form>
      </div>
    </div>
  );
}

export default App;
