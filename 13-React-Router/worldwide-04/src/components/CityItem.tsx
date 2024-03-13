import { Citiestype } from "../../data/data";
import styles from "./CityItem.module.css";

interface CityItemViewProps {
  city: Citiestype;
}

const formatDate = (date: string | number | Date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }: CityItemViewProps) {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
      <h3 className={styles.name}>{city.cityName}</h3>
      <time className={styles.date}>({formatDate(city.date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
