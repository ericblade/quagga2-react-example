import React from 'react';

export default React.createClass({
    propTypes: {
        result: React.PropTypes.object
    },
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
});
