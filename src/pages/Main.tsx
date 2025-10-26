import { useEffect, useState, useMemo } from "react";
import { GetCountries } from "../services/GetCountries";
import { ThreeDot } from "react-loading-indicators";
import type { Countries } from "../interfaces/Countries";
import SearchGroup from "../components/SearchGroup";
import CountryCard from "@/components/CountryCard"; // Importe o novo card

const Main = () => {
  const [paises, setPaises] = useState<Countries[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await GetCountries();
        setPaises(data);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const filteredPaises = useMemo(() => {
    return paises
      .filter(
        (e) =>
          e.name.common.toLowerCase().match(search.toLowerCase()) &&
          e.region.toLowerCase().match(filter.toLowerCase()),
      )
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  }, [paises, search, filter]);

  return (
    <div >
      <div className="mb-4 px-4 py-5 md:px-18">
        <SearchGroup
          searchValue={search}
          onSearchChange={setSearch}
          onFilterChange={setFilter}
          filterValue={filter}
        />
      </div>
      <main className="flex min-h-screen items-center justify-center px-12 md:px-18 ">
        {loading ? (
          <ThreeDot
            color="#000"
            size="large"
            text="Loading Countries..."
            textColor=""
          />
        ) : filteredPaises.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-10 self-start sm:grid-cols-2 lg:grid-cols-4">

            {filteredPaises.map((pais) => (
              <CountryCard key={pais.name.common} pais={pais} />
            ))}

          </div>
        ) : (
          <p>No Countries Found.</p>
        )}
      </main>
    </div>
  );
};

export default Main;