import { useDownloadGridStore } from '@/store/downloadStore';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';

export const Downloader = () => {
    const gridRef = useDownloadGridStore((state) => state.gridRef);

    const downloadImage = async () => {
        if (!gridRef) return;

        const canvas = await html2canvas(gridRef);
        const imageUrl = canvas.toDataURL('image/png');

        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = 'maze.png';
        a.click();
    };

    return (

        <div className="relative group">
            <button onClick={downloadImage}>
                <Download className="h-6 w-6 text-primary" />
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-all duration-300">
                Download
            </span>
        </div>
    );
};