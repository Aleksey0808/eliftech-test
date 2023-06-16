import styled from '@emotion/styled';
// import { HiSearch } from 'react-icons/hi';
import { LuX } from 'react-icons/lu';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  overflow-y: auto;
`;

export const ModelContent = styled.div`
  min-height: 600px;
  width: 600px;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 15px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  text-align: center;
  padding: 12px;
`;

export const ModelTitle = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 12px;
  letter-spacing: 0.03em;

  padding: 10px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  padding: 20px;
  border: 1px solid #eee;

  overflow: auto;
`;

export const ModalBottom = styled.div`
  background-color: none;
  border: none;
  cursor: pointer;
  padding: 12px;
`;

export const Icon = styled(LuX)`
  height: 40px;
  width: 40px;
`;

export const TotalPrice = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 8px;
  letter-spacing: 0.02em;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  /* padding: 12px; */
`;

export const Item = styled.li`
  margin: 18px;
  padding: 10px;
  border: 2px solid #eee;
`;

export const Info = styled.p`
  margin-bottom: 14px;
  font-size: 16px;
  line-height: 8px;
  letter-spacing: 0.03em;
`;
