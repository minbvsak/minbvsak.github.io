import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { translate } from "react-i18next"

const IndexPage = () => (
  const { t } = this.props
  <Layout>
    <SEO title="Hjem" />
    <h1>MIN BV-SAK</h1>
    <p>{t("landing page title")}</p>        
  </Layout>
)

export default translate("messages")(IndexPage)
