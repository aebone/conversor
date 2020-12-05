import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 2rem;
`;

export const Jumbotron = styled.div`
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.03);
  border: 1px #c6c6c6 solid;
`;

export const PageTitle = styled.h1`
  border-bottom: 1px solid #c6c6c6;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

export const CenteredLabel = styled.label`
  display: block;
  text-align: center;
  padding: 1rem;
`;

export const Input = styled.input`
  height: 3rem;
  flex-grow: 1;
  font-size: 1rem;
  padding: 0 0.5rem;
`;

export const Select = styled.select`
  height: 3rem;
  flex-grow: 1;
  font-size: 1rem;
  padding: 0 0.5rem;
`;

export const Label = styled.label`
  width: 14rem;
  display: inline-block;
  font-size: 1.2rem;
  text-align: right;
  padding: 0.5rem 2rem 0.5rem 0;

  @media (max-width: 640px) {
    text-align: left;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  flex-wrap: wrap;
`;

export const CardDetail = styled.article`
  padding: 1rem;
  border: 1px #c6c6c6 solid;
  background-color: rgba(0, 0, 0, 0.03);
`;

export const Button = styled.button`
  display: block;
  padding: 1.5rem 6rem;
  margin: 1rem 0;
  background: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.body};
  font-size: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #00526d;
  }
`;

export const FlexRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
