import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PostDetailView, MainView } from "./views";
import { Navbar } from "./common";
import "./assets/stylesheet/stylesheet.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/main/1" replace />} />
        <Route path="/main/:page" element={<MainView />} />
        <Route path="/post/:id" element={<PostDetailView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
