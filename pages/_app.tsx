import Layout from '../components/layout';
import '../css/tailwind.css';

const AppComponent = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default AppComponent;
