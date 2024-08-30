import { useRef } from 'react'
import { Header } from "./components/header"
import { Banner } from "./components/sections/banner"
import { Section } from "./components/sections/section"
import sectionImg from './assets/img/section.jpg'

const sectionsElements = [
  {
    key: 'section1',
    title: 'solução de problemas',
    description: 'A Inteligência Artificial está aqui!',
    url: sectionImg
  },
  {
    key: 'section2',
    title: 'sobre o produto',
    description: 'A Inteligência Artificial está aqui!',
    url: sectionImg
  },
  {
    key: 'section3',
    title: 'suporte',
    description: 'A Inteligência Artificial está aqui!',
    url: sectionImg
  }
]

function App() {
  const sectionsRef = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
  };
  const scrollToSection = (section) => {
    sectionsRef[section].current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
   <>
    <Header scrollToSection={scrollToSection} />
    <Banner />
    {sectionsElements.map(element => (
      <Section
        sectionRef={sectionsRef[element.key]}
        key={element.key}
        title={element.title}
        description={element.description}
        bgUrl={element.url}
      />
    ))}
  
   </>
  )
}

export default App
