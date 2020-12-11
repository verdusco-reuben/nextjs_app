import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import util from '../../styles/utils.module.css'
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <hr></hr>
      <h2><u>First Post</u></h2>
      <p>Here's some first post text</p>
      <hr className={util.half_hr}></hr>
      <h2><u>Second Post</u></h2>
      <p>Here's some second post text</p>
      <hr className={util.half_hr}></hr>
      <h2><u>Third Post</u></h2>
      <p>Here's some third post text</p>
      
    </Layout>
  )
}