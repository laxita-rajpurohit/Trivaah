import React from "react";
import {
  FooterRoot,
  Content,
  ColumnsRow,
  Column,
  ColumnTitle,
  ColumnList,
  ColumnItem,
  ColumnLink,
  BottomBar,
  Copyright,
  SocialRow,
  SocialAnchor,
} from "./Footer.styled";

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
