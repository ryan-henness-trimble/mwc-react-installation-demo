import React from "react";

declare interface ButtonComponentProps {
    buttonStyle?: 'borderless' | 'fill' | 'outline';
    children?: React.ReactNode | React.ReactNode[];
    color?: 'danger' | 'default' | 'primary' | 'secondary' | 'warning';
    disabled?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    size?: 'small' | 'medium' | 'large';
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => {
    return (
        <modus-button
            button-style={props.buttonStyle}
            color={props.color}
            disabled={props.disabled}
            onClick={(event: React.MouseEvent) => props.onClick ? props.onClick(event) : null}
            size={props.size}>
            {props.children}
        </modus-button>
    );
}

export default ButtonComponent;
