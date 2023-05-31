import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  /* display: inline-flex; */
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;
export const Forma = styled(Form)`
  display: flex;
  align-items: center;

  min-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Input = styled(Field)`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  outline: none;
  font: inherit;
  /* width: 800px; */
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 38px;
  height: 38px;
  border: 0;
  background: none;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
export const Icon = styled(HiSearch)`
  width: 25px;
  height: 25px;
  /* position: absolute; */
  right: 7px;
  top: 9px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 250px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;
