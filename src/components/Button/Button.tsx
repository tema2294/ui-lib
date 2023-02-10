import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return <button className={styles.button}>{props.label}</button>;
};

export default Button;