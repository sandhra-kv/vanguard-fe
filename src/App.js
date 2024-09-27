import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import ProfilePage from './pages/ProflePage';
import TeamPerformance from './pages/TeamPerformance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="team-performance" element={<TeamPerformance/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
