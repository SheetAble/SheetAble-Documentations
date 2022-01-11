import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_Setup.svg').default,
    description: (
      <>
        SheetAble is easy to install on all of your systems natively or with Docker.
      </>
    ),
  },
  {
    title: 'Work in progress',
    Svg: require('../../static/img/undraw_work_in_progress.svg').default,
    description: (
      <>
        SheetAble is under constant developing, trying to implement more and more features down the road. 
      </>
    ),
  },
  {
    title: 'Free basic usage',
    Svg: require('../../static/img/undraw_Savings.svg').default,
    description: (
      <>
        The basic version of SheetAble is and will always stay free to all music enthusiast out there.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
