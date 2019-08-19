import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from '@ericblade/quagga2';

const Scanner = ({ onDetected }) => {
    useLayoutEffect(() => {
        Quagga.init({
            inputStream: {
                type: 'LiveStream',
                constraints: {
                    width: 640,
                    height: 480,
                    facing: 'environment' // or user
                },
            },
            locator: {
                patchSize: 'medium',
                halfSample: true,
            },
            numOfWorkers: 2,
            decoder: {
                readers: [ 'code_128_reader' ],
            },
            locate: true,
        }, (err) => {
            if (err) {
                return console.log('Error starting Quagga:', err);
            }
            Quagga.start();
        });
        Quagga.onDetected(onDetected);
        return () => {
            Quagga.offDetected(onDetected);
            Quagga.stop();
        };
    }, []);
    return (
        <div id="interactive" className="viewport" />
    )
}

Scanner.propTypes = {
    onDetected: PropTypes.func.isRequired
};

export default Scanner;
