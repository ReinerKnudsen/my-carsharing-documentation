import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Einfach zu verwenden',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Die Anwendung ist einfach zu verwenden und im Wesentlichen selbsterklärend..</>,
  },
  {
    title: 'Jederzeit verfügbar',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>Läuft auf jedem Mobilgerät als Web-Anwendung.</>,
  },
  {
    title: 'Zuverlässig',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Die Anwendung ist robust und verfügt über eine Reihe von Mechnismen, um Fehler zu vermeiden.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg
          className={styles.featureSvg}
          role='img'
        />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
