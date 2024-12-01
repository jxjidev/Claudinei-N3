export default function ReportForm({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ title, content });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Conteúdo" onChange={(e) => setContent(e.target.value)}></textarea>
        <button type="submit">Criar Relatório</button>
      </form>
    );
  }
  