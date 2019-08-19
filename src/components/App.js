import React, { useState } from 'react';
import Scanner from './Scanner';
import Result from './Result';

const App = () => {
    const [scanning, setScanning] = useState(false);
    const [results, setResults] = useState([]);

    return (
        <div>
            <button onClick={() => setScanning(!scanning) }>{scanning ? 'Stop' : 'Start'}</button>
            <ul className="results">
                {results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
            </ul>
            {scanning ? <Scanner onDetected={(result) => setResults([...results, result])} /> : null}
        </div>
    );
};

export default App;
