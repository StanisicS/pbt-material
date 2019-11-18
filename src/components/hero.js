import React from "react"

export default ({ data }) => (
	<section>
		<Img
			fluid={data.file.childImageSharp.fluid}
			objectFit='cover'
			objectPosition='50% 50%'
			alt='This is a picture of my face.'
		/>
		<div>
			<h1>Hi, I like websites.</h1>
			<p>Sometimes I make them.</p>
		</div>
	</section>
)

export const query = graphql`
	query {
		fileName: file(relativePath: { eq: "images/heroImage.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 400, maxHeight: 250) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
