import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import AccountDetails from "./pages/AccountDetails";
import Note from "./pages/Note";
import Brockers from "./pages/Brockers";
import Submissions from "./pages/Submissions";
import Organizations from "./pages/Organizations";
import Goals from "./pages/Goals";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/accounts/:id"
          element={
            <Layout>
              <AccountDetails />
            </Layout>
          }
        />
        <Route
          path="/brockers"
          element={
            <Layout>
              <Brockers />
            </Layout>
          }
        />
        <Route
          path="/submissions"
          element={
            <Layout>
              <Submissions />
            </Layout>
          }
        />
        <Route
          path="/organizations"
          element={
            <Layout>
              <Organizations />
            </Layout>
          }
        />
        <Route
          path="/goals"
          element={
            <Layout>
              <Goals />
            </Layout>
          }
        />
        <Route
          path="/note"
          element={
            <Layout>
              <Note />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
