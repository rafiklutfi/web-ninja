import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>web developer based in Batam.</p>
          <Link className={btn} to="/projects">
            Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="Site Banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}
