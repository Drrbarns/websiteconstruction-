import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.gradientLayer} />
      <div className={styles.grainLayer} />

      <div className={`${styles.floatImg} ${styles.itemOne}`} aria-hidden="true">
        <Image src="/crop-potato.png" alt="Potato" width={110} height={110} />
      </div>
      <div className={`${styles.floatImg} ${styles.itemTwo}`} aria-hidden="true">
        <Image src="/crop-apple.png" alt="Apple" width={100} height={100} />
      </div>
      <div className={`${styles.floatImg} ${styles.itemThree}`} aria-hidden="true">
        <Image src="/crop-grapes.png" alt="Grapes" width={120} height={120} />
      </div>
      <div className={`${styles.floatImg} ${styles.itemFour}`} aria-hidden="true">
        <Image src="/crop-corn.png" alt="Corn" width={130} height={130} />
      </div>
      <div className={`${styles.floatImg} ${styles.itemFive}`} aria-hidden="true">
        <Image src="/crop-carrot.png" alt="Carrot" width={115} height={115} />
      </div>
      <div className={`${styles.floatImg} ${styles.itemSix}`} aria-hidden="true">
        <Image src="/crop-orange.png" alt="Orange" width={105} height={105} />
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

        <div className={styles.badge}>
          Website Under Maintenance
        </div>

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
            (+61)489996473
          </a>
        </div>

        <p className={styles.footerText}>
          We appreciate your patience and continued trust in Agrillano.
        </p>
      </div>
    </main>
  );
}

