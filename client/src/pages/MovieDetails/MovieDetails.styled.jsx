import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

export const Icon = styled(IoMdArrowRoundBack)`
  padding: 0 0 10px 0;
  height: 40px;
  width: 40px;
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
