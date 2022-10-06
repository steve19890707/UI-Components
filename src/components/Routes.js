import { Routes, Route, Navigate } from "react-router-dom";
// common
import { Layout } from "./Common/Layout";
// component
import { Home } from "./Home";
import { Doc } from "./Doc";
import { Components } from "./Components";
export const AppRoutes = () => {
  return <Layout >
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/doc" element={<Doc />} />
      <Route exact path="/components" element={<Components />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  </Layout>
}
