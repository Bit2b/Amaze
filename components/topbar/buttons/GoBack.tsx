import { Undo } from "lucide-react";

const GoBack = () => {
    return (
        <div className="relative group">
            <button onClick={() => window.history.back()}>
                <Undo className="h-6 w-6 text-primary" />
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-all duration-300">
                Go Back
            </span>
        </div>
    );
};

export default GoBack;
