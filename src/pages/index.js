import React, { Fragment } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Fragment>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        
        <h1 className="hero__title"><span>Sheet</span>Able</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Get Started - 5min ⏱️
          </Link>
        </div>
      </div>

      
    </header>
    <div class="announcement_1xxL announcementDark_ApU5">
      <div class="announcementInner_wzcV">
        Join our&nbsp;
        <a href="https://discord.gg/QnFbxyPbRj" target="_blank" rel="noopener noreferrer">
          Discord Server
        </a>
        &nbsp;to get the newest updates!
        </div>
      </div>
    </Fragment>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome!`}
      description="SheetAble is a simple to use self-hosted music sheet organizer for your personal usage."
      image="/img/blog/SheetAbleRelease.jpg"
      >

      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
