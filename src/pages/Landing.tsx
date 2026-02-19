import { Heart, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";
import heroImage from "@/assets/romantic-hero.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/90" />
      </div>

      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          {/* Decorative hearts */}
          <div className="flex justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-heart fill-heart animate-pulse-heart" />
            <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-gold" />
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary fill-primary animate-pulse-heart" style={{ animationDelay: "0.3s" }} />
          </div>

          {/* Main title */}
          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary mb-4 drop-shadow-lg">
            Valentine's Day
          </h1>
          <p className="font-script text-2xl sm:text-3xl md:text-4xl text-rose-dark mb-8 animate-bounce-soft">
            A Special Message For You 💕
          </p>

          {/* Subtitle */}
          <p className="font-body text-lg sm:text-xl text-foreground/80 mb-10 max-w-lg mx-auto px-4">
            Someone special has created this just for you. Click below to see
            what awaits...
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => navigate("/ask")}
            size="lg"
            className="romantic-gradient text-primary-foreground font-body font-semibold text-lg sm:text-xl px-10 sm:px-14 py-7 sm:py-8 rounded-full shadow-romantic hover:scale-110 transition-all duration-300 hover:shadow-xl group"
          >
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 fill-current group-hover:animate-pulse-heart" />
            Open My Heart
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Romantic quote */}
          <div className="mt-12 sm:mt-16 p-6 bg-card/60 backdrop-blur-sm rounded-2xl border border-rose-light/30 max-w-md mx-auto">
            <p className="font-script text-xl sm:text-2xl text-primary italic">
              "Love is not about for how long you have been
              together. Love is about how much you love each other every single
              day."
            </p>
            <div className="flex items-center justify-center gap-1 mt-4 text-muted-foreground">
              <Heart className="w-3 h-3 fill-current" />
              <span className="text-sm font-body">PnS</span>
              <Heart className="w-3 h-3 fill-current" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-muted-foreground/60">
            <span className="text-xs font-body mb-2">Tap to continue</span>
            <Heart className="w-4 h-4 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
