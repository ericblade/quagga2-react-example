import React from 'react';
import PropTypes from 'prop-types';

class Result extends React.Component {
    render() {
        const result = this.props.result;

        if (!result) {
            return null;
        }
        return (
            <li>
            {result.codeResult.code} [{result.codeResult.format}]
            </li>
        );
    }
}

Result.propTypes = {
    result: PropTypes.object
};

export default Result;
