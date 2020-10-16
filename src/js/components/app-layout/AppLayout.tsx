import * as React from "react";
import { Header } from "js/components";
import "./AppLayout.scss";

const AppLayout: React.FC = () => (
    <div className="layout">
        <div className="layout__top">
            <div className="layout__wrapper">
                <Header />
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