import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Remote Traffic Lights Control" />
    <h1>Traffic Lights</h1>
    <button className ="button3">Red</button>
    <p></p>
    <button className ="button1">Green</button>
    <p></p>
    <button className ="button2">Blue</button>
    
  </Layout>
)

export default IndexPage
