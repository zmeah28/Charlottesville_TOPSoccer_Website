import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/members.module.css';

import GuardiolaCoach from '@/assets/images/Guardiola_Coach.png';
import ZayanCoach from '@/assets/images/Zayan_Coach.jpeg';
import TrumanCoach from '@/assets/images/Truman_Coach.jpeg';
import TylerCoach from '@/assets/images/Tyler_Coach.jpeg';
import TateCoach from '@/assets/images/Tate_Coach.jpeg';
import KatieCoach from '@/assets/images/Katie_Coach.jpeg';
import JacksonCoach from '@/assets/images/Jackson_Coach.jpeg';
import JosephCoach from '@/assets/images/Joseph_Coach.jpeg';

const canParticipateListItems = [
  'Autism',
  'Down Syndrome',
  'Muscular Dystrophy',
  'Cerebral Palsy',
  'Sight or Hearing Impaired',
  'Traumatic Brain Injury (TBI)',
];

const benefitsListItems = [
  'Develop a sense of belonging to a community',
  'Learn the value of being part of a team.',
  'Improve self-esteem, fitness and social skills',
];

const expectListItems = [
  'A fun and meaningful experience for you and your family',
  'Games and activities adapted to ensure your child’s participation',
  'Safe and healthy environment',
  'Parents will have the opportunity to network with other families for support and information-sharing',
];

const roleListItems = [
  'Provide transportation to and from all practices and games, ensuring that the player is prompt',
  'Attend all practices and games',
  'Lend support in a positive manner',
  'Provide any pertinent information about your child to the administrators and coaches',
];

const coaches = [
  { img: ZayanCoach,      alt: 'Zayan Meah',      name: 'Zayan Meah' },
  { img: KatieCoach,      alt: 'Katie Kenny',      name: 'Katie Kenny' },
  { img: TylerCoach,      alt: 'Tyler Rynne',      name: 'Tyler Rynne' },
  { img: TateCoach,       alt: 'Tate Carr',        name: 'Tate Carr' },
  { img: JacksonCoach,    alt: 'Jackson Manderfield', name: 'Jackson Manderfield' },
  { img: TrumanCoach,     alt: 'Truman Griffith',  name: 'Truman Griffith' }
];

const members: React.FC = () => {
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

    document
      .querySelectorAll(`.${styles.hidden}`)
      .forEach(el => observer.observe(el));

    return () => { observer.disconnect(); };
  }, []);

  return (
    <div className={styles.aboutFrame}>
      <h1
        className={`${styles.mainHeading} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        About Us
      </h1>

      <section
        className={`${styles.contentSection} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        <h2 className={styles.subHeading}>WHAT IS CHARLOTTESVILLE TOPSOCCER?</h2>
        <p>
          Charlottesville TOPSoccer is a recreational sports program designed to bring the opportunity
          of learning and playing soccer to young athletes with cognitive or physical disabilities
          in the Charlottesville community.
        </p>
      </section>

      <section
        className={`${styles.contentSection} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        <h2 className={styles.subHeading}>WHY DO WE NEED CHARLOTTESVILLE TOPSOCCER?</h2>
        <p>
          There are many children with disabilities who need, and can be provided with, the opportunity
          to play soccer. Our mission is to provide children with diverse abilities that opportunity
          in a structured environment that is safe, fun, supportive, and inclusive.
        </p>
      </section>

      <section
        className={`${styles.contentSection} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        <h2 className={styles.subHeading}>HOW DOES CHARLOTTESVILLE TOPSOCCER WORK?</h2>
        <p>
          Each player is paired with a trained ‘buddy’ to play soccer games and activities. Players
          build relationships with buddies as well as other athletes. TOPSoccer Coaches oversee the
          weekly sessions and have taken certification training.
        </p>
      </section>

      <section
        className={`${styles.contentSection} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        <h2 className={styles.subHeading}>WHO CAN PARTICIPATE?</h2>
        <p>We welcome any child or young adult with a disability, which might include but is not limited to:</p>
        <ul className={styles.infoList}>
          {canParticipateListItems.map((item, i) => (
            <li key={i} className={styles.infoListItem}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        className={`${styles.contentSection} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        <h2 className={styles.subHeading}>WHAT ARE THE BENEFITS OF TOPSOCCER FOR MY CHILD?</h2>
        <ul className={styles.infoList}>
          {benefitsListItems.map((item, i) => (
            <li key={i} className={styles.infoListItem}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        className={`${styles.contentSection} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        <h2 className={styles.subHeading}>WHAT SHOULD FAMILIES EXPECT FROM THE PROGRAM?</h2>
        <ul className={styles.infoList}>
          {expectListItems.map((item, i) => (
            <li key={i} className={styles.infoListItem}>{item}</li>
          ))}
        </ul>
      </section>

      <section
        className={`${styles.contentSection} ${styles.hidden}`}
        data-animation="animateSlideInLeft"
      >
        <h2 className={styles.subHeading}>WHAT IS THE ROLE OF A TOPSOCCER PARENT?</h2>
        <ul className={styles.infoList}>
          {roleListItems.map((item, i) => (
            <li key={i} className={styles.infoListItem}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.coachSection}>
      <div className={styles.mainCoachImage}>
        <Image
          src={GuardiolaCoach}
          alt="Home"
          width={980}
          height={530}
          className={styles.Image}
          priority
        />
      </div>

        <div className={styles.coachGrid}>
          {coaches.map(({ img, alt, name }) => (
            <div
              key={name}
              className={`${styles.coachCard} ${styles.hidden}`}
              data-animation="animateFadeIn"
            >
              <Image
                src={img}
                alt={alt}
                width={200}
                height={180}
                className={`${styles.coachImage} ${styles.rounded}`}
                priority
              />
              <h3 className={styles.coachName}>{name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default members;
