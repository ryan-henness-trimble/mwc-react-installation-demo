import React from "react";

declare interface BadgeComponentProps {
    children?: React.ReactNode | React.ReactNode[];
    color?: 'danger' | 'dark' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning';
    size?: 'small' | 'medium' | 'large';
    type?: 'counter' | 'default' | 'text';
}

const BadgeComponent: React.FC<BadgeComponentProps> = (props: BadgeComponentProps) => {
    return (
        <modus-badge
            color={props.color}
            size={props.size}
            type={props.type}>
            {props.children}
        </modus-badge>
    );
}

export default BadgeComponent;
