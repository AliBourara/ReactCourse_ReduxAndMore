import { Link } from "react-router-dom";
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
    <li>
      <Link
        className={styles.cityItem}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>({formatDate(city.date)})</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
