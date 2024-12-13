  // App.jsx
  import React, { useState } from 'react';
  import Header from './components/Header';
  import Sidebar from './components/sidebar';
  import './styles/header.css'

  import LoginPage from './pages/LoginPage';
  import Register from './pages/RegisterPage';
  import DashboardPage from './pages/DashboardPage';

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

  export default App; 





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