import Table from '../features/Table';
import { getAllTables } from '../../redux/tablesRedux';
import { useSelector } from 'react-redux';

const Home = ()=> {

  const tables = useSelector(getAllTables);

  return(
    <div>
      <h1>All tables</h1>
      {tables.map((table, index) => (
        <Table key={index} id={table.id} status={table.status}/>
      ))}
    </div>
  );
};

export default Home;