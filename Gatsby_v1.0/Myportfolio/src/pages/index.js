import * as React from "react"
//import { Link } from "gatsby"
import { graphql } from 'gatsby'
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import Infoblock from '../components/Reuseable/Infoblock'
import Dualinfoblock from '../components/Reuseable/Dualinfoblock'
import Coursecart from '../components/Cart/Coursecart'

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="Learncodeonline.in"
      heroclass="hero-background"
     />
     <Infoblock heading = "About Us"/>
     <Coursecart  courses={data.courses}/>
     <Dualinfoblock heading="Our Team"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
    edges {
      node {
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
} 
`
export default IndexPage
