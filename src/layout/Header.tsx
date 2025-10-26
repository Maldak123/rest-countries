import DarkButton from "@/components/DarkButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="flex justify-between items-center px-4 py-8 md:px-18 dark:bg-[hsl(209,23%,22%)]">
        <h1
          className="text-lg font-extrabold md:text-2xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          Where in the world?
        </h1>

        <div>
          <DarkButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
