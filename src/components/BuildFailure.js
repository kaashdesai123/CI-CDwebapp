import React from 'react';

function BuildFailure({ buildId, project, timestamp, errorMessage }) {
  return (
    <div className="BuildFailure">
      <h2>{project} - Build ID: {buildId}</h2>
      <p>{timestamp}</p>
      <p>{errorMessage}</p>
    </div>
  );
}

export default BuildFailure;
