import "./App.css";
import { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e, userName, password) => {
    e.preventDefault();
    const data = {
      userName: e.target.username.value,
      password: e.target.password.value,
    };

    userName = data.userName;
    password = data.password;

    alert(JSON.stringify(data));
    console.log(userName);
    console.log(password);
  };

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="imputContainer">
            <label htmlFor="username">User Name</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="username"
              type="text"
              id="username"
            />
          </div>
          <div className="imputContainer">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              id="password"
            />
          </div>

          <input
            className="submit"
            type="submit"
            value="Login"
            disabled={userName == "" || password == "" ? true : false}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
