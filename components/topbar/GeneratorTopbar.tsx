import { Downloader } from "./buttons/Downloader";
import Regenerator from "./buttons/Regenerator";

const GeneratorTopbar = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex gap-12">
        <Regenerator />
        <Downloader />
      </div>
    </div>
  );
};

export default GeneratorTopbar;
