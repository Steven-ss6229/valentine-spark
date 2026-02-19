import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, Calendar, MapPin, Gift, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useValentine } from "@/context/ValentineContext";
import Confetti from "@/components/Confetti";
import FloatingHearts from "@/components/FloatingHearts";
import coupleSunset from "@/assets/couple-sunset.jpg";
import rosesBouquet from "@/assets/roses-bouquet.jpg";
import romanticDinner from "@/assets/romantic-dinner.jpg";

const memories = [
  {
    image: coupleSunset,
    title: "Our First meet Together",
    description: "The moment I knew we were special",
  },
  {
    image: rosesBouquet,
    title: "Flowers for My Love",
    description: "May their scent remember me to you",
  },
  {
    image: romanticDinner,
    title: "Our Moments",
    description: "Every meet with you is magical",
  },
];

const CelebrationPage = () => {
  const navigate = useNavigate();
  const { recipientName, senderName, hasAccepted } = useValentine();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!hasAccepted) {
      navigate("/ask");
      return;
    }
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, [hasAccepted, navigate]);

  if (!hasAccepted) return null;

  return (
    <div className="min-h-screen blush-gradient relative overflow-hidden">
      <FloatingHearts />
      <Confetti />

      <div className="relative z-10 min-h-screen px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-heart fill-heart animate-pulse-heart" />
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-gold animate-sparkle" />
            <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-heart fill-heart animate-pulse-heart" style={{ animationDelay: "0.3s" }} />
          </div>
          <h1 className="font-script text-4xl sm:text-6xl md:text-7xl text-primary mb-4">
            Yaaay! 🎉
          </h1>
          <p className="font-body text-lg sm:text-xl text-foreground/80 max-w-lg mx-auto">
            {recipientName}, you just made {senderName} the happiest person in
            the world!
          </p>
        </div>

        {/* Main celebration card */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            showContent
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-romantic border border-rose-light/30 overflow-hidden">
            {/* Hero section */}
            <div className="p-6 sm:p-10 text-center border-b border-rose-light/20">
              <h2 className="font-script text-3xl sm:text-4xl text-rose-dark mb-4">
                Our Valentine's Day Plans 💕
              </h2>
              <p className="font-body text-muted-foreground max-w-md mx-auto">
                I can't wait to spend this special day with you. Here's what I
                have in mind...
              </p>
            </div>

            {/* Plans grid */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8">
              <div className="bg-secondary/50 rounded-2xl p-5 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full romantic-gradient flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-script text-xl text-primary mb-2">
                  February 14th
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Our special day together
                </p>
              </div>

              <div className="bg-secondary/50 rounded-2xl p-5 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full romantic-gradient flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-script text-xl text-primary mb-2">
                  Romantic Dinner
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Your favorite restaurant
                </p>
              </div>

              <div className="bg-secondary/50 rounded-2xl p-5 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full romantic-gradient flex items-center justify-center mx-auto mb-3">
                  <Gift className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-script text-xl text-primary mb-2">
                  Surprise Gift
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Something special for you
                </p>
              </div>
            </div>

            {/* Memories gallery */}
            <div className="p-6 sm:p-8 border-t border-rose-light/20">
              <h3 className="font-script text-2xl sm:text-3xl text-primary text-center mb-6">
                Our Beautiful Memories 📸
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                {memories.map((memory, index) => (
                  <div
                    key={index}
                    className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-romantic transition-all duration-300 hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <img
                      src={memory.image}
                      alt={memory.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                        <h4 className="font-script text-lg">{memory.title}</h4>
                        <p className="font-body text-sm opacity-90">
                          {memory.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Love letter */}
            <div className="p-6 sm:p-10 bg-secondary/30 text-center">
              <Heart className="w-8 h-8 text-heart fill-heart mx-auto mb-4 animate-pulse-heart" />
              <p className="font-script text-xl sm:text-2xl text-primary italic max-w-xl mx-auto mb-4">
                "I love you not only for what you are, but for what I am when I
                am with you."
              </p>
              <p className="font-body text-muted-foreground">
                loving u Forever , {senderName} 💕
              </p>
            </div>
          </div>

          {/* Back button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="font-body rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Start
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 flex items-center justify-center gap-2 text-muted-foreground/60">
          <span className="font-body text-sm">Made with</span>
          <Heart className="w-4 h-4 text-heart fill-heart animate-pulse-heart" />
          <span className="font-body text-sm">for our love story</span>
        </footer>
      </div>
    </div>
  );
};

export default CelebrationPage;
