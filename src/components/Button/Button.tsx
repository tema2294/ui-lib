import styles from "./Button.module.css";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps):JSX.Element => <button className={styles.button}>{props.label}</button>;

export default Button;