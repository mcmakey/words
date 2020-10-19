import React from 'react';
import { AppLayout } from "js/components";
import 'styles/App.scss';
import { data } from "db";

function App() {
  return (
    <AppLayout words={data} />
  );
}

export default App;
