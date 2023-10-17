import Doughnut from "../../../components/Dashboard/Doughnut";
import Emptycell from "../../../components/Dashboard/Emptycell";
import Statisticaltable from "../../../components/Dashboard/Statisticaltable";
import Emptycelltwo from "../../../components/Dashboard/Emptycelltwo";
import AdminDashboard from '../index'

function index() {
  return (
    <AdminDashboard>
      <div className="bg-bgb">
      <div className="flex justify-end gap-gapp mb-5 ml-mlu">
        <Doughnut />
        <Statisticaltable />
      </div>
      <div className="flex justify-end gap-gapp">
        <Emptycell />
        <Emptycelltwo />
      </div>
    </div>
    </AdminDashboard>
  );
}

export default index;
