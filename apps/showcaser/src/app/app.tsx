import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages';
export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
