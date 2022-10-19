import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    
    <body>
      <head>
      <script src="https://kit.fontawesome.com/36c8cccb8c.js" crossorigin="anonymous"></script></head>
      <div class="sidenav">
        <h2>MiniBox</h2>
        <a>
                  <NavLink to="/">Home</NavLink>
        </a>

        <a>
          <NavLink to="/profile">Profile</NavLink>
        </a>

        <a>
          <a>
            <NavLink to="/allfiles">AllFiles</NavLink>
          </a>
        </a>
      </div>
    </body>
  );
}

export default Navbar;
