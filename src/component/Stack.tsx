import {
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion"; // Changed from 'motion/react' to standard 'framer-motion'
import { useEffect, useState, useMemo } from "react";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
  disableDrag = false,
}: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_event: any, info: PanInfo) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
      // Reset position for when this card eventually comes back to the front
      x.set(0);
      y.set(0);
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cards?: React.ReactNode[];
  animationConfig?: { stiffness: number; damping: number };
  onCardChange?: (id: number) => void;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  onCardChange,
}: StackProps) {
  // 1. Initialize the stack only once using useMemo or a functional state initializer
  const initialStack = useMemo(() => 
    cards.map((content, index) => ({ id: index, content })), 
  []);

  const [stack, setStack] = useState(initialStack);

  // 2. CRITICAL: Fixed rotation logic
  const sendToBack = (id: number) => {
    setStack((prev) => {
      const newStack = [...prev];
      // Find the card being dragged (usually the last one in the array)
      const cardIndex = newStack.findIndex((c) => c.id === id);
      const [movedCard] = newStack.splice(cardIndex, 1);
      
      // Move it to the bottom of the stack (start of array)
      newStack.unshift(movedCard);
      
      // The NEW top card is now the one at the end of the array
      const topCard = newStack[newStack.length - 1];
      if (onCardChange) {
        onCardChange(topCard.id);
      }
      
      return newStack;
    });
  };

  return (
    <div 
      className="relative w-full h-full" 
      style={{ perspective: 1000 }}
    >
      {stack.map((card, index) => {
        // We use a fixed seed for rotation based on ID so it doesn't jitter
        const rotation = randomRotation ? (card.id * 1337 % 10) - 5 : 0;
        
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="w-full h-full"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                // Cards at the end of the array are "on top"
                rotateZ: (index - (stack.length - 1)) * 4 + rotation,
                scale: 1 - (stack.length - 1 - index) * 0.05,
                zIndex: index,
                opacity: index < stack.length - 3 ? 0 : 1, // Only show top 3 for performance
              }}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}