import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import TableForm from './components/features/TableForm';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTable } from './redux/tablesRedux';
import { fetchTablesStatus } from './redux/tablesStatusRedux';
import EditTable from './components/features/EditTable';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTable()), [dispatch])
  useEffect(() => dispatch(fetchTablesStatus()), [dispatch])

  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tableform" element={<TableForm />} />
          <Route path="/edittable/:id" element={<EditTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
};

export default App;