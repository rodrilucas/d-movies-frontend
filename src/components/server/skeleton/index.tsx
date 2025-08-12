import React, { Fragment } from "react";
import styles from "./skeleton.module.scss";

type SkeletonProps = {
  quantity: number;
};

export function Skeleton({ quantity }: SkeletonProps) {
  const skeletons = Array(quantity).fill(0);

  return (
    <Fragment>
      {skeletons.map((_, idx) => (
        <div key={idx} role="status" className={styles.skeleton_card}>
          <div className={styles.skeleton_image}></div>

          <div className={styles.skeleton_rating}>
            <svg className={styles.svg} viewBox="0 0 36 36">
              <path
                className={styles.path_bg}
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={styles.path_fg}
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="100, 100"
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>

          <div className={styles.skeleton_text}>
            <div className={styles.line_full}></div>
            <div className={styles.line_short}></div>
            <div className={styles.line_short}></div>
            <div className={styles.line_short}></div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
