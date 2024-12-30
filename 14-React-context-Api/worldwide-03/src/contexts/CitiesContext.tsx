import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Citiestype } from "../../data/data";
import { BASE_URL } from "../App";

interface CitiesProviderProp {
  children: ReactNode;
}

interface CitiesContexttype {
  cities: Citiestype[] | null;
  setCities?: React.Dispatch<React.SetStateAction<Citiestype[]>>;
  isLoading: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  currentCity: Citiestype;
  setCurrentCity?: React.Dispatch<React.SetStateAction<{}>>;
  getCity: (id: string | undefined) => {};
}

const CitiesContext = createContext<CitiesContexttype>({} as CitiesContexttype);

function CitiesProvider({ children }: CitiesProviderProp) {
  const [cities, setCities] = useState<Citiestype[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({} as Citiestype);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  async function getCity(id: string | undefined) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider value={{ cities, isLoading, currentCity, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside The CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
