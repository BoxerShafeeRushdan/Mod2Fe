import React, { useState } from "react";
import axios from "axios";

function Profile(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function refreshPage() {
    window.location.reload(false);
}

  const submitform = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/api/users`, {
        name: name,
        password: password,
      })
      .then((response) => {
        setError(response.data.error);
        props.setUser(response.data.user);
        if (response.data.user) {
          refreshPage();
        }
        localStorage.setItem("userId", response.data.user.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="backgroundpic">
      <div className="login">
        <div class="login-container">
          <form onSubmit={submitform}>
            <h3>Login to your Account</h3>
            <div className="input">
              <input
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input">
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input">
              <button type="submit" value="Login!">
                Login
              </button>
              <div class="welcome">
                <h1>Welcome {name}</h1>
              </div>
            </div>
          </form>

          <p>{error}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
