import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Card = styled.article`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
    padding: 12px 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 12px;
        width: 300px;
    }
    @media only screen and (max-width: 575px) {
        width: 290px;
        padding: 12px 8px;
    }
    border: 0.1px solid #306EE8;
`;

const Top = styled.header`
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    justify-content: space-between;
`;

const TopLeft = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-start;
    flex: 1;
`;

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Role = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Company = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Date = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const ChevronIcon = styled.div`
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 4px;
    flex-shrink: 0;
    transition: color 0.2s ease;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    max-height: ${({ open }) => (open ? '1000px' : '0')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    transition: max-height 0.4s ease, opacity 0.3s ease;
`;

const BulletList = styled.ul`
    margin: 0;
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const BulletItem = styled.li`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    line-height: 1.5;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const SectionLabel = styled.p`
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    margin-top: 4px;
    margin-bottom: 2px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    @media only screen and (max-width: 768px) {
        font-size: 11px;
    }
`;

const Skills = styled.section`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
`;

const SkillsLabel = styled.b`
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
`;

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Skill = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 11px;
    }
`;

const ExperienceCard = ({ experience }) => {
    const [open, setOpen] = useState(false);
    const bullets = experience?.bullets || [];
    const keyAccomplishments = experience?.keyAccomplishments || [];
    const hasDetails = bullets.length > 0 || keyAccomplishments.length > 0;

    const isPlaceholder = (url) =>
        !url || url.startsWith('PASTE_');

    return (
        <Card
            onClick={() => hasDetails && setOpen(prev => !prev)}
            aria-labelledby={`experience-card-${experience.id}`}
            aria-expanded={open}
            role="button"
            aria-label={`Experience at ${experience.company}`}
        >
            <Top>
                <TopLeft>
                    {!isPlaceholder(experience?.img) && (
                        <Image src={experience.img} alt={`${experience.company} logo`} />
                    )}
                    <Body>
                        <Role>{experience.role}</Role>
                        <Company>{experience.company}</Company>
                        <Date>{experience.date}</Date>
                    </Body>
                </TopLeft>
                {hasDetails && (
                    <ChevronIcon>
                        {open ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                    </ChevronIcon>
                )}
            </Top>

            {experience?.skills && (
                <Skills>
                    <SkillsLabel>Skills:</SkillsLabel>
                    <ItemWrapper>
                        {experience.skills.map((skill, index) => (
                            <Skill key={index}>• {skill}</Skill>
                        ))}
                    </ItemWrapper>
                </Skills>
            )}

            <Details open={open}>
                {bullets.length > 0 && (
                    <BulletList>
                        {bullets.map((item, index) => (
                            <BulletItem key={index}>{item}</BulletItem>
                        ))}
                    </BulletList>
                )}

                {keyAccomplishments.length > 0 && (
                    <>
                        <SectionLabel>Key Accomplishments</SectionLabel>
                        <BulletList>
                            {keyAccomplishments.map((item, index) => (
                                <BulletItem key={index}>{item}</BulletItem>
                            ))}
                        </BulletList>
                    </>
                )}
            </Details>
        </Card>
    );
};

export default ExperienceCard;
