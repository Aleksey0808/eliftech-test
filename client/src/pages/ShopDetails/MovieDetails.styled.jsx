import styled from '@emotion/styled';
import { NavLink, Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export const Icon = styled(IoMdArrowRoundBack)`
  padding: 0 0 10px 0;
  height: 40px;
  width: 40px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 2px 8px;
  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const List = styled.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style-type: square;
`;

export const Container = styled.div`
  padding: 0px 0px 30px;
`;

export const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  margin-bottom: 10px;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 0 0;
`;

export const Info = styled.p`
  padding: 0 0 20px 0;
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  text-decoration: dimgray;
`;

export const Cart = styled.button`
  width: 120px;
  height: 25px;
  border: 1px solid black;
  border-radius: 5px;
  color: #000000;
  background-color: #e0d6ba;
  cursor: pointer;
  font-size: 15px;
`;

export const NameProduct = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 6px;
  letter-spacing: 0.01em;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  letter-spacing: 0.03em;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
`;
