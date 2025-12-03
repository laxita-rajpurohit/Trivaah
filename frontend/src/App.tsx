import { useEffect, useState } from 'react';
import axios from 'axios';

interface Saree {
  id: number;
  name: string;
  price: number;
  category: string;
}

function App() {
  const [sarees, setSarees] = useState<Saree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Saree[]>('http://localhost:3001/api/sarees')
      .then((res) => {
        setSarees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load sarees');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Loading Trivaah sarees...</div>;
  if (error) return <div style={{ padding: 24, color: 'red' }}>{error}</div>;

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Trivaah Sarees</h1>
      <p>Beautiful sarees curated just for you.</p>
      <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
        {sarees.map((saree) => (
          <div
            key={saree.id}
            style={{
              border: '1px solid #eee',
              borderRadius: 8,
              padding: 16,
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
            }}
          >
            <h3>{saree.name}</h3>
            <p style={{ margin: '4px 0', color: '#666' }}>{saree.category}</p>
            <p style={{ margin: '8px 0', fontWeight: 600 }}>₹{saree.price}</p>
            <button
              style={{
                marginTop: 8,
                padding: '8px 12px',
                backgroundColor: '#db2777',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
