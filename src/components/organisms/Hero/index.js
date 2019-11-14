import React from 'react'
import styled from 'styled-components'
import { palette, size } from 'styled-theme'

import {
  Block,
  Paragraph,
  IconLink,
  IconButton,
  LogoImage,
  PreformattedText,
  Heading,
  Tooltip,
} from 'components'

const Wrapper = styled(Block)`
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`

const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${size('maxWidth')};
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  &:first-child {
    flex: none;
  }
  @media screen and (max-width: 640px) {
    padding: 0.25rem;
    width: 100%;
  }
`

const Text = styled(Paragraph)`
  color: ${palette('grayscale', 3, true)};
  font-weight: 300;
  font-size: 1.35rem;
  line-height: 1.35em;
  width: 100%;
  letter-spacing: 0.05em;
  @media screen and (max-width: 640px) {
    text-align: center;
    font-size: 1rem;
  }
`

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  > :not(:first-child) {
    margin-left: 0.5rem;
  }
`

const Instructions = styled.div`
  width: 100%;
  margin-top: 2rem;
  @media screen and (max-width: 640px) {
    margin-top: 1rem;
  }
`

const Hero = (props) => {
  return (
    <Wrapper opaque reverse {...props}>
      <InnerWrapper>
        <Section>
          <LogoImage height={60} />
          <ButtonGroup>
            <Tooltip reverse data-title="Contact Spritle !!! 😄">
              <IconButton icon="location" href="https://www.spritle.com/contact">Contact</IconButton>
            </Tooltip>
            <Tooltip reverse data-title="Read Blog !!!" align="end" position="bottom">
              <IconButton icon="docs" href="https://www.spritle.com/blogs/">Blog</IconButton>
            </Tooltip>
          </ButtonGroup>
        </Section>
        <Section>
          <Text>
            <strong>About us</strong>
            Spritle is a team of talented people ready to care about your product. We love coding. We love beautiful design. We love doing our job better than possible. Every product we craft is a challenge we are excited about.
            Software is created for people, and so our mission is to provide an ambience by which every person involved in creating such software be valued. Be it stakeholders, product owners, the end users or the development team, they are need a professional and friendly collaborations to build great software. We at Spritle try to provide that ambience.
            </Text>
          <Instructions>
            <Heading level={2} reverse>career</Heading>
            <PreformattedText block reverse wrapped>
              Full Stack Develoers, Frontend Develoers, Software Tester, React Native Develoers - iOS/Android Platform
            </PreformattedText>
            <IconLink
              icon = "heart"
              right
              reverse
              href="https://www.spritle.com/career"
            >
              Apply
            </IconLink>
          </Instructions>
        </Section>
      </InnerWrapper>
    </Wrapper>
  )
}

export default Hero
