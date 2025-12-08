import React from "react";
import styled from "styled-components";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  id: string;
  title: string;
  links: FooterLink[];
};

type SocialLink = {
  id: string;
  label: string;
  href: string;
};

type FooterProps = {
  columns: FooterColumn[];
  socialLinks?: SocialLink[];
  logoBackgroundSrc?: string; // e.g. "/images/TV-Footer-logo.jpg"
};

const FooterRoot = styled.footer<{ $bgLogo?: string }>`
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

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;      /* columns row + bottom bar stacked */
  gap: 32px;
`;

const ColumnsRow = styled.div`
  display: flex;               /* row of columns like reference UI */
  justify-content: space-between;
  align-items: flex-start;
  gap: 72px;
//   width: 100%;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`;

const Column = styled.div`
  min-width: 140px;
`;

const ColumnTitle = styled.h4`
  font-size: 13px;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin: 0 0 16px;
  color: #111111;
`;

const ColumnList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ColumnItem = styled.li`
  margin-bottom: 6px;
`;

const ColumnLink = styled.a`
  font-size: 14px;
  line-height: 1.5;
  text-decoration: none;
  color: #333333;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomBar = styled.div`
  padding-top: 12px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const Copyright = styled.span`
  font-size: 12px;
  color: #777777;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialAnchor = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #333333;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer: React.FC<FooterProps> = ({
  columns,
  socialLinks = [],
  logoBackgroundSrc,
}) => {
  const year = new Date().getFullYear();

  return (
    <FooterRoot $bgLogo={logoBackgroundSrc}>
      <Content>
        <ColumnsRow>
          {columns.map(col => (
            <Column key={col.id}>
              <ColumnTitle>{col.title}</ColumnTitle>
              <ColumnList>
                {col.links.map(link => (
                  <ColumnItem key={link.label}>
                    <ColumnLink href={link.href}>{link.label}</ColumnLink>
                  </ColumnItem>
                ))}
              </ColumnList>
            </Column>
          ))}
        </ColumnsRow>

        <BottomBar>
          <Copyright>© {year} Trivaah. All rights reserved.</Copyright>

          {socialLinks.length > 0 && (
            <SocialRow>
              {socialLinks.map(s => (
                <SocialAnchor
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.label}
                </SocialAnchor>
              ))}
            </SocialRow>
          )}
        </BottomBar>
      </Content>
    </FooterRoot>
  );
};
