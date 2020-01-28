import { NextPage } from 'next';
import Layout from '../components/layout/Layout'
import Search from '../components/search/Search';

const Home: NextPage = () => (
  <>
    <Layout>
      <Search/>
    </Layout>
    <style global jsx>{`
      html,
      body,
      body > div:first-child {
        height: 100%;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </>
);

export default Home;