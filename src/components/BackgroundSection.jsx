import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { DividedSection, Title, Text, Button, Container, Box } from "gatsby-theme-material-foundry"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
	<StaticQuery
		query={graphql`
			query {
				desktop: file(relativePath: { eq: "cover-main.jpg" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={data => {
			// Set ImageData.
			const imageData = data.desktop.childImageSharp.fluid
			return (
				<BackgroundImage
					Tag='section'
					className={className}
					fluid={imageData}
					backgroundColor={`#040e18`}
				>
					<Container maxWidth='sm' align='center'>
						<Title variant='h3' align='center'>
							PALM BEACH TRANSPORT LLC
						</Title>
						<Text variant='h5' align='center'>
							Load Board to Find Truck Loads and Freight
						</Text>
						<Box m={2}>
							<Button color='primary' to='/SignUp'>
								Register
							</Button>
						</Box>
					</Container>
				</BackgroundImage>
			)
		}}
	/>
)

const StyledBackgroundSection = styled(BackgroundSection)`
	width: 100%;
	background-position: bottom center;
	background-repeat: repeat-y;
	background-size: cover;
`

export default StyledBackgroundSection
