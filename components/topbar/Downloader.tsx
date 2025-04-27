import { useDownloadGridStore } from '@/store/downloadStore';
import html2canvas from 'html2canvas-pro';
import { Download } from 'lucide-react';
import { IconButton } from './icon-button';

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
        <IconButton onClick={downloadImage} tooltip="Download">
            <Download />
        </IconButton>
    );
};