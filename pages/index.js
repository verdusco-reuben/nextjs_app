import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Blog's home page</h1>
        <br></br>
        
        Read{' '}
          <Link href="/posts/first-post">
            <a>this page</a>
          </Link>
        {' '}to see my posts.
        <p>
          Find more stuff like this on my {' '}
          <a href="https://github.com/verdusco-reuben">GitHub page</a>.
        </p>
      </section>
      


    </Layout>
  )
}






          






