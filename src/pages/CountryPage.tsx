import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ThreeDot } from "react-loading-indicators";
import { useCountryData } from "../hooks/useCountryData";

import Border from "@/components/Border";

const CountryPage = () => {
  const navigate = useNavigate();
  const { country } = useParams<{ country: string }>();

  const { countryData, borderCountries, loading, error } =
    useCountryData(country);

  const renderContent = () => {
    if (loading) {
      return (
        <ThreeDot
          color="#000"
          size="large"
          text="Loading Country..."
          textColor=""
        />
      );
    }

    if (error || !countryData) {
      return <p>{error || "Country not found."}</p>;
    }

    return (
      <div className="lg:flex lg:items-stretch lg:gap-36 dark:bg-[hsl(207,26%,17%)]">
        <div className="mb-12 w-full lg:h-full lg:max-w-[40%]">
          <img
            src={countryData.flags.svg}
            alt={`${countryData.name.common}'s Flag`}
            className="h-full w-full object-cover md:max-h-100 lg:max-h-max"
          />
        </div>

        <div className="w-full lg:p-8 ">
          <div className="flex gap-6 lg:flex-row lg:justify-between">
            <div className="flex w-full flex-col gap-6 lg:gap-8">
              <h1 className="text-2xl font-extrabold ">
                {countryData?.name.common}
              </h1>

              <div className="lg:flex lg:w-full lg:items-start lg:justify-between">
                <div className="flex flex-col gap-3">
                  <p>
                    <strong>Native name: </strong>
                    {countryData?.name.official}
                  </p>

                  <p>
                    <strong>Population: </strong>
                    {Intl.NumberFormat().format(countryData?.population ?? 0)}
                  </p>

                  <p>
                    <strong>Region: </strong>
                    {countryData?.region}
                  </p>

                  <p>
                    <strong>Sub Region: </strong>
                    {countryData?.subregion}
                  </p>

                  <p>
                    <strong>Capital: </strong>
                    {countryData?.capital}
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-3 lg:m-0 min-w-fit">
                  <p>
                    <strong>Top level domain: </strong>
                    {countryData?.tld}
                  </p>

                  <p>
                    <strong>Currencies: </strong>

                    {countryData?.currencies
                      ? Object.values(countryData.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
                      : "N/A"}
                  </p>

                  <p>
                    <strong>Languages: </strong>
                    {countryData?.languages
                      ? Object.values(countryData.languages).join(", ")
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:mt-18 lg:flex-row lg:gap-4">
            <h2 className="min-w-fit text-xl font-semibold">
              Border Countries:
            </h2>
            <div className="flex w-full flex-wrap gap-2">
              {borderCountries.length > 0
                ? borderCountries.map((e, index) => (
                    <div
                      key={index}
                      className="w-full max-w-[31%] cursor-pointer"
                      onClick={() => navigate(`/countries/${e.name.common}`)}
                    >
                      {Border(e.name.common)}
                    </div>
                  ))
                : "No Border Countries"}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 lg:px-18">
      <button
        aria-label="Back"
        type="button"
        className="flex w-fit cursor-pointer items-center gap-2 px-8 py-1 shadow-[0_0_10px_rgba(0,0,0,.25)]"
        onClick={() => navigate("/")}
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      <section className="mt-14">{renderContent()}</section>
    </div>
  );
};

export default CountryPage;
