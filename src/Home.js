import React, { useEffect, useState } from "react";

function Home() {
  const[users,setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:4000/api/users`)
      const jsonResult = await result.json();

        setUsers(jsonResult)
    }

    fetchData();
  },[])

  return(
    <body>

    <div class="home">
      <div class="titles">
        <h1>
         MiniBox
        </h1>

        <h2>Users</h2>
        {users.map(user =>
          <h3>{user.name}</h3>            
          )}
      </div>
    </div>
    </body>
    );
  }

  export default Home;