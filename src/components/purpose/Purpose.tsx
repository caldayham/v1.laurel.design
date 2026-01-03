import styles from './Purpose.module.css';

export default function Purpose() {
  return (
    <section className={styles.about} id="purpose">
      <div className={styles.aboutContainer}>
        <h2 className="section-title">Our Purpose</h2>
        <p className={styles.aboutText}>
          Laurel exists to produce execptional landscaping engagements between homeowners and contractors.
          There is some natural friction that&apos;s common in construction, we reduce that friction for a percentage of the cost savings.
          <br/>
          <br/>
          The truth is not every design will work with your space, and not every contractor is right for every job.
          Ambiguity in plans is priced agressively in construction, and selecting a contractor, negotiating fair terms, and managing the
          build can mean the difference between a seamless transformation and a drawn-out headache.
        </p>
        <p className={`${styles.aboutText} ${styles.aboutHighlight}`}>
          <strong>Laurel exists to eliminate both risks.</strong>
          <br />
          We work with you and your space to turn feelings and vibes into precise plans,
          and guide you through contractor selection and negotiation, so you get the outdoor space
          you envisioned, delivered properly, at a fair price.
        </p>
        <div className={styles.videoContainer}>
          <iframe
            src="https://www.youtube.com/embed/QG-UfcS7l3k?start=13"
            title="Laurel Landscape Design"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
