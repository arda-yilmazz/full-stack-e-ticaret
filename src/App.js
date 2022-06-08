import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import Header from "components/Header";
import { Wrapper } from 'contexts/MainContext';
import { routes } from 'routes';

function App() {
  return (
    <>
      <Router>
        <Wrapper>
          <Header />

          <Routes>
            {routes.map(route => <Route path={route.path} element={route.auth && !localStorage.getItem('_user') ? <Navigate to="/" /> : <route.component />} key={route.path} />)}
          </Routes>

        </Wrapper>
      </Router>
    </>
  );
}

export default App;
