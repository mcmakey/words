import * as React from "react";
import "./AppLayout.scss";

type AppProps = { 
    message: string 
}; 

const AppLayout: React.FC<AppProps> = ({ message }) => (
    <div className="layout">
        <div className="layout__top">
            <div className="layout__wrapper">
                header
            </div>
        </div>
        <div className="layout__content">
            <div className="layout__wrapper">
                content
            </div>
        </div>
    </div>  
);

export { AppLayout };