import { Separator } from "../ui/separator";
import { Downloader } from "./buttons/Downloader";
import Regenerator from "./buttons/Regenerator";

const GeneratorTopbar = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex gap-4 p-2 rounded-md w-fit bg-secondary/40">
        <Regenerator />
        <Separator orientation='vertical' />
        <Downloader />
      </div>
    </div>
  );
};

export default GeneratorTopbar;
