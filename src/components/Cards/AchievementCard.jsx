import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Card = styled.article`
    width: 350px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 18px 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid #854CE6;
    &:hover {
        box-shadow: 0px 0px 20px rgba(133, 76, 230, 0.4);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        width: 300px;
        padding: 14px 16px;
    }
    @media only screen and (max-width: 400px) {
        width: 260px;
    }
`;

const Top = styled.div`
    display: flex;
    gap: 14px;
    align-items: flex-start;
`;

const Image = styled.img`
    height: 48px;
    width: 48px;
    object-fit: contain;
    border-radius: 8px;
    background-color: #000;
    padding: 2px;
    flex-shrink: 0;
    @media only screen and (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const Title = styled.h3`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 'EE'};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Subtitle = styled.p`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
`;

const Date = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + '99'};
`;

const Badge = styled.span`
    align-self: flex-start;
    font-size: 12px;
    font-weight: 600;
    color: #854CE6;
    background: rgba(133, 76, 230, 0.15);
    border: 1px solid rgba(133, 76, 230, 0.4);
    border-radius: 20px;
    padding: 2px 10px;
`;

const Desc = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + '99'};
    line-height: 1.6;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const ProofImage = styled.a`
    display: block;
    margin-top: 4px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(133, 76, 230, 0.25);
    cursor: pointer;
    transition: opacity 0.2s ease;
    &:hover {
        opacity: 0.85;
    }
    img {
        width: 100%;
        max-height: 180px;
        object-fit: cover;
        display: block;
    }
`;

const CredentialLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 4px;
    font-size: 13px;
    font-weight: 600;
    color: #854CE6;
    background: rgba(133, 76, 230, 0.1);
    border: 1px solid rgba(133, 76, 230, 0.4);
    border-radius: 8px;
    padding: 7px 14px;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease;
    align-self: flex-start;
    &:hover {
        background: rgba(133, 76, 230, 0.25);
        color: #a97df5;
    }
`;

const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?.*)?$/i;
const IMAGE_HOSTS = /^https?:\/\/(i\.ibb\.co|i\.imgur\.com|raw\.githubusercontent\.com)/i;

const isImageUrl = (url) => IMAGE_EXTENSIONS.test(url) || IMAGE_HOSTS.test(url);
const isPlaceholder = (url) => !url || url.startsWith('PASTE_');

const AchievementCard = ({ achievement }) => {
    const proofUrl = achievement.achievementImage;
    const hasProof = proofUrl && !isPlaceholder(proofUrl);

    return (
        <Card aria-label={`Achievement: ${achievement.title}`} role="article" tabIndex="0">
            <Top>
                <Image src={achievement.img} alt={achievement.title} />
                <Body>
                    <Title>{achievement.title}</Title>
                    <Subtitle>{achievement.subtitle}</Subtitle>
                    <Date>{achievement.date}</Date>
                </Body>
            </Top>
            {achievement.badge && <Badge>{achievement.badge}</Badge>}
            <Desc>{achievement.desc}</Desc>

            {hasProof && (
                isImageUrl(proofUrl) ? (
                    <ProofImage href={proofUrl} target="_blank" rel="noopener noreferrer">
                        <img src={proofUrl} alt={`Proof — ${achievement.title}`} />
                    </ProofImage>
                ) : (
                    <CredentialLink href={proofUrl} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt size={11} />
                        View Credential
                    </CredentialLink>
                )
            )}
        </Card>
    );
};

export default AchievementCard;
