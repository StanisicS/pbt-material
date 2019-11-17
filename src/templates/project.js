import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {
  DividedSection,
  Badge,
  Title,
  Text,
} from "gatsby-theme-material-foundry"
import EventList from "../components/event-list"
import {
  Container,
  Card,
  Grid,
  Box,
  Hidden,
  makeStyles,
} from "@material-ui/core"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles({
  mainRaised: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    margin: "-15vh 30px 40px",
    padding: "20px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
})

function GenerateTags({ tags }) {
  const tagArray = tags.split(",")
  return tagArray.map(tag => <Badge key={tag}>{tag}</Badge>)
}

function EventTemplate(props) {
  const {
    description,
    category,
    projecttitle,
    nameofprojectlead,
    involvedorganizations,
    projectPerson,
    tags,
    coverUrl,
    startdate,
    enddate,
  } = props.data.googleSheetProjectsRow
  const classes = useStyles()
  return (
    <Layout>
      <DividedSection black height="70vh">
        <Container maxWidth="md">
          <Text variant="subheader">
            <Badge color="primary">{category}</Badge>
            {tags && <GenerateTags tags={tags} />}
          </Text>
          <Title variant="h2" gutterBottom>
            {projecttitle}
          </Title>
          <Text variant="h5">
            {startdate} - {enddate}
          </Text>
        </Container>
      </DividedSection>

      <Container maxWidth="lg">
        <div className={classes.mainRaised}>
          <Box p={4}>
            {coverUrl && (
              <img
                src={coverUrl}
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  objectPosition: "100% 0",
                }}
              />
            )}
          </Box>
          <Grid container>
            <Grid item md={8}>
              <Box pr={4}>
                <Divider />
                <Box pt={2}>
                  <Text variant="body1" fontSize="24px">
                    {description}
                  </Text>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Hidden mdDown>
                <Card align="center">
                  <Box p={2}>
                    <Title align="center">Project Info</Title>

                    <EventList
                      category={category}
                      date={startdate}
                      person={nameofprojectlead}
                      organization={involvedorganizations}
                      projectPerson={projectPerson}
                    />
                  </Box>
                </Card>
              </Hidden>
              <Hidden mdUp>
                <Box p={2} align="center">
                  <Title align="center">Project Info</Title>

                  <EventList
                    horizontal
                    category={category}
                    date={startdate}
                    person={nameofprojectlead}
                    organization={involvedorganizations}
                    projectPerson={projectPerson}
                  />
                </Box>
              </Hidden>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Layout>
  )
}

export default EventTemplate

export const ItemPageQuery = graphql`
  query ItemDetails($itemId: String!) {
    googleSheetProjectsRow(id: { eq: $itemId }) {
      description
      category
      projecttitle
      coverUrl
      projectPerson {
        avatarUrl
        fullname
      }
      nameofprojectlead
      involvedorganizations
      tags
      startdate
      enddate
    }
  }
`
