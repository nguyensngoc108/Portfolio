import React from 'react';
import styled from 'styled-components';
import AchievementCard from '../Cards/AchievementCard';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0 60px;
    position: relative;
    z-index: 1;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0 0;
    gap: 12px;
`;

const Title = styled.h2`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    margin-top: 20px;
    padding: 0 16px;
`;

const Achievements = ({ achievementsData }) => {
    if (!achievementsData || achievementsData.length === 0) return null;

    return (
        <Container id="achievements">
            <Wrapper>
                <Title>Achievements</Title>
                <Desc>
                    Competitions, research, and certifications that shaped my journey as a developer.
                </Desc>
                <CardGrid>
                    {achievementsData.map((item) => (
                        <AchievementCard key={item.id} achievement={item} />
                    ))}
                </CardGrid>
            </Wrapper>
        </Container>
    );
};

export default Achievements;
