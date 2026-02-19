import FloatingHearts from "@/components/FloatingHearts";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen blush-gradient relative overflow-hidden flex items-center justify-center">
      <FloatingHearts />

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <Heart className="w-16 h-16 text-heart fill-heart mx-auto mb-6 animate-pulse-heart" />
        <h1 className="font-script text-5xl sm:text-7xl text-primary mb-4">
          Valentine's Day
        </h1>
        <p className="font-body text-lg text-muted-foreground mb-8">
          Create your special Valentine's message
        </p>
        <Button
          onClick={() => navigate("/")}
          className="romantic-gradient text-primary-foreground font-body font-semibold px-8 py-6 rounded-full"
        >
          Start
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
