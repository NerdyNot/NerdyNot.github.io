import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  permalink: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'CICD',
    description: (
      <>
        CICD 관련 문서를 저장하고 있는 페이지입니다.
      </>
    ),
    permalink: '/docs/CICD/intro', 
  },
  {
    title: 'Infrastructure',
    description: (
      <>
        Infrastructure 관련 문서를 저장하고 있는 페이지입니다.
      </>
    ),
    permalink: '/docs/Infrastructure/intro',
  },
];


function Feature({ title, description, permalink }: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.featureItem)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link className="button button--secondary button--lg" to={permalink}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
