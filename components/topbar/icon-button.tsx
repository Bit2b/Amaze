import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cloneElement, ReactElement } from "react";

interface IconButtonProps {
  onClick: () => void;
  tooltip: string;
  children: ReactElement<{ className?: string }>;
  className?: string;
}

export const IconButton = ({
  onClick,
  tooltip,
  children,
  className,
}: IconButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={'ghost'}
          size={'icon'}
          onClick={onClick}
          className={className}
        >
          {cloneElement(children, {
            ...children.props,
            className: `text-primary ${children.props.className ?? ""}`,
          })}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-accent-foreground bg-accent">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};