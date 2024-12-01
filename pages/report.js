import ReportForm from '../components/ReportForm';

export default function ReportPage() {
  const handleSubmit = async (report) => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/reports', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(report),
    });
    if (res.ok) alert('Relatório criado com sucesso!');
  };

  return (
    <div>
      <h1>Criar Relatório</h1>
      <ReportForm onSubmit={handleSubmit} />
    </div>
  );
}
