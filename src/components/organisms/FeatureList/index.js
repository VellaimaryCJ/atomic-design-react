import React from 'react'
import styled from 'styled-components'

import {
  Feature, Link, Heading, Paragraph,
} from 'components'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  > * {
    width: calc(50% - 2rem);
    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Description = styled(Paragraph)`
  text-align: center;
  margin: 2rem;
  @media screen and (max-width: 640px) {
    margin: 1rem;
  }
`

const StyledFeature = styled(Feature)`
  margin: 1rem;
  @media screen and (max-width: 640px) {
    margin: 0;
  }
`

const FeatureList = ({ ...props }) => (
  <div {...props}>
    <StyledHeading>Our Work</StyledHeading>
    <Description>
    An interdisciplinary team of coders, analysts and user experience specialists dedicated to building enterprise applications and premium digital products that bring your ideas to life, delight your users and help you achieve your goals.
      <br />
      
    </Description>
    <Grid>
      <StyledFeature
        icon="livingmatrix"
        link="https://livingmatrix.com"
        title="Living Matrix"
        code="A cutting-edge analytical tool to serve functional doctors to get accurate depiction of patient's health based on symptoms, questions and cases."
      >
        
      </StyledFeature>
      <StyledFeature
        icon="freshwork"
        link="https://github.com/ReactTraining/react-router"
        title="Freshworks"
        code="As an official solution partner, we helped over hundreds of Freshworks customers, each with a unique and innovative solutions"
      >
      </StyledFeature>
      <StyledFeature
        icon="reach"
        link="https://webpack.github.io/"
        title="Reach"
        code="A truck service management app built to simplify the driver request process and create value for Service Providers with a clean and simple system."
      >
        
      </StyledFeature>
      <StyledFeature
        icon="showdown"
        link="https://facebook.github.io/jest"
        title="Showdown Live"
        code="An adrenaline pumping app with which you can play and create live streaming trivia game shows right on your phone."
      >

      </StyledFeature>
      <StyledFeature
        icon="beerboard"
        link="https://facebook.github.io/jest"
        title="Beerboard"
        code="A consolidated multidimensional app that is built to serve as a beer management solution integrating Bars, brewers and Beer lovers."
      >

      </StyledFeature>
    </Grid>
    
  </div>
)

export default FeatureList
