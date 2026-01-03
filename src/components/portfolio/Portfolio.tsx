import styles from './Portfolio.module.css';

const projects = [
  { name: 'Project Name', location: 'Palo Alto, CA' },
  { name: 'Project Name', location: 'Palo Alto, CA' },
  { name: 'Project Name', location: 'Palo Alto, CA' },
];

export default function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolioContainer}>
        <h2 className="section-title">Our Work</h2>

        <div className={styles.portfolioGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.portfolioCard}>
              <div className={styles.portfolioImage}>
                <span className={styles.portfolioPlaceholderText}>Project Image</span>
              </div>
              <div className={styles.portfolioInfo}>
                <h3 className={styles.portfolioName}>{project.name}</h3>
                <p className={styles.portfolioLocation}>{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
