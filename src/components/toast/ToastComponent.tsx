import React from "react";

declare interface ToastComponentProps {
    children?: React.ReactNode | React.ReactNode[];
    ariaLabel?: string;
    dismissible?: boolean;
    showIcon?: boolean;
    type?: 'danger' | 'dark' | 'default' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning';
}

const ToastComponent: React.FC<ToastComponentProps> = (props: ToastComponentProps) => {
    return (
        <modus-toast
            aria-label={props.ariaLabel}
            dismissible={props.dismissible}
            show-icon={props.showIcon}
            type={props.type}>
            {props.children}
        </modus-toast>
    );
}

export default ToastComponent;
