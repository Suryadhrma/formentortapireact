  // App.jsx
  import React, { useState } from 'react';
  import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
  import Header from './components/Header';
  import Sidebar from './components/sidebar';
  import './styles/header.css'

  import LoginPage from './pages/LoginPage';
  import Register from './pages/RegisterPage';
  import DashboardPage from './pages/DashboardPage';
  import MyCoursePage from './pages/MyCoursePage';
  import ClassDetail from './pages/ClassDetailPage'; // Halaman detail kelas
  import CreateProject from './pages/CreateProject';
  import MateriPembelajaran from './pages/MateriPembelajaran';
  import ValidationNotif from './components/ValidationNotif';

  import './styles/LoginPage.css';
  import './styles/RegisterPage.css';
  import './styles/DashboardPage.css';
  import './styles/MyCoursePage.css';
  import './styles/CreateProject.css';
  import './styles/MateriPembelajaran.css';
  import './styles/ValidationNotif.css';

  const App = () => {
    const [isSidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive(!isSidebarActive);
    };

    return (
        <BrowserRouter>
            {/* Header tetap ditampilkan */}
            <Header />

            {/* Sidebar (opsional) */}
            {isSidebarActive && <Sidebar toggleSidebar={toggleSidebar} />}

            {/* Routes untuk halaman */}
            <Routes>
                <Route path="/createproj" element={<CreateProject />} />
                <Route path="/another-page" element={<MateriPembelajaran />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/valid" element={<ValidationNotif />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;





