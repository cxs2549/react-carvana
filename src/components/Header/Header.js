import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Topbar from "./Topbar/Topbar";

const StyledHeader = styled.header`
 
  position: relative;
  z-index: 200;
  margin: 0 auto;
	height: 97px;
  box-shadow: 0 4px 2px -2px #3f3f3f41;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Topbar />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
