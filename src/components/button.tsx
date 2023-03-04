import { Button } from "react-bootstrap";
import styles from "./button.module.css"

interface CustomButtonProps {
    onClick?: (() => void) | ((e: any) => void);
    className?: string;
    text: string;
    type?: "submit" | "button";
}

export default function CustomButton({ onClick, text, type, className }: CustomButtonProps) {
    if (className) className += ` ${styles.customBtn}`;
    else className = styles.customBtn;
    className += " shadow";

    return (
        <>
            <Button type={type} onClick={onClick}>
                {text}
            </Button>
        </>
    )
}