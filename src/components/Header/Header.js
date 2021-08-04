import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Topbar from "./Topbar/Topbar";

const StyledHeader = styled.header`
 
  position: relative;
  z-index: 200;
  max-width: var(--maxWidth);
  margin: 0 auto;
	height: 97px;
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
