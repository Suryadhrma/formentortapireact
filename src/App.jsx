  // App.jsx
/*  import React, { useState } from 'react';
  import Header from './components/Header';
  import Sidebar from './components/sidebar';
  import './styles/header.css'

  import LoginPage from './pages/LoginPage';
  import Register from './pages/RegisterPage';
  import DashboardPage from './pages/DashboardPage';
  import ClassDetail from './pages/ClassDetailPage'; // Halaman detail kelas

  import './styles/LoginPage.css';
  import './styles/RegisterPage.css';
  import './styles/DashboardPage.css';

  const App = () => {
      const [isSidebarActive, setSidebarActive] = useState(false);

      const toggleSidebar = () => {
          setSidebarActive(!isSidebarActive);
      };

      return (

          <div>
              <Header onMenuToggle={toggleSidebar} />
              <Sidebar isActive={isSidebarActive} onClose={toggleSidebar} />

              <div className="content">
                <DashboardPage/>
              </div>
          </div>
      );
  };

  export default App; */





/* // src/App.jsx
import React from 'react';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage';
import Registerdua from './pages/RegisterPageDua';
import PrivacyPolicy from './components/PrivacyPolicy';
import DashboardPage from './pages/DashboardPage';

import './styles/LoginPage.css';
import './styles/RegisterPage.css';
import './styles/RegisterPageDua.css';



const App = () => {
  return (
    <div className="App">
      <PrivacyPolicy />
    </div>
  );
};

export default App; */



import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/sidebar';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ClassDetailPage from './pages/ClassDetailPage'; // Halaman detail kelas

import './styles/header.css';
import './styles/LoginPage.css';
import './styles/RegisterPage.css';
import './styles/DashboardPage.css';

const App = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
    };

    return (
        <Router>
            {/* Wrapper untuk Header dan Sidebar */}
            <div>
                <Header onMenuToggle={toggleSidebar} />
                <Sidebar isActive={isSidebarActive} onClose={toggleSidebar} />

                {/* Area Konten Utama */}
                <div className="content">
                    <Routes>
                        {/* Rute untuk halaman Login */}
                        <Route path="/login" element={<LoginPage />} />

                        {/* Rute untuk halaman Register */}
                        <Route path="/register" element={<RegisterPage />} />

                        {/* Rute untuk Dashboard */}
                        <Route path="/" element={<DashboardPage />} />

                        {/* Rute untuk halaman Detail Kelas */}
                        <Route path="/classes/:id" element={<ClassDetailPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
