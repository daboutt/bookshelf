import { Route, Routes } from 'react-router-dom';
import RootLayout from './routes/RootLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
