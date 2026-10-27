import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { PricingPage } from './pages/PricingPage'
import { WebsiteFixesPage } from './pages/WebsiteFixesPage'
import { PlatformHelpPage } from './pages/PlatformHelpPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/website-fixes" element={<WebsiteFixesPage />} />
        <Route path="/platform-help" element={<PlatformHelpPage />} />
      </Route>
    </Routes>
  )
}
