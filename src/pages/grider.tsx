import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import GriderApp from '../pageGriderElements/_components/App/App';
import favicon from '../pageGriderElements/_media/logo.png';

export default function Grider() {
  return (
    <App>
      <Helmet>
        <link href={favicon} rel="shortcut icon" />
        <title>Grider</title>
      </Helmet>
      <GriderApp />
    </App>
  );
}
