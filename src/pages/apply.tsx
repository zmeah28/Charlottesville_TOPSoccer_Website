import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Image from 'next/image';
import styles from '../styles/apply.module.css';

import PartnershipsImg from '@/assets/images/Partnerships_Image.png';
import PartnershipsImg2 from '@/assets/images/Partnerships_Image2.png';
import CommunitySupporters from '@/assets/images/CommunitySupporters.png';

    const partner = [
      {
        src: PartnershipsImg,
        href: "https://www.charlottesvillealliancesc.org/",
        alt: 'Partner 1'
      },
      {
        src: PartnershipsImg2,
        href: "https://www.madisonhouse.org/",
        alt: 'Partner 2'
      }
    ];

const ApplyPage: React.FC = () => {
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
      <h1 className={`${styles.mainHeading} ${styles.hidden}`} data-animation="animateSlideInLeft">
        Community Partners
      </h1>
      <div className={styles.partnerSection}>
        <div className={styles.partnerGrid}>
          {[PartnershipsImg, PartnershipsImg2].map((img, idx) => (
            <div
              key={idx}
              style={{ borderRadius: '10px', overflow: 'hidden' }}
              className={styles.hidden}
              data-animation="animateFadeIn"
            >
              <Image
                src={img}
                alt={`Partner ${idx + 1}`}
                layout="responsive"
                width={300}
                height={200}
                sizes="(max-width: 600px) 100vw, 200px"
                quality={90}
                priority
              />
            </div>
          ))}
        </div>
      </div>

     {/*  <h1 className={`${styles.mainHeading} ${styles.hidden}`} data-animation="animateSlideInLeft">
        Community Supporters
      </h1>
      <section className={styles.supporterSection}>
        <div className={styles.supporterGrid}>
          <div
            style={{ borderRadius: '10px', overflow: 'hidden' }}
            className={styles.hidden}
            data-animation="animateFadeIn"
          >
            <Image
              src={CommunitySupporters}
              alt="Community Supporters"
              layout="responsive"
              width={1600}
              height={1067}
              sizes="(max-width: 800px) 100vw, 800px"
              quality={90}
              priority
            />
          </div>
        </div>
      </section>*/}
    </div> 

  );
};

export default ApplyPage;
