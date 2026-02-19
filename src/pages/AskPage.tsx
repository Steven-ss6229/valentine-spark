import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useValentine } from "@/context/ValentineContext";
import Confetti from "@/components/Confetti";
import FloatingHearts from "@/components/FloatingHearts";

const AskPage = () => {
  const navigate = useNavigate();
  const { recipientName, senderName, loveMessage, setHasAccepted } = useValentine();
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noClickCount, setNoClickCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const noButtonMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change your mind?",
    "Pretty please?",
    "I'll be sad 😢",
  ];

  const handleNoHover = () => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const maxX = Math.min(container.width / 2 - 60, 150);
    const maxY = Math.min(container.height / 2 - 30, 100);

    const newX = (Math.random() - 0.5) * 2 * maxX;
    const newY = (Math.random() - 0.5) * 2 * maxY;

    setNoButtonPosition({ x: newX, y: newY });
    setNoClickCount((prev) => Math.min(prev + 1, noButtonMessages.length - 1));
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setHasAccepted(true);
    setTimeout(() => {
      navigate("/celebration");
    }, 2000);
  };

  return (
    <div className="min-h-screen blush-gradient relative overflow-hidden">
      <FloatingHearts />
      {showConfetti && <Confetti />}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div
          ref={containerRef}
          className="w-full max-w-2xl bg-card/80 backdrop-blur-sm rounded-3xl shadow-romantic border border-rose-light/30 overflow-hidden p-6 sm:p-10 md:p-12"
        >
          {/* To: Name */}
          <div className="text-center mb-6">
            <span className="font-body text-sm text-muted-foreground">To:</span>
            <h2 className="font-script text-2xl sm:text-3xl text-primary">
              {recipientName}
            </h2>
          </div>

          {/* Main heart */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-heart fill-heart animate-pulse-heart drop-shadow-lg" />
          </div>

          {/* Question */}
          <div className="text-center mb-6">
            <h1 className="font-script text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-3 sm:mb-4 leading-tight">
              Will you be my
            </h1>
            <h2 className="font-script text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-rose-dark animate-bounce-soft">
              Valentine? 💝
            </h2>
          </div>

          {/* Personal message */}
          <p className="font-body text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-md mx-auto text-center px-2">
            {loveMessage}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative min-h-[120px]">
            <Button
              onClick={handleYesClick}
              className="romantic-gradient text-primary-foreground font-body font-semibold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-full shadow-romantic hover:scale-110 transition-all duration-300 hover:shadow-xl w-full sm:w-auto z-10"
            >
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-2 fill-current" />
              Yes!
            </Button>

            <Button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              variant="outline"
              className="font-body font-medium text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full border-2 border-muted-foreground/30 text-muted-foreground hover:text-muted-foreground transition-all duration-200 w-full sm:w-auto"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.2s ease-out",
              }}
            >
              {noButtonMessages[noClickCount]}
            </Button>
          </div>

          {/* From: Name */}
          <div className="text-center mt-8 pt-6 border-t border-rose-light/30">
            <span className="font-body text-sm text-muted-foreground">
              With all my love,
            </span>
            <p className="font-script text-xl sm:text-2xl text-primary mt-1">
              {senderName}
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4">
            <Sparkles className="w-5 h-5 text-gold opacity-60 animate-sparkle" />
          </div>
          <div className="absolute top-8 right-6">
            <Heart className="w-4 h-4 text-rose-light fill-rose-light opacity-50" />
          </div>
          <div className="absolute bottom-8 left-8">
            <Heart className="w-3 h-3 text-primary/40 fill-primary/40" />
          </div>
          <div className="absolute bottom-4 right-4">
            <Sparkles
              className="w-4 h-4 text-gold/50 animate-sparkle"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 flex items-center gap-2 text-muted-foreground/60">
          <span className="font-body text-sm">Made with</span>
          <Heart className="w-4 h-4 text-heart fill-heart animate-pulse-heart" />
          <span className="font-body text-sm">for you</span>
        </footer>
      </div>
    </div>
  );
};

export default AskPage;
