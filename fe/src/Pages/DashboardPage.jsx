import { useQuery } from '@tanstack/react-query';

import { getUsers } from '../api/api.js';
import { useEffect, useState } from 'react';
import { getPress, getPressReceived } from '../feSocket/feSocket.js';

export default function DashboardPage() {
  const { isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUsers,
  });

  const [text, textSet] = useState('');

  useEffect(() => {
    getPressReceived();
    //cleaning
    return () => {};
  }, []);

  if (isLoading) return <p>Loading...</p>;

  function handleChange(e) {
    textSet(e.target.value);
    return;
  }

  function sendMessage(e) {
    e.preventDefault();
    getPress(text);
    textSet('');
    return;
  }

  return (
    <div>
      <p>Dashboard</p>
      <input
        type="text"
        value={text}
        placeholder="...."
        onChange={handleChange}
      />
      <button className="btn" onClick={sendMessage}>
        press
      </button>
      <span>{text}</span>
    </div>
  );
}
