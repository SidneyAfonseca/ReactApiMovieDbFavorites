import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreeen from "./pages/HomeScreen";
import FavoritesScreen from "./pages/FavoritesScreen";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreeen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
