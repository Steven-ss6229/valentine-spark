import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: "heart" | "circle" | "star";
  color: string;
}

const colors = [
  "hsl(350, 80%, 60%)",
  "hsl(350, 70%, 75%)",
  "hsl(0, 85%, 55%)",
  "hsl(40, 80%, 55%)",
  "hsl(350, 60%, 50%)",
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const generateConfetti = () => {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 50; i++) {
        newPieces.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 0.5,
          duration: 2 + Math.random() * 2,
          size: 8 + Math.random() * 16,
          rotation: Math.random() * 360,
          type: ["heart", "circle", "star"][Math.floor(Math.random() * 3)] as "heart" | "circle" | "star",
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setPieces(newPieces);
    };

    generateConfetti();
  }, []);

  const renderPiece = (piece: ConfettiPiece) => {
    if (piece.type === "heart") {
      return (
        <Heart
          className="fill-current"
          style={{
            width: piece.size,
            height: piece.size,
            color: piece.color,
          }}
        />
      );
    }
    if (piece.type === "circle") {
      return (
        <div
          className="rounded-full"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
          }}
        />
      );
    }
    return (
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: `${piece.size / 2}px solid transparent`,
          borderRight: `${piece.size / 2}px solid transparent`,
          borderBottom: `${piece.size}px solid ${piece.color}`,
        }}
      />
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        >
          {renderPiece(piece)}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
