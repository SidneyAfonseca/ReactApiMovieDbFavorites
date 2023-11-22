import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div
        style={{
          backgroundColor: "gray",
          width: "100%",
          position: "absolute",
          top: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            marginLeft: "1em",
            gap: "1em",
          }}
        >
          <NavLink to="/" style={{ color: "white" }}>
            Filmes
          </NavLink>
          <NavLink style={{ color: "white" }} to="/favorites">
            Favoritos
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default NavBar;
