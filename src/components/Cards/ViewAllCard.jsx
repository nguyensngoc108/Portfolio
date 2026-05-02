import React from 'react';
import styled from 'styled-components';
import { FaCode } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const VACard = styled.article`
    width: 330px;
    height: 490px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

const Icon = styled(FaCode)`
    color: ${({ theme }) => theme.primary};
    font-size: 60px;
`;

const Text = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
`;

function ViewAllCard() {
  const navigate = useNavigate();
  return (
    <VACard onClick={() => navigate('/AllProjects')}>
      <Icon />
      <Text>View All Projects</Text>
    </VACard>
  );
}

export default ViewAllCard;
