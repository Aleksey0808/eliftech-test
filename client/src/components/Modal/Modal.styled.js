import styled from '@emotion/styled';
import { HiSearch } from 'react-icons/hi';

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

  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const ModelContent = styled.div`
  width: 400px;
  background-color: #fff;
`;

export const ModalHeader = styled.div`
    text-align: center;
    padding: 12px;
`;

export const ModelTitle = styled.h2`
    font-size: 16px;
`;

export const ModalBody = styled.div`
    padding: 20px;
    border: 1px solid #eee;
`;