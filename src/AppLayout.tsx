import * as React from "react";

type AppProps = { 
    message: string 
}; 

const AppLayout: React.FC<AppProps> = ({ message }) => (
    <div>{message}</div>
);

export { AppLayout };