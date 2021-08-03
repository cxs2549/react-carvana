import styled from "styled-components";
import { useState, useRef } from "react";
import useOnClickOutside from 'use-onclickoutside'

const StyledMenu = styled.div`
  position: absolute;
  top: 25px;
  right: -1.75rem;
  left: initial;
  width: 100%;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(155%)")};
  transition: transform 400ms;
  background-color: var(--brandBlue);
  z-index: 9;
  padding-bottom: 1rem;
  max-width: 400px;
  @media (min-width: 1536px) {
    right: 0;
  }
  #wrapper {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
  }
  #chat {
    padding: 3rem 0 0 0;
    > div {
      padding: 1rem 1.5rem;
      background-color: var(--brandDark);
      max-width: 70%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 1rem;
      p {
        font-weight: 600;
        text-transform: uppercase;
      }
      &:first-child {
        margin-bottom: 1rem;
        svg {
          max-width: 40px;
        }
      }
    }
  }
  svg {
    max-width: 30px;
  }
  #list {
    padding: 2rem;
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
    }
  }
`;

const Menu = ({ open, close, questions }) => {
  const [show, setShow] = useState(null);
  const handleShow = (id) => {
    if (show === id) return setShow(null);
    setShow(id);
    console.log(id);
  };
  const ref = useRef()
  useOnClickOutside(ref, close)
  return (
    <StyledMenu open={open} ref={ref}>
      <div id="wrapper">
        <div id="chat">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <p>chat with us</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p>contact us</p>
          </div>
        </div>
        <div id="list">
          <ul>
            {questions.map((item, i) => (
              <li key={i} onClick={() => handleShow(item.id)}>
                <div>
                  <p>{item.name}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
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
