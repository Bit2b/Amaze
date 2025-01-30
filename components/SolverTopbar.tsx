import { Downloader } from "./topbar/Downloader";
import GoBackButton from "./topbar/GoBack";
import Regenerator from "./topbar/Regenerator";

const SolverTopbar = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex gap-12">
        <Regenerator />
        <GoBackButton/>
        <Downloader />
      </div>
    </div>
  );
};

export default SolverTopbar;
