import * as React from "react";
import { cn } from "@/lib/utils";

const Select = ({ children, onValueChange, ...props }) => {
  return (
    <div className="relative w-full">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onValueChange });
        }
        return child;
      })}
    </div>
  );
};

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className="relative">
    {children}
  </div>
));
SelectTrigger.displayName = "SelectTrigger";

const SelectValue = ({ placeholder }) => null;

const SelectContent = React.forwardRef(({ className, children, onValueChange, ...props }, ref) => {
  return (
    <select
      onChange={(e) => onValueChange && onValueChange(e.target.value)}
      className={cn(
        "flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50 transition-all text-slate-700",
        className
      )}
      {...props}
    >
      <option value="" disabled selected>
        Select an option...
      </option>
      {children}
    </select>
  );
});
SelectContent.displayName = "SelectContent";

const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };