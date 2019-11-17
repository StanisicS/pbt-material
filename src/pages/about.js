import React from "react"
import { graphql } from "gatsby"
import {
  Box,
  //Icon,
  Grid,
  //Avatar,
  makeStyles,
  //Divider,
  Container,
} from "@material-ui/core"
import {
  Title,
  Text,
  DividedSection,
  TabPill,
} from "gatsby-theme-material-foundry"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Dashboard from "@material-ui/icons/People"
import Schedule from "@material-ui/icons/Business"
import List from "@material-ui/icons/List"
import Description from "@material-ui/icons/Description"
//import { AvatarCard, CompanyCard } from "../components/custom-cards"

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 100,
    height: 100,
    marginRight: "24px",
  },
})

function AboutPage({ data }) {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="About Palm Beach Transport" />
      <DividedSection
        black
        height="50vh"
        image={data.cover.childImageSharp.fixed.src}
        backgroundBlendMode="overlay"
        backgroundColor="#333333"
      >
        <Title variant="h2" align="center">
          About Palm Beach Transport
        </Title>
      </DividedSection>
      <Container maxWidth="md">
        <TabPill
          alignCenter
          color="primary"
          tabs={[
            {
              tabButton: "About Us",
              tabIcon: Description,
              tabContent: (
                <>
                  <Box p={6}>
                    <Title variant="h3" align="center" gutterBottom>
                      Palm Beach Transport LLC
                    </Title>
                    <Text variant="body1" gutterBottom>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <ul>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </li>
                      </ul>
                    </Text>
                  </Box>
                </>
              ),
            },
            {
              tabButton: "Team",
              tabIcon: Dashboard,
              tabContent: (
                <>
                  <Container maxWidth="md">
                    <Box p={6}>
                      <Title variant="h3" align="center" gutterBottom>
                        Team
                      </Title>
                      <Text variant="h5" align="center" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua..
                      </Text>
                    </Box>
                  </Container>
                  {/* <Grid container>
                    {data.people &&
                      data.people.nodes.map(person => (
                        <Grid item xs={6} md={4}>
                          <AvatarCard
                            img={person.avatarUrl}
                            name={person.fullname}
                            role={person.kabisrole}
                            logo={person.company.logoUrl}
                            orgRole={person.orgrole}
                          />
                        </Grid>
                      ))}
                  </Grid> */}
                </>
              ),
            },
            {
              tabButton: "Partners",
              tabIcon: List,
              tabContent: (
                <>
                  <Container maxWidth="md">
                    <Box p={6}>
                      <Title variant="h3" align="center" gutterBottom>
                        Partners
                      </Title>
                    </Box>
                  </Container>
                  <Grid container spacing={2}>
                    {data.partners &&
                      data.partners.nodes.map(company => (
                        <Grid item xs={6} md={4}>
                          {/* <CompanyCard
                            logo={company.logoUrl}
                            name={`${company.name}`}
                            website={company.website}
                          /> */}
                        </Grid>
                      ))}
                  </Grid>
                </>
              ),
            },
            // {
            //   tabButton: "Members",
            //   tabIcon: Schedule,
            //   tabContent: (
            //     <>
            //       <Container maxWidth="md">
            //         <Box p={6}>
            //           <Title variant="h3" align="center" gutterBottom>
            //             industry Members
            //           </Title>
            //         </Box>
            //       </Container>
            //       <Grid container spacing={2}>
            //         {data.industry &&
            //           data.industry.nodes.map(company => (
            //             <Grid item xs={6} md={4}>
            //               {/* <CompanyCard
            //                 logo={company.logoUrl}
            //                 name={`${company.name}`}
            //                 website={company.website}
            //               /> */}
            //             </Grid>
            //           ))}
            //       </Grid>
            //     </>
            //   ),
            // },
          ]}
        />
      </Container>
    </Layout>
  )
}
export const ItemPageQuery = graphql`
  query People {
    cover: file(relativePath: { eq: "load-main.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1920, height: 1080) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
