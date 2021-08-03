import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledMenu = styled.div`
  position: absolute;
  top: 27px;
  left: 0;
  width: 100%;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(120%)")};
  transition: transform 400ms;
  background-color: var(--brandBlue);
  z-index: 9;
  padding-bottom: 1rem;

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
    ul {
      list-style-type: none;
      li {
        border-bottom: 2px solid var(--brandLight);
        padding: 0.75rem 0;
        font-weight: 600;
        > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          svg {
            cursor: pointer;
          }
        }
        #answer {
          font-weight: normal;
          padding-bottom: 0.5rem;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
    div {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      cursor: pointer;
      span {
        text-transform: uppercase;
        font-weight: 600;
        color: var(--brandLight);
      }
    }
  }
  #links {
    ul {
      li {
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }
`;

const Menu = ({ open, questions }) => {
  const [show, setShow] = useState(null);
  const handleShow = (id) => {
    if (show === id) return setShow(null);
    setShow(id);
  };
  const supportList = [
    {
      name: "How does your process work?",
      answer:
        "Using our comprehensive search filters and 360 degree vehicle tour, you can find your dream car right from the comfort of home. Personalize your order by applying for financing, choosing your payment option, adding a trade-in, and scheduling your vehicle to be delivered right to your door or picked up from our coin-operated vending machine!",
      id: "work",
    },
    {
      name: "How do I buy a car?",
      answer:
        'Once you find the car you want, click "Get Started" on the vehicle details page to kick off the order process. Entering your personal information and completing each step will extend the time the vehicle is reserved for you to complete your order.',
      id: "buy",
    },
    {
      name: "Are the Carvana financing terms I see on the site real? Will they change?",
      answer:
        "When you pre-qualify you'll see real, personalized terms based on the information you provide. As long as the information you provided can be verified as accurate by our Underwriting Team, there should not be any changes to your terms. To get pre-qualified, click here.",
      id: "finance",
    },
  ];
  const aboutLinks = [
    { name: "about us", to: "/about-us" },
    { name: "vehicle protection", to: "/vehicle-protection" },
    { name: "customer reviews", to: "/customer-reviews" },
    { name: "careers", to: "/careers" },
  ];

  const howLinks = [
    {name: 'buying from carvana'},
    {name: 'selling or trading in'},
    {name: 'certified cars'},
    {name: 'referrals'},
  ]
  return (
    <StyledMenu open={open}>
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
        {questions && (
          <div>
            <span>view all FAQs</span>
          </div>
        )}
      </div>
    </StyledMenu>
  );
};

export default Menu;
