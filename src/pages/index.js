import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Remote Traffic Lights Control" />
    <h1>Traffic Lights</h1>
    <button class ="button button1">Green</button>
    <button class ="button button2">Green</button>
  </Layout>
)

export default IndexPage
