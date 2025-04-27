import { Waypoints } from 'lucide-react'
import Link from 'next/link'
import { IconButton } from './icon-button'

const Solver = () => {
    return (
        <Link href="/game/solution" className="relative">
            <IconButton onClick={() => { }} tooltip="Solve">
                <Waypoints />
            </IconButton>
        </Link>

    )
}

export default Solver