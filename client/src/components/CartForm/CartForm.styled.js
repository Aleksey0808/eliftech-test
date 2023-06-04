import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const WrapperCart = styled.div`
  border: 10px solid #ece89d;
  display: flex;
  width: 800px;
`;

export const List = styled.ul`
  /* padding: 20px 0 20px;
  margin: 0; */
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  list-style-type: square;

  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-right: 5px;
  padding-left: 5px;
  padding-bottom: 20px;
  row-gap: 5px;
  padding-bottom: 20px;
  width: 220px;
`;

export const Forma = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 400px;
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
  font-size: 16px;
  line-height: 12px;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 26px;
  line-height: 18px;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

export const Quantity = styled.div`
  display: flex;
  row-gap: 5px;
`;

export const Button = styled.button`
  width: 40px;
  border: 1px solid black;
  border-radius: 60px;
  color: #000000;
  background-color: #e0d6ba;
  cursor: pointer;
  font-size: 15px;
`;

export const Count = styled.p`
  padding: 5px;

  font-size: 18px;
  line-height: 14px;
  letter-spacing: 0.02em;
`;

export const NameProduct = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 6px;
  letter-spacing: 0.01em;
  margin-bottom: 10px;
`;

export const RemoveFromCart = styled.button`
  width: 110px;
  border: 1px solid black;
  border-radius: 5px;
  color: #000000;
  background-color: #e0d6ba;
  cursor: pointer;
  font-size: 15px;
`;

export const Submit = styled.button`
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
  color: #000000;
  background-color: #e0d6ba;
  cursor: pointer;
  font-size: 15px;
`;

export const Price = styled.div`
  margin-top: 15px;
`;
