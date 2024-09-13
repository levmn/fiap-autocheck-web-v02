import { StyledButton } from "./Button.style";

interface ButtonProps {
    children: React.ReactNode;
    type: "button" | "submit" | "reset" | undefined;
    onClick: () => void;
}

export const Button = ({ children, type, onClick, ...rest }: ButtonProps) => {
    return (
        <StyledButton type={type} onClick={onClick} {...rest}>{children}</StyledButton>
    )
}