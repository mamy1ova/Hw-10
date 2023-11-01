import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <Container>
      <Menu />
      <Outlet />
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  display: flex;
`;


