import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import Img from "gatsby-image"
import SEO from "../components/seo"
import {
  Button,
  DividedSection,
  Title,
  Text,
} from "gatsby-theme-material-foundry"
import { slugify } from "../utils"
import { Grid, Divider, Container, Box } from "@material-ui/core"
import EventList, { GenerateTags } from "../components/event-list"

function EventsPage(props) {
  // const projects = props.data.allGoogleSheetProjectsRow.nodes
  const img = props.data.cover.childImageSharp.fixed.src
  return (
    <Layout>
      <DividedSection
        black
        image={img}
        height="100vh"
        backgroundBlendMode="overlay"
        backgroundColor="#333333"
      >
        {/* <Title variant="h2" align="center">
          Find Available Loads
        </Title> */}
        <Container maxWidth="md">
          <Box justifyContent="flex-end" mr={8}>
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTmwx_IJJmQIYzzMO30v6Cs9XAST4hOOrCzsprcx6d0oV6mIZm4XSUn5JDJ2iXvLQQucKoQ5fMqdAw4/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
              width="1070"
              height="300"
            />
          </Box>
        </Container>
      </DividedSection>
      {/* <Container maxWidth="md">
        {projects.map(e => (
          <React.Fragment>
            <Box mb={4} mt={4}>
              <Grid container key={e.id} spacing={3}>
                <Grid item xs="4">
                  {e.coverUrl ? (
                    <img
                      src={e.coverUrl}
                      style={{
                        width: "100%",
                        maxHeight: "130px",
                        objectFit: "cover",
                        objectPosition: "100% 0",
                      }}
                    />
                  ) : (
                    <Img fluid={props.data.project.childImageSharp.fluid} />
                  )}
                </Grid>
                <Grid item xs="8">
                  <Text variant="subheader">
                    {e.tags && <GenerateTags tags={e.tags} color="primary" />}
                  </Text>
                  <div>
                    <Title
                      component={Link}
                      to={`/project/${slugify(e.projecttitle)}`}
                      variant="h4"
                      color="inherit"
                    >
                      {e.projecttitle}
                    </Title>
                  </div>
                  <EventList
                    horizontal
                    category={e.category}
                    date={e.startdate}
                    person={e.nameofprojectlead}
                    organization={e.involvedorganizations}
                  />
                </Grid>
              </Grid>
            </Box>
            <Divider />
          </React.Fragment>
        ))}
      </Container> */}
    </Layout>
  )
}

export const ItemPageQuery = graphql`
  query Projects {
    cover: file(relativePath: { eq: "load-main.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1920, height: 1080) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    project: file(relativePath: { eq: "project.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default EventsPage
