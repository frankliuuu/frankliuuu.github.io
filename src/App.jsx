import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Academics } from "./components/Academics/Academics";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Academics />
      <Contact />
    </div>
  );
}

export default App;
