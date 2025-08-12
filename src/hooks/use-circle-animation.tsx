"use client";

import { useEffect, useState } from "react";

/**
 * Anima um círculo de progresso baseado no score (0 a 10).
 * @param score valor de 0 a 10
 * @param speed velocidade da animação (em segundos)
 * @param radius raio do círculo (padrão 15.9155 igual ao SVG)
 */

export function useCircleAnimation(score: number, speed = 1, radius = 15.9155) {
  const [progress, setProgress] = useState(0);
  const targetPercent = score * 10;
  const circumference = 2 * Math.PI * radius; 

  useEffect(() => {
    let start: number | null = null;

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / (speed * 1000); 
      const value = Math.min(targetPercent * elapsed, targetPercent);
      const dash = (value / 100) * circumference;

      setProgress(dash);

      if (value < targetPercent) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [score, speed, circumference, targetPercent]);

  return { progress, circumference };
}
