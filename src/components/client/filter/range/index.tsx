"use client";

import { ChangeEvent, useState } from "react";
import styles from "./range.module.scss";

type RangeProps = {
  label: {
    htmlFor: string;
    name: string;
  };
  input: {
    id: string;
    name: string;
    min: string;
    max: string;
    step: string;
    defaultValue?: string;
    value?: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
};

export function Range({ label, input }: RangeProps) {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
    input.onChange(e);
  };

  return (
    <fieldset className={styles.range}>
      <label htmlFor={label.htmlFor}>
        {label.name}: <span>{value}</span>
      </label>
      <input type="range" {...input} onChange={handleChange} />
    </fieldset>
  );
}
