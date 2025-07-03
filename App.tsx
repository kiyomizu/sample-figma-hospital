import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Departments } from "./components/Departments"
import { Doctors } from "./components/Doctors"
import { ScheduleAccess } from "./components/ScheduleAccess"
import { News } from "./components/News"
import { Footer } from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Departments />
        <Doctors />
        <ScheduleAccess />
        <News />
      </main>
      <Footer />
    </div>
  )
}