import styled from "styled-components";

const StyledSearchFilter = styled.div`
  display: flex;
  flex-flow: column;
  color: var(--brandDark);
  border-bottom: 1px solid var(--borderColor);
  > div {
    padding: 0 1rem;
    padding-bottom: 1rem;
    @media (min-width: 1024px) {
      padding: 0 1.75rem;
      padding-bottom: 1rem;
    }
  }
  > div:first-of-type {
    > div:first-of-type {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      @media (min-width: 1024px) {
        margin-bottom: 1rem;
      }
      span:last-of-type {
        color: #33333371;
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
    #searchbar {
      position: relative;
      color: #577482;
      > div:first-of-type {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
      }
      > div:last-of-type {
        position: absolute;
        right: 1px;
        top: 19px;
        transform: translateY(-50%);
        padding: 0.75em 1em;
        margin: 4px;
        border-radius: 4px;
        background-color: #00add9;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 13px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      input {
        width: 100%;
        padding: 0.75rem 2.5rem;
        border-radius: 4px;
        border: medium none;
        border: 1px solid var(--borderColor);
        font-size: 100%;
        background-color: #f4f8fa;
      }
      #go {
        display: none;
        @media (min-width: 768px) {
          display: block;
        }
      }
    }
  }
  > div:last-of-type {
    display: flex;
    gap: 0.25rem;
    @media (min-width: 768px) {
      gap: 0.5rem;
    }
    @media (min-width: 1024px) {
      gap: 1rem;
    }
    button {
      border: 1px solid rgb(217, 221, 233);
      background-color: white;
      color: var(--brandDark);
      border-radius: 4px;
      padding: 0px 11px;
      height: 45px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 12px;
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      cursor: pointer;
      @media (min-width: 768px) {
        justify-content: space-between;
      }
      > div {
        display: none;
        color: var(--brandLight);
        @media (min-width: 768px) {
          display: block;
        }
      }
      &:nth-of-type(5) {
        display: none;
        @media (min-width: 768px) {
          display: flex;
        }
      }
      &:nth-of-type(4) {
        display: none;
        @media (min-width: 1024px) {
          display: flex;
        }
      }
      &:last-of-type {
        flex-grow: 0;
        color: var(--brandLight);
        span {
          display: none;
          @media (min-width: 1024px) {
            display: block;
          }
        }
        #ellipsis {
          display: block;
          @media (min-width: 1024px) {
            display: none;
          }
        }
      }
      #type {
        display: none;
        @media (min-width: 768px) {
          display: inline;
        }
      }
    }
  }
`;

const SearchFilter = () => {
  return (
    <StyledSearchFilter>
      <div>
        <div>
          <span>used cars</span>
          <span>results: 19,890</span>
        </div>
        <div id="searchbar">
          <input
            type="search"
            placeholder="Search makes, models, or keywords"
          />
          <div>
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
          <div id="go">go</div>
        </div>
      </div>
      <div>
        <button>
          <span>payment & price</span>{" "}
          <div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </button>
        <button>
          <span>make & model</span>{" "}
          <div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </button>
        <button>
          <span>
            body <span id="type">type</span>
          </span>{" "}
          <div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </button>
        <button>
          <span>year & mileage</span>{" "}
          <div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </button>
        <button>
          <span>features</span>{" "}
          <div>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
        </button>
        <button>
          <div id="ellipsis">
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </div>
          <span>more fitlers</span>
        </button>
      </div>
    </StyledSearchFilter>
  );
};

export default SearchFilter;
