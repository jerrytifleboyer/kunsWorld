import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./routes/AboutMe";
import { Suggestions } from "./routes/Suggestions";
import { Merch } from "./routes/Merch";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="merch" element={<Merch />} />
        <Route path="suggestions" element={<Suggestions />} />
      </Route>
    </Routes>
  );
}
