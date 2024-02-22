import { useState } from "react";

interface PostionType {
  lat: number;
  lng: number;
}

export function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<PostionType>({ lat: 0, lng: 0 });
  const [error, setError] = useState<string | null>(null);

  const { lat, lng } = position;

  function getGeoPostion() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { lat, lng, error, isLoading, getGeoPostion };
}
