import styled from 'styled-components';

export const Form = styled.form`
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 16px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const FormButton = styled.button`
  width: 120px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #fff;
  background-color: #034f84;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    background-color: #F2552C;
  }
`;
