import styled from "styled-components";
import { useState } from "react";

const StyledMenu = styled.div`
  position: absolute;
  top: 24px;
  right: -1.75rem;
  left: initial;
  width: calc(100vw + 1.75rem);
  height: min-content;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(155%)")};
  transition: transform 400ms;
  background-color: var(--brandBlue);
  z-index: 99;
  padding-bottom: 1rem;
  
  @media (min-width: 640px) {
    max-width: 400px;
  }
  @media (min-width: 1536px) {
    right: 0;
  }
  #wrapper {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    max-width: 400px;
    gap: 1rem;
  }
  #chat {
    padding: 2.5rem 0;
    height: 30%;
    > div {
      padding: 1rem 1.5rem;
      background-color: var(--brandDark);
      max-width: 70%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      border-radius: 3px;
      p {
        font-weight: 600;
        text-transform: uppercase;
      }
      &:first-child {
        margin-bottom: 1rem;
        svg {
          max-width: 40px;
          color: white;
        }
      }
    }
  }
  svg {
    max-width: 30px;
  }
  #list {
    padding: 0 2rem;

    p {
      text-align: start;
    }
    ul {
      list-style-type: none;
      li {
        border-bottom: 2px solid var(--brandLight);
        padding: 0.75rem 0;
        font-weight: 600;
        cursor: pointer;
        gap: 1rem;
        justify-content: space-between;
        > div {
          max-width: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          svg {
            cursor: pointer;
          }
        }
        #answer {
          font-weight: normal;
          padding: 0.5rem 0;
          padding-top: 0.75rem;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }

    #viewAll {
      text-transform: uppercase;
      text-align: center;
      margin-top: 1.5rem;
      font-weight: 600;
      color: var(--brandLight);
      cursor: pointer;
    }
  }
`;

const Menu = ({ open, questions }) => {
  const [show, setShow] = useState(null);
  const handleShow = (id) => {
    if (show === id) return setShow(null);
    setShow(id);
    console.log(id);
  };

  return (
    <StyledMenu open={open}>
      <div id="wrapper">
        <div id="chat">
          <div>
            <i class="fa fa-comment" aria-hidden="true"></i>
            <p>chat with us</p>
          </div>
          <div>
            <i class="fa fa-phone" aria-hidden="true"></i>
            <p>contact us</p>
          </div>
        </div>
        <div id="list">
          <ul>
            {questions.map((item, i) => (
              <li key={i} onClick={() => handleShow(item.id)}>
                <div>
                  <p>{item.name}</p>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </div>
                {item.id === show && <div id="answer">{item.answer}</div>}
              </li>
            ))}
          </ul>
          <div id="viewAll">
            <span>view all FAQs</span>
          </div>
        </div>
      </div>
    </StyledMenu>
  );
};

export default Menu;
