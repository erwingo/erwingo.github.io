const React = require('react');
const { Helmet } = require('react-helmet');
const App = require('../components/App');
const Presentation = require('../components/Presentation');

function Index() {
    return (
        <App>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Presentation />
        </App>
    );
}

module.exports = Index;
