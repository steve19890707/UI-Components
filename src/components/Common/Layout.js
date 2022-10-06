import styled from "styled-components";
// comps
import { Header } from "./Header";

const StyledLayout = styled.div``;

export const Layout = ({ children }) => {
  return <StyledLayout>
    <Header />
    {children}
  </StyledLayout>
}