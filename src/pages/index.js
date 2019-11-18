import React from "react"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
import {
  DividedSection,
  Title,
  Text,
  Button,
} from "gatsby-theme-material-foundry"
import { Container, Box } from "@material-ui/core"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundSection"

function IndexPage(props) {
  // const img = props.data.cover.childImageSharp.fixed.src

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection />
      {/* <DividedSection
        black
        image={img}
        height="100vh"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        backgroundBlendMode="overlay"
        backgroundColor="#333333"
      > */}
      {/* <Container maxWidth="sm" align="center">
          <Title variant="h3" align="center">
            PALM BEACH TRANSPORT LLC
          </Title>
          <Text variant="h5" align="center">
            Load Board to Find Truck Loads and Freight
          </Text>
          <Box m={2}>
            <Button color="primary" to="/SignUp">
              Register
            </Button>
          </Box>
        </Container>
      </DividedSection> */}
      {/* <DividedSection>
        {props.data.partners &&
          props.data.partners.nodes.map(company => (
            <img src={company.logoUrl} width="100px" />
          ))}
      </DividedSection> */}
      <DividedSection height="80vh">
        {/* <Img fluid={props.data.kickoff.childImageSharp.fluid} /> */}
        <Container>
          <Title variant="h4" align="left">
            Lorem Ipsum
          </Title>
          <Text variant="body1" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Container>
      </DividedSection>
      {/* <DividedSection height="50vh" info>
        <Box>
          <Title variant="h5" align="center">
            Education
          </Title>
          <Text variant="body1">
            Strenthen the educational offerings within sustainable aquaculture
            in the bergen region
          </Text>
        </Box>
        <Box>
          <Title variant="h5">Mobility</Title>
          <Text variant="body1">
            facilitate increased mobility for students and researcher between
            RnD institutions
          </Text>
        </Box>
        <Box>
          <Title variant="h5">Knowledge</Title>
          <Text variant="body1">
            The KABIS project aim to focus and strengthen
          </Text>
        </Box>
        <Box>
          <Title variant="h5">Innovations</Title>
          <Text variant="body1">
            The KABIS project aim to focus and strengthen
          </Text>
        </Box>
      </DividedSection> */}
      <Container maxWidth="md">
        <Box pt={8}>
          <Text align="center" variant="h4">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt."
          </Text>
        </Box>
        <Box justifyContent="flex-end" mr={8}>
          {/* <AvatarCard
            horizontal
            img={props.data.quote.avatarUrl}
            name={props.data.quote.fullname}
            role={props.data.quote.kabisrole}
            logo={props.data.quote.company.logoUrl}
            orgRole={props.data.quote.orgrole}
          /> */}
        </Box>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    cover: file(relativePath: { eq: "cover-main.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1920, height: 1080) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    kickoff: file(relativePath: { eq: "pbt-kickoff.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
