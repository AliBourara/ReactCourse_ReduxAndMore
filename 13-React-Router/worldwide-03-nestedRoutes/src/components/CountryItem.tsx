import styles from "./CountryItem.module.css";

interface CountryItemViewProps {
  country: any;
}

function CountryItem({ country }: CountryItemViewProps) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
