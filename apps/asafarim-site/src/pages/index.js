import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import '../css/custom.css';
import { CookiesProvider } from 'react-cookie';
import CookieConsent from "react-cookie-consent";

const features = [
  {
    title: 'Content Headlines',
    imageUrl: '/img/coding.svg',
    description: (
      <>
        <a href="/docs/intro">Topics</a> section is where the main concepts and codes are presented.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: '/img/wm.svg',
    description: (
      <>
        Blog section lets you focus on the goals and the route to gain progress in coding area.
      </>
    ),
  },
  {
    title: 'Build with your own hands',
    imageUrl: '/img/didit.svg',
    description: (
      <>
        “You don’t learn to walk by following rules. You learn by doing, and by falling over.”
        —Richard Branson
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <CookiesProvider>

      <Layout
        title={`${siteConfig.title}`}
        description="ASAFARIM: Scientific Applications"
      >
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted
                )}
                to={useBaseUrl('docs/')}
              >
                Headlines
              </Link>
            </div>
          </div>
        </header>
        <main>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

      </Layout>
      <CookieConsent
        //debug={true}
        location='bottom'
        buttonText='I understand'
        cookieName='<cookieName>'
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: '#4e503b', fontSize: '14px' }}
        expires={150}>
        If we use cookies, it's only for offering you a better browsing experience (find out more on
        <Link
          className="link-button"
          to="/cookies_en">
          &nbsp;how we use cookies 🍪
        </Link> and
        <Link
          className="link-button"
          to="/eula">
          &nbsp;End-User License Agreement 📑
        </Link> ).
      </CookieConsent>
    </CookiesProvider>

  );
}

export default Home;
