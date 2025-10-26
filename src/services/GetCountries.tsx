const API_URL = "https://restcountries.com/v3.1/"

export const GetCountries = async () => {
  try {
    const res = await fetch(
      `${API_URL}all?fields=name,flags,region,population,capital`,
    );

    if(!res.ok){
      throw new Error("Error on fetching countries")
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetCountry = async (country: string) => {
  try {
    const res = await fetch(
      `${API_URL}name/${country}?fields=name,tld,currencies,capital,region,subregion,languages,population,borders,flags`
    );

    if(!res.ok){
      throw new Error("Error on fetching country")
    }
    const data = await res.json();

    return data[0];
  } catch (error) {
    console.error(error);
  }
}

export const GetCountryByCode = async (codes: string) => {
  try {
    const res = await fetch(
      `${API_URL}alpha?codes=${codes}`
    );

    if(!res.ok){
      throw new Error("Error on fetching border countries")
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
