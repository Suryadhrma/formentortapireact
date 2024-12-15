/* // DashboardContent.jsx
import React, { useEffect, useState } from 'react';
import '../styles/DashboardPage.css';
import axios from 'axios';*/

// src/pages/DashboardContent.jsx
import React, { useEffect, useState } from 'react';
import '../styles/MyCoursePage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

    const MyCoursePage = () => {  
        const [courses, setCourses] = useState([]);

        useEffect(() => {
          // Fetch data from backend
          fetch('http://localhost:5000/api/courses')
            .then((response) => response.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error('Error fetching data:', error));
        }, []);
      
        return (
          <div className="app-container">
            <h1 className="title">My Course</h1>
            <div className="course-container">
              {courses.map((course) => (
                <div key={course.id} className="course-card">
                  <img src={course.imageUrl} alt={course.title} className="course-image" />
                  <h2 className="course-title">{course.title}</h2>
                  <p className="course-description">{course.description}</p>
                  <div className="course-stats">
                    <p>👥 {course.students} Students</p>
                    <p>⭐ {course.rating} ({course.reviews} Reviews)</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

    export default MyCoursePage;
