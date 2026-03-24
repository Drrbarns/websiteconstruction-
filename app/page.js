"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./page.module.css";

const STORAGE_KEY = "construction_countdown_end";
const TOTAL_MS = 24 * 60 * 60 * 1000;

function pad2(n) {
  return String(n).padStart(2, "0");
}

function getEndTime() {
  if (typeof window === "undefined") return Date.now() + TOTAL_MS;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  const parsed = raw ? Number(raw) : 0;
  if (!parsed || parsed <= Date.now()) {
    const next = Date.now() + TOTAL_MS;
    window.localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  }
  return parsed;
}

export default function Home() {
  const endTime = useMemo(() => getEndTime(), []);
  const [remainingMs, setRemainingMs] = useState(() =>
    Math.max(0, endTime - Date.now())
  );
  const [toastOpen, setToastOpen] = useState(false);
  const toastTimerRef = useRef();

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemainingMs(Math.max(0, endTime - Date.now()));
    }, 1000);
    return () => window.clearInterval(id);
  }, [endTime]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  const totalSeconds = Math.floor(remainingMs / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const elapsed = TOTAL_MS - remainingMs;
  const pct = Math.min(100, (elapsed / TOTAL_MS) * 100);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector("input[type='email']");
    if (input) input.value = "";

    setToastOpen(true);
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToastOpen(false), 3000);
  }

  return (
    <main className={styles.main}>
      <div className={styles.bgGrid} />
      <div className={`${styles.bgGlow} ${styles.bgGlowAmber}`} />
      <div className={`${styles.bgGlow} ${styles.bgGlowPurple}`} />

      <div className={styles.container}>
        <div className={styles.gearIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z" />
          </svg>
        </div>

        <div className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          Work in Progress
        </div>

        <h1 className={styles.h1}>
          <span className={styles.highlight}>AGRILLANO</span>
          <br />
          COMING SOON
        </h1>

        <p className={styles.subtitle}>
          We&apos;re building something amazing behind the scenes. Stay tuned —
          Agrillano will be live before you know it.
        </p>

        <div className={styles.countdown} role="timer" aria-live="polite">
          <div className={styles.block}>
            <div className={styles.number}>{pad2(hours)}</div>
            <div className={styles.label}>Hours</div>
          </div>
          <div className={styles.block}>
            <div className={styles.number}>{pad2(minutes)}</div>
            <div className={styles.label}>Minutes</div>
          </div>
          <div className={styles.block}>
            <div className={styles.number}>{pad2(seconds)}</div>
            <div className={styles.label}>Seconds</div>
          </div>
        </div>

        <form className={styles.notifyForm} onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Enter your email for updates"
            required
          />
          <button type="submit">Notify Me</button>
        </form>
      </div>

      <div className={`${styles.toast} ${toastOpen ? styles.toastShow : ""}`}>
        You&apos;re on the list! We&apos;ll notify you at launch.
      </div>
      <div className={styles.progressBar} style={{ width: `${pct}%` }} />
    </main>
  );
}

