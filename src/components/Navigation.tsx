import { Link, useLocation } from "react-router-dom";
import { Heart, Edit, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/customize", label: "Customize", icon: Edit },
    { path: "/ask", label: "Ask", icon: Heart },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-card/80 backdrop-blur-md rounded-full shadow-romantic border border-rose-light/30 px-2 py-2 flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm transition-all duration-300",
                isActive
                  ? "romantic-gradient text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
              )}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
