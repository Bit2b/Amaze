import { Downloader } from "./topbar/Downloader";
import Regenerator from "./topbar/Regenerator";
import Solver from "./topbar/Solver";

const Topbar = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex gap-12">
        <Regenerator />
        <Solver />
        <Downloader />
      </div>
    </div>
  );
};

export default Topbar;
