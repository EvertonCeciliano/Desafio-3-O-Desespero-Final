import React from 'react';
import {
  Container,
  Content,
  TopSection,
  CompanyInfo,
  SocialLinks,
  LinksWrapper,
  LinksColumn,
  Newsletter,
  InputGroup,
  Copyright
} from './styles';
import { 
  FacebookLogo, 
  InstagramLogo, 
  TwitterLogo, 
  LinkedinLogo 
} from '@phosphor-icons/react';

const LINKS = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  help: [
    { label: 'Payment Options', href: '/payment' },
    { label: 'Returns', href: '/returns' },
    { label: 'Privacy Policies', href: '/privacy' }
  ],
  social: [
    { Icon: FacebookLogo, label: 'Facebook', href: 'https://facebook.com' },
    { Icon: InstagramLogo, label: 'Instagram', href: 'https://instagram.com' },
    { Icon: TwitterLogo, label: 'Twitter', href: 'https://twitter.com' },
    { Icon: LinkedinLogo, label: 'LinkedIn', href: 'https://linkedin.com' }
  ]
};

export function Footer() {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log('Newsletter subscription');
  };

  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <TopSection>
          <CompanyInfo>
            <h2>Funiro.</h2>
            <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            <SocialLinks>
              {LINKS.social.map(({ Icon, label, href }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </SocialLinks>
          </CompanyInfo>

          <LinksWrapper>
            <LinksColumn>
              <h4>Links</h4>
              <ul>
                {LINKS.main.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </LinksColumn>

            <LinksColumn>
              <h4>Help</h4>
              <ul>
                {LINKS.help.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </LinksColumn>
          </LinksWrapper>

          <Newsletter>
            <h4>Newsletter</h4>
            <form onSubmit={handleSubscribe}>
              <InputGroup>
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address" 
                  aria-label="Email address for newsletter"
                  required 
                />
                <button type="submit">SUBSCRIBE</button>
              </InputGroup>
            </form>
          </Newsletter>
        </TopSection>
      </Content>
      <Copyright>
        <p> {currentYear} Funiro. All rights reserved.</p>
      </Copyright>
    </Container>
  );
}
