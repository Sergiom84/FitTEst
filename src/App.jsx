import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import Profile from './pages/Profile'
import Methodologies from './pages/Methodologies'
import Routines from './pages/Routines'
import Nutrition from './pages/Nutrition'
import Injuries from './pages/Injuries'
import Progress from './pages/Progress'
import Settings from './pages/Settings'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/methodologies" element={<Methodologies />} />
              <Route path="/routines" element={<Routines />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/injuries" element={<Injuries />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
