import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/members-area.module.css';

import ChartImg from '@/assets/images/Chart.png';
import InclusionPolicyImg from '@/assets/images/Inclusion_Policy_Image.png';

const challengesItems = [
  'Physical activity levels are 4.5× lower',
  'The obesity rate is 38% higher',
  'Over 90% experience social isolation'
];

const MemberArea: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const anim = entry.target.getAttribute('data-animation')!;
            if ((styles as any)[anim]) {
              entry.target.classList.add((styles as any)[anim]);
              entry.target.classList.remove(styles.hidden);
            }
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${styles.hidden}`)
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.aboutFrame}>
      <h1
        className={`${styles.mainHeading} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        Inclusion Policy
      </h1>
      <h2 className={styles.subHeading}>
          The Challenges Facing Children with Disabilities
        </h2>
      <section
      className={`${styles.contentSection} ${styles.hidden}`}
      data-animation="animateSlideInRight"
    >
      <div className={styles.highlightBox}>
        <p>9 in 50 children in the US have a disability or chronic health problem.</p>
        <p>Of these 9 children…</p>
        <ul className={styles.infoList}>
          {[
            'Physical activity levels are 4.5× lower',
            'The obesity rate is 38% higher',
            'Over 90% experience social isolation'
          ].map((item, idx) => (
            <li key={idx} className={styles.infoListItem}>{item}</li>
          ))}
        </ul>
        <p>The odds against youth with a disability are stacked much higher than the general population.</p>
      </div>
    </section>

      <section
        className={`${styles.imageSection} ${styles.hidden}`}
        data-animation="animateFadeIn"
      >
        <h2 className={styles.subHeading}>
          Barriers to Activity for Children with Special Needs
        </h2>
        <div className={styles.imageContainer}>
          <Image
            src={ChartImg}
            alt="Barriers Chart"
            layout="responsive"
            width={1200}
            height={800}
            className={styles.image}
            priority
          />
        </div>
      </section>

      <section
        className={`${styles.imageSection} ${styles.hidden}`}
        data-animation="animateFadeIn"
      >
        <h2 className={styles.subHeading}>
          Our Commitment to Inclusion and Equal Play
        </h2>
        <div className={styles.imageContainer}>
          <Image
            src={InclusionPolicyImg}
            alt="Inclusion Policy"
            layout="responsive"
            width={1200}
            height={800}
            className={styles.image}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default MemberArea;
