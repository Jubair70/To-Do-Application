import styled from 'styled-components';

export const ControlContainer = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
`;

export const ControlItem = styled.li`
  list-style-type: none;
  padding: 10px;
  background: #E0359C;
  border-right: 1px solid #E0359C;
  border-top: 1px solid #E0359C;
  border-bottom: 1px solid #E0359C;
  color: #f1f1f1;
  cursor: pointer;
  display: flex;
  transition: 0.3s ease all;
  &:first-of-type {
    border-left: 1px solid #E0359C;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &.active {
    background: #fb3636;
  }
  &:hover {
    background: #fb3636;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none !important;
  padding: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
  font-size: 1.3rem !important;

  & > li {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #e45021;
    border-left: 1px solid #e45021;
    border-right: 1px solid #e45021;

    &:last-child {
      border-bottom: 1px solid #e45021;
    }

    & > span {
      flex-basis: 50%;
      padding: 1rem;
      text-align: center;
      &:first-child {
        border-right: 1px solid #e45021;
      }
    }
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 10px;
  background: #03a9f4;
  border: 1px solid #007db5;
  font-size: 1rem;
  cursor: pointer;
  color: white;
`;

export const PaginatedListContainer = styled.div`
  background: tomato;
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 5px;
  width: 100%;
`;