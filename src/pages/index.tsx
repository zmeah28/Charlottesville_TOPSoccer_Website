import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/home.module.css';

import HomeImg from '@/assets/images/HomePageImage.png';
import OurStoryImg from '@/assets/images/Our_Story_Image.jpg';

const HomePage: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const anim = entry.target.getAttribute('data-animation');
            if (anim && styles[anim]) {
              entry.target.classList.add(styles[anim]);
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

    return () => observer.disconnect();
  }, []);

  const paragraphs = [
    <p key="p1">
      <strong>All children</strong> can benefit from the exercise, energy release, and pure
      enjoyment of playing sports. Participating in sports can help boost self-confidence,
      manage weight, and improve skills in relationship building and working as part of a
      team.
    </p>,
    <p key="p2">
      However, there were absolutely <strong>no opportunities</strong> for children with
      cognitive and physical disabilities to play soccer in Charlottesville, so we decided
      to tackle this problem.
    </p>,
    <p key="p3">
      In March 2024, Katie Kenny, Zayan Meah, and Tyler Rynne founded{' '}
      <strong>Charlottesville TOPSoccer</strong>. In partnership with USYS TOPSoccer and the
      Charlottesville Alliance Sports Club, we are a community-based program designed to bring
      the opportunity of learning and playing soccer to any boy or girl in Charlottesville who
      has a mental or physical disability.
    </p>,
  ];

  return (
    <div className={styles.frame}>
      {/* Home Image */}
      <div className={styles.heroImage}>
        <Image
          src={HomeImg}
          alt="Home"
          width={980}
          height={530}
          className={styles.mainImage}
          priority
        />
      </div>

      {/* Our Story Section */}
      <section className={styles.storySection}>
        <h2
          className={`${styles.sectionTitle} ${styles.hidden}`}
          data-animation="animateSlideInRight"
        >
          Our Story
        </h2>

        {paragraphs.map((paragraph, idx) => (
          <div
            key={idx}
            className={`${styles.introText} ${styles.hidden}`}
            data-animation="animateSlideInLeft"
          >
            {paragraph}
          </div>
        ))}

        <div
          className={`${styles.storyImageContainer} ${styles.hidden}`}
          data-animation="animateFadeIn"
        >
          <Image
            src={OurStoryImg}
            alt="Our Story"
            width={980}
            height={530}
            className={styles.storyImage}
          />
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <h2
          className={`${styles.sectionTitle} ${styles.hidden}`}
          data-animation="animateSlideInRight"
        >
          Sharing the Beautiful Game
        </h2>
        <div
          className={`${styles.videoContainer} ${styles.hidden}`}
          data-animation="animateFadeIn"
        >
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/K0XdC_FxPVY?si=l645AOpWco9-jrAK&autoplay=1&mute=1"
            title="YouTube video player"
            width="980"
            height="550"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
