import Head from "next/head";
import Layout from '../../components/common/Layout'
import { store } from '../../redux/app/store'
import { Provider } from 'react-redux'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AdminDashboard = ({ children }) => {

  return (
    <div>
      <Head>
        <title>Foody | Admin</title>
        <meta name="description" content="Foody" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Layout>
          {children}
        </Layout>
      </Provider >
    </div >
  );
};

export default AdminDashboard;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }

});
