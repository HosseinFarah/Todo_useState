import { useContext } from "react";
import { favName } from "../App";
export const Home = () => {
  const {name} = useContext(favName);
  return (
    <div className="container">
      <h1 className="mt-5">Todo: add your Task, </h1>
      <div className="alert alert-primary" role="alert">
      Kirjoita tehtäväsi ja lisää se. Jos tehtäväsi on valmis, napsauta painiketta ja muuta sen tilaa! Jos haluat poistaa sen, klikkaa poista-painiketta!.

        && {name}

      </div>
    </div>
  );
};
