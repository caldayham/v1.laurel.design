import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image
            src="/imgs/Laurel-text-logo-leaf.png"
            alt="Laurel"
            width={200}
            height={60}
            className={styles.logoImage}
            priority
          />
        </div>
      </div>
    </header>
  );
}
