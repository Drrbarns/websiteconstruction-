import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.bgImage}>
        <Image
          src="/bg-crops.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.bgFill}
          priority
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.logoWrap}>
          <Image
            src="/agrillano-logo.png"
            alt="Agrillano logo"
            width={260}
            height={180}
            className={styles.logo}
            priority
          />
        </div>

        <div className={styles.badge}>Website Under Maintenance</div>

        <h1 className={styles.h1}>
          We are currently upgrading our website to serve you better.
        </h1>

        <p className={styles.subtitle}>
          If you need any products, please do not place orders or purchase
          through our online portal at this time. Kindly contact our Sales Team
          directly for manual assistance.
        </p>

        <div className={styles.contactCard}>
          <p className={styles.contactTitle}>Sales Contact</p>
          <a className={styles.contactNumber} href="tel:+61489996473">
            (+61) 489 996 473
          </a>
        </div>

        <p className={styles.footerText}>
          We appreciate your patience and continued trust in Agrillano.
        </p>
      </div>
    </main>
  );
}
