import React from 'react';
import Scanner from './Scanner';
import Result from './Result';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scanning: false,
            results: [],
        };
        this._scan = this._scan.bind(this);
        this._onDetected = this._onDetected.bind(this);
    }
    render() {
        return (
            <div>
                <button onClick={this._scan}>{this.state.scanning ? 'Stop' : 'Start'}</button>
                <ul className="results">
                    {this.state.results.map((result) => (<Result key={result.codeResult.code} result={result} />))}
                </ul>
                {this.state.scanning ? <Scanner onDetected={this._onDetected}/> : null}
            </div>
        );
    }

    _scan() {
        this.setState({scanning: !this.state.scanning});
    }

    _onDetected(result) {
        this.setState({results: this.state.results.concat([result])});
    }
}

export default App;
