import Contact from '../pages/LandingPage/Contact'
import Header from '../pages/LandingPage/Header'
import Hero from '../pages/LandingPage/Hero'
import Projects from '../pages/LandingPage/projects/Projects'
import Skills from '../pages/LandingPage/Skills'

const main = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default main