import {NavLink} from "react-router-dom"

function Navbar() {

  return(
    <body>

    <div class="Navbar">
     

<ul>
  <h2>MiniBox</h2>
  <li><NavLink  to="/">
          Home
        </NavLink></li>

  <li><NavLink  to="/profile">
          Profile
        </NavLink></li>

  <li><li><NavLink  to="/allfiles">
          AllFiles
        </NavLink></li></li>
        
  <li><a href="#contact">Admin Console</a></li>
</ul>


      </div>
    </body>
    );
  }

  export default Navbar;