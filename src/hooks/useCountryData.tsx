import { useEffect, useState } from "react";
import { GetCountry, GetCountryByCode } from "../services/GetCountries";
import type { Country } from "../interfaces/Country";

export function useCountryData(countryName: string | undefined) {
  const [countryData, setCountryData] = useState<Country | null>(null);
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setCountryData(null);
    setBorderCountries([]);

    if (!countryName) {
      setError("Country not specified.");
      setLoading(false);
      return;
    }

    const fetchAllData = async () => {
      try {
        const mainCountry = await GetCountry(countryName);
        setCountryData(mainCountry);

        const borderCodes = mainCountry?.borders;
        if (borderCodes && borderCodes.length > 0) {
          const borders = await GetCountryByCode(borderCodes.join(","));
          setBorderCountries(borders);
        }

      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Country not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [countryName]);

  return { countryData, borderCountries, loading, error };
}