import { NextPage } from 'next';
import Layout from '../components/layout/Layout'
import Search from '../components/search/Search';

const Home: NextPage = () => (
  <Layout>
    <Search/>
  </Layout>
);

export default Home;