import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyrigh {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
}

export default Footer;
