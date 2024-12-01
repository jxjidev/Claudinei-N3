import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('/api/reports', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setReports(data);
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>{report.title}</li>
        ))}
      </ul>
    </div>
  );
}
