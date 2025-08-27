import { useState, useCallback, useEffect ,useRef} from "react";
import "rc-slider/assets/index.css";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // Generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}|:<>?-=[];',./`~";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword]);

  // Auto-generate password when options change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  // Copy to clipboard
  const copyPassword = useCallback ( () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  },[password])

  return (
    <>
      <h1 className="text-5xl text-center">Password Generator</h1>
      <div>
        <input type="text" value={password} readOnly />
        <button onClick={copyPassword}>Copy</button>

        <input
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        <div>
          {length} <label>Length</label>
        </div>

        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
          id="number"
        />
        <label htmlFor="number">Number</label>

        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
          id="character"
        />
        <label htmlFor="character">Character</label>
      </div>
    </>
  );
}

export default App;
