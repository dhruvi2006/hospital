import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DepartmentCard from '../components/DepartmentCard';

function AdminPage() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchDepartments();
    }
  }, [navigate]);

  // Fetch departments and other data for the admin
  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/hospital/departments', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setDepartments(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching departments', error);
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      {loading ? (
        <p>Loading departments...</p>
      ) : (
        <div className="departments-list">
          {departments.map((department) => (
            <DepartmentCard key={department._id} department={department} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminPage;
