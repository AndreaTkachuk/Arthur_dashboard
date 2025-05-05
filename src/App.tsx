import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Layout from "./components/Layout"
import AccountDetails from "./pages/AccountDetails"

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
      </Routes>
    </Router>
  )
}

export default App
