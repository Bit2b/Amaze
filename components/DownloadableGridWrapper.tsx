import { useEffect, useRef, ReactNode } from "react";
import { useDownloadGridStore } from "@/store/downloadStore";

type DownloadableGridWrapperProps = {
  children: ReactNode;
};

const DownloadableGridWrapper: React.FC<DownloadableGridWrapperProps> = ({ children }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const setDownloadGridRef = useDownloadGridStore((state) => state.setDownloadGridRef);

  // Save the div ref to Zustand on mount
  useEffect(() => {
    if (gridRef.current) {
      setDownloadGridRef(gridRef.current);
    }
  }, [gridRef, setDownloadGridRef]);

  return (
    <div ref={gridRef} className="bg-primary/10 dark:bg-sidebar rounded-md p-4">
      {children}
    </div>
  );
};

export default DownloadableGridWrapper;
