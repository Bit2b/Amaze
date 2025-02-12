'use client'

import MazeAlgorithmSeeder from "@/components/MazeAlgorithmSeeder";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <MazeAlgorithmSeeder />
            {children}
        </div>
    );
}
