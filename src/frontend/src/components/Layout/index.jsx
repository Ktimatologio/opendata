import React from "react";
import "../../i18n";
import { useTranslation } from 'react-i18next';
import Helmet from "react-helmet";
import { Link } from '@reach/router';
import { Header, NavBar, Footer } from "@civicactions/data-catalog-components";
import config from "../../assets/config.json";
import links from "../../assets/menu.json";
import links_en from "../../assets/menu_en.json";
import CookieConsent from "react-cookie-consent";

function AppTranslate() {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="AppTranslate">
      <header className="App-header lang_switch">
        <button className="btn" onClick={() => changeLanguage('el')}>ελ</button>
        <button className="btn" onClick={() => changeLanguage('en')}>en</button>
      </header>
    </div>
  );
}

function Sitename() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('site_name')}</span>
  );
}

function Siteslogan() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('site_slogan')}</span>
  );
}

function Labelhome() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('menu_home')}</span>
  );
}
function Labeldatasets() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('menu_datasets')}</span>
  );
}
function Labelpublishers() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('menu_publishers')}</span>
  );
}
function Labelabout() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('menu_about')}</span>
  );
}
function Label_opendata() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('menu_opendata')}</span>
  );
}

function Labelterms() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('footer_terms')}</span>
  );
}
function Labelprivacy() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('footer_privacy')}</span>
  );
}
function Labelcookies() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('footer_cookies')}</span>
  );
}

function Footer_name() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('footer_name')}</span>
  );
}
function Footer_addr() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('footer_addr')}</span>
  );
}
function Footer_crwith() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('footer_crwith')}</span>
  );
}

function Footer_opens() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('footer_opens')}</span>
  );
}

function Cookies() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('cookies')}</span>
  );
}
function Cookiebtn() {
  const { t, i18n } = useTranslation();
  return (
    <span>{t('cookie_btn')}</span>
  );
}

const links_ = {
  "main": [
    {
      "label": <Labelhome/>,
      "url": "/",
      "target": "_top"
    },
    {
      "label": <Labeldatasets/>,
      "url": "/search",
      "target": "_top"
    },
    {
      "label": <Labelabout/>,
      "url": "/about",
      "target": "_top"
    },
    {
      "label": "API",
      "url": "/api",
      "target": "_top"
    },
    {
      "label": <Label_opendata/>,
      "url": "/opendata",
      "target": "_top"
    }
  ]};

  const links_footer = {
    "footer1": [
      {
        "label": <Labeldatasets/>,
        "url": "/search",
        "target": "_blank"
      },
      {
        "label": <Labelpublishers/>,
        "url": "/publishers",
        "target": "_blank"
      },
      {
        "label": <Labelabout/>,
        "url": "/about"
      },
      {
        "label": "API",
        "url": "/api",
        "target": "_blank"
      }
    ],
    "footer2": [
      {
        "label": <Labelterms/>,
        "url": "https://www.ktimatologio.gr/el/page/oroi-hrisis"
      },
      {
        "label": <Labelprivacy/>,
        "url": "https://www.ktimatologio.gr/privacy-policy",
        "target": "_blank"
      },
      {
        "label": <Labelcookies/>,
        "url": "https://www.ktimatologio.gr/cookies",
        "target": "_blank"
      }
    ]
  };

  const footer_name = <Footer_name/>;
  const footer_addr = <Footer_addr/>;
  const footer_crwith = <Footer_crwith/>;
  const footer_opens = <Footer_opens/>;

const Layout = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="App">
      <Helmet
        title={`${title} - Ελληνικό Κτηματολόγιο`}
        description={description}
        generator="DKAN 2"
        defer={false}
        htmlAttributes={{
          "lang": "en"
        }}
      />
      <Header site={<Sitename/>} slogan={<Siteslogan/>} customClasses={config.container} />
      <AppTranslate/>
      <NavBar
        navItems={links_.main.map(item => (
          <Link activeClassName="active" to={item.url}>
            {item.label}
          </Link>
        ))}
        customClasses={config.container}
      />
      <main>
        {children}
      </main>
      <Footer footer_name={footer_name} footer_addr={footer_addr} footer_crwith={footer_crwith} footer_opens={footer_opens} links={links_footer} customClasses={config.container} />
      <CookieConsent
        location="bottom"
        buttonText={<Cookiebtn/>}
        cookieName="cookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
        expires={150}
      >
        <Cookies/>{" "}
      </CookieConsent>
    </div>
  );
};

export default Layout;
