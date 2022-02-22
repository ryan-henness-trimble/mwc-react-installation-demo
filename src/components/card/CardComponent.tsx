import React from "react";

// MWC Step 4: Wrap the Modus web component.
declare interface CardComponentProps {
    children?: React.ReactNode | React.ReactNode[];
    height?: string;
    width?: string;
}

const CardComponent: React.FC<CardComponentProps> = (props: CardComponentProps) => {
    return (
        <modus-card
            height={props.height}
            width={props.width}>
            {props.children}
        </modus-card>
    );
}

export default CardComponent;
