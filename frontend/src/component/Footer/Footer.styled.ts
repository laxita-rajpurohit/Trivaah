import styled from "styled-components";

export const FooterRoot = styled.footer<{ $bgLogo?: string }>`
  position: relative;
  background: #f7f7f7;
  padding: 48px 80px 40px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: ${({ $bgLogo }) =>
      $bgLogo ? `url(${$bgLogo})` : "none"};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 520px auto; /* large watermark */
    pointer-events: none;
  }

  @media (max-width: 900px) {
    padding: 32px 20px 28px;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;      /* columns row + bottom bar stacked */
  gap: 32px;
`;

export const ColumnsRow = styled.div`
  display: flex;               /* row of columns like reference UI */
  justify-content: space-between;
  align-items: flex-start;
  gap: 72px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`;

export const Column = styled.div`
  min-width: 140px;
`;

export const ColumnTitle = styled.h4`
  font-size: 13px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin: 0 0 16px;
  color: #111111;
`;

export const ColumnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ColumnItem = styled.li`
  margin-bottom: 6px;
`;

export const ColumnLink = styled.a`
  font-size: 14px;
  line-height: 1.5;
  text-decoration: none;
  color: #333333;

  &:hover {
    text-decoration: underline;
  }
`;

export const BottomBar = styled.div`
  padding-top: 12px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Copyright = styled.span`
  font-size: 12px;
  color: #777777;
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialAnchor = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #333333;

  &:hover {
    text-decoration: underline;
  }
`;

