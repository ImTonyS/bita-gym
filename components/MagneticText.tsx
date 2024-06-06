"useClient";
import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  ReactNode,
  HTMLAttributes,
  ElementType,
} from "react";
import { useMouse } from "react-use";
import { useSpring } from "framer-motion";

const Group = ({
  children,
  className,
  body,
  ...props
}: {
  children: (tokens: string[]) => ReactNode;
  className: string;
  body: string;
  props?: unknown;
}) => {
  const tokens = useMemo(() => body.split(""), [body]);

  return (
    <div className={className} {...props}>
      {children(tokens)}
    </div>
  );
};

export interface TokenProps extends HTMLAttributes<HTMLElement> {
  min?: number;
  max?: number;
  threshold?: number;
  body: string;
  className?: string;
  as?: ElementType;
}

function Token({
  min = 300,
  max = 900,
  threshold = 300,
  body,
  className,
  as: Component = "span",
  ...props
}: TokenProps) {
  const container = useRef<HTMLSpanElement>(null);

  const { elX, elY, elW, elH } = useMouse(container);

  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), [elX]);

  const [previous, setPrevious] = useState(min);
  const [transitioning, setTransitioning] = useState(false);

  const fontWeightSpring = useSpring(min, { duration: 100 });

  function animate(value: number) {
    setTransitioning(true);

    fontWeightSpring.set(value);

    setTimeout(() => setTransitioning(false), 100);
  }

  useEffect(() => {
    let targetValue = min;

    if (!ready || !container.current || elY < 0 || elY > elH) {
      targetValue = min;
    } else {
      const lambda = Math.abs(elX - elW / 2);
      const value = (threshold - lambda) / threshold;
      targetValue = Math.round(Math.min(Math.max(value * max, min), max));
    }

    if (previous === min && targetValue > min) {
      animate(targetValue);
    } else if (previous > min && targetValue === min) {
      animate(targetValue);
    } else if (!transitioning) {
      fontWeightSpring.jump(targetValue);
    }

    setPrevious(targetValue);
  }, [elX, elY, elW, elH, min, max, threshold, ready, previous, transitioning]);

  return (
    <Component
      ref={container}
      className={className}
      style={{ fontWeight: fontWeightSpring.get() | 100 }}
      {...props}
    >
      {body}
    </Component>
  );
}

export const MagneticText = Object.assign(Group, { Token });
