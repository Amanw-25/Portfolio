import React from "react";
import styled from "styled-components";
import { certificates } from "../../data/constants"; // Assuming you have your certificate data

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 50px; /* Space between the title and certificates */
  text-align: center;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Marquee = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  margin-bottom: 50px; /* Space between marquee and images */
`;

const MarqueeContent = styled.div`
  display: inline-block;
  padding-left: 100%;
  animation: marquee 15s linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const CertificateItem = styled.a`
  display: inline-block;
  text-decoration: none;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-right: 50px;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  cursor: pointer;
`;

const CertificateImage = styled.img`
  width: 380px;
  height: 210px;
  object-fit: cover;
  margin-top: 15px;
  border-radius: 8px;
`;

const CertificateName = styled.div`
  margin-top: 15px;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const Certificate = () => {
  return (
    <Container id="Certificates">
      {/* Title for the certificates section */}
      <br/><br/>
      <Title>My Certificates</Title>

      {/* Marquee scrolling certificates */}
      <Marquee>
        <MarqueeContent>
          {certificates.map((certificate) => (
            <CertificateItem key={certificate.id} href={certificate.link} target="_blank">
              {/* Display certificate image and name inside marquee */}
              <CertificateImage src={certificate.image} alt={certificate.name} />
              <CertificateName>{certificate.name} - {certificate.issuer}</CertificateName>
            </CertificateItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </Container>
  );
};

export default Certificate;
