import React, { useState } from "react";

function App() {
  let [csf,sfn]=useState("");
  let [csl,sln]=useState("");
  let [cse,se]=useState("");

  function handleFName(event){
    sfn(event.target.value);
  }

  function handleLName(event){
    sln(event.target.value);
  }

  function handleEmail(event){
    se(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {csf} {csl}
      </h1>
      <p>{cse}</p>
      <form>
        <input onChange={handleFName} name="fName" placeholder="First Name" />
        <input onChange={handleLName} name="lName" placeholder="Last Name" />
        <input onChange={handleEmail} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
