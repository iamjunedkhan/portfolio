import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './Components/Navbar'
import Section from './Components/Section'
import Projects from './Components/Projects'
import Skiils from './Components/Skiils'
import Contact from './Components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar />
      <Section />
      <Projects />
      <Skiils />
      <Contact />
    </main>
  )
}
