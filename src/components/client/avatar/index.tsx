"use client";

import styles from "./avatar.module.scss";
import { useState } from "react";

type AvatarProfileProps = {
  name?: string;
  surname?: string;
};

export default function AvatarProfile({ name, surname }: AvatarProfileProps) {
  const [hoverInfo, setHoverInfo] = useState<null | {
    label: string;
    x: number;
    y: number;
  }>(null);
  const letter = name?.substring(0, 1).toUpperCase();

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    label: string
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setHoverInfo({ label, x, y });
  };

  const handleMouseLeave = () => {
    setHoverInfo(null);
  };

  return (
    <div
      className={styles.avatar}
      onMouseMove={(e) => handleMouseMove(e, `${name} ${surname}`)}
      onMouseLeave={handleMouseLeave}
    >
      <span>{letter}</span>
      {hoverInfo && (
        <div
          className={styles.info}
          style={{
            top: hoverInfo.y,
            left: hoverInfo.x,
          }}
        >
          <p>{hoverInfo.label}</p>
        </div>
      )}
    </div>
  );
}
