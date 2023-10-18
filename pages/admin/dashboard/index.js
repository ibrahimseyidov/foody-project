import Doughnut from "../../../components/Dashboard/Doughnut";
import Emptycell from "../../../components/Dashboard/Emptycell";
import Statisticaltable from "../../../components/Dashboard/Statisticaltable";
import Emptycelltwo from "../../../components/Dashboard/Emptycelltwo";
import AdminDashboard from '../index'
import Dashboard from "../../../components/Dashboard/Dashboard";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function index() {
  return (
    <>
      <AdminDashboard>
        <Dashboard />
      </AdminDashboard>
    </>
  );
}

export default index;

export const getServerSideProps = async ({ locale }) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});
