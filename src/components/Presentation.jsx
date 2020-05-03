const React = require('react');
const styles = require('./Presentation.module.css');
const githubIcon = require('../images/icons/github.svg');
const linkedinIcon = require('../images/icons/linkedin.svg');
const emailIcon = require('../images/icons/email.svg');
const blogIcon = require('../images/icons/blog.svg');

const items = [
    {
        name: 'Github',
        icon: githubIcon,
        target: '_blank',
        href: 'https://github.com/goerwin',
    },
    {
        name: 'LinkedIn',
        icon: linkedinIcon,
        target: '_blank',
        href: 'https://www.linkedin.com/in/erwin-gait%C3%A1n-ospino-61438453/',
    },
    {
        name: 'Email',
        icon: emailIcon,
        href: 'mailto:erwingaitano@gmail.com',
    },
    {
        name: 'Blog',
        icon: blogIcon,
        href: 'https://blog.goerwin.co',
    },
];

function Presentation() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                {'{'}
                <span className={styles.titleHl}>go</span>erwin{'}'}
            </p>
            <div className={styles.socialItems}>
                {items.map(({ href, icon, name, target }) => (
                    <a key={name} title={name} target={target} href={href}>
                        <img src={icon} alt={name} />
                    </a>
                ))}
            </div>
        </div>
    );
}

module.exports = Presentation;
