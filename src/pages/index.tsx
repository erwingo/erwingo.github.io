import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import Presentation from '../components/Presentation';

export default function Index() {
  return (
    <App>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Presentation />
    </App>
  );
}
