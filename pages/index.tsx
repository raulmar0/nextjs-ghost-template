import Head from 'next/head'
import { BlogGallery } from '../components/BlogGallery'
import { Shell } from '../components/Shell'
import styles from '../styles/Home.module.css'
import { AppConfig } from '../utils/AppConfig'
import { getPosts } from '../utils/getPosts'

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts('title,slug,tag,published_at,html');
  return {
    props: { posts }
  }
}

const Home = ({ posts }) => (
  <div className={styles.container}>
    <Head>
      <title>{AppConfig.site_name}</title>
      <meta name="description" content="my online home" />
      <link rel="icon" href="/ocean.ico" />
    </Head>
    <Shell location="home">
      <BlogGallery posts={posts}/>  
    </Shell>
  </div>
)

export default Home