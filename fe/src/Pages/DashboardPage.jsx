import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getPress } from '../feSocket/feSocket.js';
import { getUsers } from '../api/api.js';

export default function DashboardPage() {
  const [text, textSet] = useState('');
  const [isLoading, isLoadingSet] = useState(false);
  const [error, errorSet] = useState([]);
  const [data, dataSet] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        isLoadingSet(true);
        const res = await getUsers();
        dataSet(res.data.users);
      } catch (error) {
        console.log(error);
        errorSet(error.message);
      } finally {
        isLoadingSet(false);
      }
    }
    fetchData();
    //cleaning
    return () => {};
  }, []);

  function handleChange(e) {
    textSet(e.target.value);
    return;
  }

  function sendMessage(e) {
    e.preventDefault();
    getPress(text);
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
      <span>
        {data.map((data, i) => (
          <Mapper key={i} data={data}></Mapper>
        ))}
      </span>
    </div>
  );
}

function Mapper({ firstName }) {
  console.log(firstName);
  return <div></div>;
}

Mapper.propTypes = {
  firstName: PropTypes.any,
};
