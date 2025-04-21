import { Waypoints } from 'lucide-react'
import Link from 'next/link'

const Solver = () => {
    return (
        <div className="relative group">
            <Link href="game/solution">
                <button className="p-2 hover:bg-accent rounded-md transition-colors">
                    <Waypoints className="h-5 w-5 text-primary" />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-all duration-300">
                    Solve
                </span>
            </Link>
        </div>
    )
}

export default Solver