import styles from "./MyButton.module.css";

interface Props {
    children: string;
    color?: "primary" | "secondary" | "warning" | "danger";
    onClick: () => void; // Must specify fn signature
}

const MyButton = ({ children, onClick, color = "primary" }: Props) => {
    return (
        <button
            type="button"
            className={[styles.btn, styles["btn-" + color]].join(" ")}
            onClick={onClick}
            color={color}
        >
            {children}
        </button>
    );
};

export default MyButton;
