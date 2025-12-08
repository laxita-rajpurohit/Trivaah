import styled from "styled-components";

export const Strip = styled.section`
  padding: 48px 20px 64px;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 120px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  font-size: 18px;
  line-height: 1.4;
  color: #111111;
  font-family: "Mahalika", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  margin: 0;
  white-space: pre-line;
`;

