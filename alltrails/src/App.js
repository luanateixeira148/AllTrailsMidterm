import React from "react";
import "./App.scss";
import NotePage from './pages/NotePage';
import TopMenu from './comps/TopMenu';
import BottomMenu from "./comps/BottomMenu";


function App() {

  return (
    <div className="App">
      <TopMenu />
      <NotePage />
      <BottomMenu />
    </div>
  );
}

export default App;