import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProflePage';
import TeamPerformance from './pages/TeamPerformance';
import Learning from './pages/Learning';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="team-performance" element={<TeamPerformance/>} />
          <Route path="learning" element={<Learning/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
