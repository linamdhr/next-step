import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BUttonClick() {
  // Declare a new state variable, which we'll call "count"
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const checkPassword = () => {
    if (password === "lina@123") {
      navigate("/");
    } else {
      console.log("wrong password");
    }
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <input type="text" value={password} onChange={handlePasswordChange} />
      <p>Your name is:{name}</p>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={checkPassword}>Submit password</button>
    </div>
  );
}
