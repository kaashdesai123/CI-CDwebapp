import React, { useState, useEffect } from 'react';
import { getBuildFailures } from '../api';
import BuildFailure from './BuildFailure';
import SearchBar from './SearchBar';

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getBuildFailures()
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredData = data.filter(item =>
    item.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>CI/CD Build Failures</h1>
      {error && <div>Error: {error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {filteredData.map(item => (
            <BuildFailure key={item.buildId} {...item} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
