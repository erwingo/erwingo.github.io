const React = require('react');
const { Helmet } = require('react-helmet');
const favicon = require('../images/favicon-32x32.png');
require('./App.css');

function App({ children }) {
    const googleAdsClientId = 'ca-pub-3590698513623239';
    const googleTrackingId = 'UA-102237991-1';

    return (
        <>
            <Helmet titleTemplate="%s | GOErwin">
                <link href={favicon} rel="shortcut icon" />
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
                />
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${googleTrackingId}');
                    `}
                </script>
                <script
                    data-ad-client={googleAdsClientId}
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                />
                <title>GO Erwin</title>
            </Helmet>
            {children}
        </>
    );
}

module.exports = App;
