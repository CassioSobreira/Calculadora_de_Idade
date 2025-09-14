import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/Layout";
import FormPage from "./paginas/FormPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FormPage mode="age" />} />
        <Route path="evento-futuro" element={<FormPage mode="event" />} />
      </Route>
    </Routes>
  );
}

export default App;
