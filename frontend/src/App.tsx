import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './assets/trivaah-logo.svg';
import HeaderAnnouncement from './component/HeaderAnnouncement';
import { Navbar, NavButton } from './component/Navbar';
import CategoriesBar from './component/CategoriesBar';


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
    <>
    <HeaderAnnouncement />
    <Navbar />
    <div>
      <CategoriesBar/>
      </div>
    </>
  );
}

export default App;
