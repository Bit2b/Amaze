import { Downloader } from "./topbar/Downloader";
import Regenerator from "./topbar/Regenerator";

const Topbar = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex gap-12">
        <Regenerator />
        <Downloader />
      </div>
    </div>
  );
};

export default Topbar;
