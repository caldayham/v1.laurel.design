import styles from './Process.module.css';

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.processContainer}>
        <h2 className="section-title">Our Process</h2>

        <div className={styles.processGrid}>
          {/* Consultation */}
          <div className={styles.processCard}>
            <div className={styles.processHeader}>
              <span className={styles.processNumber}>01</span>
              <h3 className={styles.processTitle}>Consultation</h3>
            </div>
            <div className={styles.processContent}>
              <p className={styles.processDescription}>
                We visit your property <b>in person</b> to understand your vision and assess your space. You&apos;ll receive:
              </p>
              <ul className={styles.processList}>
                <li>Honest, unbiased advice on achieving your outdoor goals</li>
                <li>Material recommendations with cost estimates and trade-offs</li>
                <li>Guidance on hiring contractors and maximizing your budget</li>
                <li>Solutions that balance function and aesthetics</li>
                <li>A complete 3D site scan for future design work</li>
              </ul>
            </div>
          </div>

          {/* Design */}
          <div className={styles.processCard}>
            <div className={styles.processHeader}>
              <span className={styles.processNumber}>02</span>
              <h3 className={styles.processTitle}>Design</h3>
            </div>
            <div className={styles.processContent}>
              <p className={styles.processDescription}>
                Our team transforms your vision into professional plans:
              </p>
              <ul className={styles.processList}>
                <li><strong>2D Concepts:</strong> Two unique designs tailored to your space and preferences</li>
                <li><strong>3D Visualizations:</strong> Realistic renderings so you can see the final result</li>
                <li><strong>Construction Documents:</strong> Detailed plans ready to hand off to any contractor</li>
              </ul>
            </div>
          </div>

          {/* Build */}
          <div className={styles.processCard}>
            <div className={styles.processHeader}>
              <span className={styles.processNumber}>03</span>
              <h3 className={styles.processTitle}>Build</h3>
            </div>
            <div className={styles.processContent}>
              <p className={styles.processDescription}>
                Navigating contractors shouldn&apos;t be overwhelming. We leverage our network of trusted craftsmen to:
              </p>
              <ul className={styles.processList}>
                <li>Solicit bids from vetted specialists who take pride in their work</li>
                <li>Filter proposals and identify the right fit for your project</li>
                <li>Negotiate contract terms and payment schedules that protect you</li>
                <li>Stay involved throughout construction until your installation is complete</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
