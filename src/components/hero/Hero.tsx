import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>Quality Landscape Design in Palo Alto</h1>
        <div className={styles.heroCtaWrapper}>
          <p className={styles.aboutText}>
            Reimagining your outdoor space should be exciting, not stressful.
            For most homeowners, <br/>two hurdles stand between intent and reality: the right design, and the right contractor.
          </p>
        </div>
        <div className={styles.heroButtons}>
          <a href="#contact" className={`${styles.heroCta} ${styles.heroCtaPrimary}`}>
            Book an On-Site Consultation
          </a>
          <a href="#contact" className={`${styles.heroCta} ${styles.heroCtaSecondary}`}>
            About the Brothers
          </a>
        </div>
      </div>
    </section>
  );
}
