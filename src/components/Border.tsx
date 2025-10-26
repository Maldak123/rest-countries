const Border = (country: string) => {
  return (
    <div className="shadow-[0_0_5px_rgba(0,0,0,.25)] font-light py-2 text-center text-sm dark:bg-[hsl(209,23%,22%)]">
      {country}
    </div>
  );
};

export default Border;
