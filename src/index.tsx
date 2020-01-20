import * as React from "react";
import * as ReactDom from "react-dom";

import "./_css/index.scss";
import "./_fonts/icons/font";

const items = [
  {
    name: "Github",
    icon: "is-github",
    target: "blank",
    href: "https://github.com/goerwin"
  },
  {
    name: "LinkedIn",
    icon: "is-linkedin",
    target: "blank",
    href: "https://www.linkedin.com/in/erwin-gait%C3%A1n-ospino-61438453/"
  },
  {
    name: "Email",
    icon: "is-email-button",
    href: "mailto:erwingaitano@gmail.com"
  }
];

ReactDom.render(
  <div className="App">
    <p className="App__title">
      {"{"}
      <span className="App__title__hl">go</span>erwin{"}"}
    </p>
    <div className="App__socialitems">
      {items.map(({ href, icon, name, target }) => (
        <a
          key={name}
          className="App__socialitems__item"
          onClick={() => (window as any).ga("send", "event", "link", "click", name)}
          title={name}
          target={target}
          href={href}
        >
          <span className={`icon ${icon}`} />
        </a>
      ))}
    </div>
  </div>,
  document.getElementById("app")
);
