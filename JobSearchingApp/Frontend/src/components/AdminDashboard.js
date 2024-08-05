import React, { useState } from 'react';
import '../AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Job Seeker' },
        // Add more users as needed
    ]);

    const handleEdit = (userId) => {
        const user = users.find(user => user.id === userId);
        alert(`Edit user: ${user.name}`);
        // Implement your edit logic here
    };

    const handleDelete = (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter(user => user.id !== userId));
            alert('User deleted successfully');
        }
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
            </header>
            <nav className="admin-nav">
                <ul>
                    <li><a href="#manage-users">Manage Users</a></li>
                    <li><a href="#manage-jobs">Manage Jobs</a></li>
                    <li><a href="#view-reports">View Reports</a></li>
                </ul>
            </nav>
            <main className="admin-main">
                <section id="manage-users" className="admin-section">
                    <h2>Manage Users</h2>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button onClick={() => handleEdit(user.id)}>Edit</button>
                                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <section id="manage-jobs" className="admin-section">
                    <h2>Manage Jobs</h2>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Job ID</th>
                                <th>Title</th>
                                <th>Company</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Software Engineer</td>
                                <td>TechCorp</td>
                                <td>Open</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            {/* Add more job rows as needed */}
                        </tbody>
                    </table>
                </section>
                <section id="view-reports" className="admin-section">
                    <h2>View Reports</h2>
                    <div className="reports-container">
                        <div className="report">
                            <h3>User Statistics</h3>
                            <p>Number of users: 150</p>
                            <p>Active users: 120</p>
                            {/* Add more report details as needed */}
                        </div>
                        <div className="report">
                            <h3>Job Statistics</h3>
                            <p>Total jobs posted: 50</p>
                            <p>Open positions: 30</p>
                            {/* Add more report details as needed */}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminDashboard;
