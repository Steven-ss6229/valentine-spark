import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useValentine } from "@/context/ValentineContext";
import FloatingHearts from "@/components/FloatingHearts";

const CustomizePage = () => {
  const navigate = useNavigate();
  const {
    senderName,
    setSenderName,
    recipientName,
    setRecipientName,
    loveMessage,
    setLoveMessage,
  } = useValentine();

  const [localSender, setLocalSender] = useState(senderName);
  const [localRecipient, setLocalRecipient] = useState(recipientName);
  const [localMessage, setLocalMessage] = useState(loveMessage);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSenderName(localSender || "STEVEN");
    setRecipientName(localRecipient || "PRASANNA");
    setLoveMessage(
      localMessage ||
        "Every moment with you feels like a dream come true. Will you make me the happiest person this Valentine's Day?"
    );
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handlePreview = () => {
    handleSave();
    navigate("/");
  };

  return (
    <div className="min-h-screen blush-gradient relative overflow-hidden">
      <FloatingHearts />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-heart fill-heart animate-pulse-heart" />
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary mb-3">
            Personalize Your Card
          </h1>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Make it extra special by adding your names and a personal love
            message
          </p>
        </div>

        {/* Form card */}
        <div className="w-full max-w-lg bg-card/80 backdrop-blur-sm rounded-3xl shadow-romantic border border-rose-light/30 p-6 sm:p-8">
          {/* Sender name */}
          <div className="mb-6">
            <label className="block font-body text-sm font-medium text-foreground mb-2">
              Your Name (Sender) 💝
            </label>
            <Input
              value={localSender}
              onChange={(e) => setLocalSender(e.target.value)}
              placeholder="Your Secret Admirer"
              className="font-body rounded-xl border-rose-light/50 focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Recipient name */}
          <div className="mb-6">
            <label className="block font-body text-sm font-medium text-foreground mb-2">
              Their Name (Recipient) 💕
            </label>
            <Input
              value={localRecipient}
              onChange={(e) => setLocalRecipient(e.target.value)}
              placeholder="My Love"
              className="font-body rounded-xl border-rose-light/50 focus:border-primary focus:ring-primary"
            />
          </div>

          {/* Love message */}
          <div className="mb-8">
            <label className="block font-body text-sm font-medium text-foreground mb-2">
              Your Love Message 💌
            </label>
            <Textarea
              value={localMessage}
              onChange={(e) => setLocalMessage(e.target.value)}
              placeholder="Write something from your heart..."
              rows={4}
              className="font-body rounded-xl border-rose-light/50 focus:border-primary focus:ring-primary resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleSave}
              variant="outline"
              className="flex-1 font-body rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 transition-all"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Saved!
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>

            <Button
              onClick={handlePreview}
              className="flex-1 romantic-gradient text-primary-foreground font-body font-semibold rounded-full shadow-romantic hover:scale-105 transition-all"
            >
              Preview Card
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Preview hint */}
        <div className="mt-6 text-center">
          <p className="font-body text-sm text-muted-foreground">
            You can always come back here to edit your message
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-8 flex items-center gap-2 text-muted-foreground/60">
          <span className="font-body text-sm">Made with</span>
          <Heart className="w-4 h-4 text-heart fill-heart animate-pulse-heart" />
          <span className="font-body text-sm">for your special someone</span>
        </footer>
      </div>
    </div>
  );
};

export default CustomizePage;
