import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import GriderApp from '../pageGriderElements/components/App/App';

export default function Grider() {
    return (
        <App>
            <Helmet>
                <title>Grider</title>
            </Helmet>
            <GriderApp />
        </App>
    );
}
