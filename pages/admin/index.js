import Head from "next/head";
import Layout from '../../components/common/Layout'
import { store } from '../../redux/app/store'
import { Provider } from 'react-redux'

const AdminDashboard = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
