import styled from "styled-components";

export const LoadingContainer = styled.div`
  padding: 24px;
`;

export const ErrorContainer = styled.div`
  padding: 24px;
  color: red;
`;

export const SectionTitle = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  font-family: "Mahalika";
`;

export const SectionTitleWithMargin = styled(SectionTitle)`
  margin-top: 20px;
`;

export const CTAWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 70px 0 60px 0;
  justify-content: center;
  @media (max-width: 768px)
  {
  padding: 70px 10px 60px ;
  }
`;

