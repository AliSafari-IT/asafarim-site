import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Content Headlines',
    Svg: require('../../static/img/coding.svg').default,
    description: (
      <>
        <a href="/docs/intro">Topics</a> section is where the main concepts and codes are presented. 
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/wm.svg').default,
    description: (
      <>
        Blog section lets you focus on the goals and the route to gain progress in coding area.
      </>
    ),
  },
  {
    title: 'Build with your own hands',
    Svg: require('../../static/img/didit.svg').default,
    description: (
      <>
        “You don’t learn to walk by following rules. You learn by doing, and by falling over.”
        —Richard Branson
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
