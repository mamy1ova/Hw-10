import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  return (
    <NavBar>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "rgb(94, 94, 94)",
                fontWeight: "bold",
                textDecoration: "none",
              }
            : {}
        }
        to="."
        end
      >
        Posts
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "rgb(94, 94, 94)",
                fontWeight: "bold",
                textDecoration: "none",
              }
            : {}
        }
        to="comments"
      >
        Comments
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "rgb(94, 94, 94)",
                fontWeight: "bold",
                textDecoration: "none",
              }
            : {}
        }
        to="users"
      >
        Users
      </NavLink>
    </NavBar>
  );
};

export default Menu;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #fac25a;
  width: 300px;
  font-weight: bold;
  color: white;
  margin-right: 50px;
  padding-top: 250px;
  padding-left: 40px;
`;
