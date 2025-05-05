import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const toggleGroupVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-gray-700 text-gray-200 hover:bg-gray-600",
        outline: "border border-gray-600 bg-transparent hover:bg-gray-700 hover:text-white",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-8 px-2",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const toggleItemVariants = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background data-[state=on]:bg-gray-600 data-[state=on]:text-white",
  {
    variants: {
      variant: {
        default: "bg-gray-700 text-gray-200 hover:bg-gray-600",
        outline: "border border-gray-600 bg-transparent hover:bg-gray-700 hover:text-white",
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toggleGroupVariants> {
  groupType: "single" | "multiple";
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
}

const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ className, variant, size, groupType, value, onValueChange, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(toggleGroupVariants({ variant, size }), className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<ToggleGroupItemProps>, {
              ...(child.type === ToggleGroupItem ? { groupType } : {}),
              isSelected:
                groupType === "single"
                  ? value === child.props.value
                  : Array.isArray(value) && value.includes(child.props.value),
              onSelect: () => {
                if (groupType === "single") {
                  onValueChange(child.props.value);
                } else {
                  const newValue = [...(Array.isArray(value) ? value : [])];
                  if (newValue.includes(child.props.value)) {
                    onValueChange(newValue.filter((v) => v !== child.props.value));
                  } else {
                    onValueChange([...newValue, child.props.value]);
                  }
                }
              },
            });
          }
          return child;
        })}
      </div>
    );
  }
);
ToggleGroup.displayName = "ToggleGroup";

interface ToggleGroupItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof toggleItemVariants> {
  value: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ className, variant, size, value, isSelected, onSelect, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(toggleItemVariants({ variant, size }), className)}
        data-state={isSelected ? "on" : "off"}
        onClick={onSelect}
        {...props}
      >
        {children}
      </button>
    );
  }
);
ToggleGroupItem.displayName = "ToggleGroupItem";

export { ToggleGroup, ToggleGroupItem };