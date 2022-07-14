import Header from "./components/Header"
import ValidityCard from "./components/ValidityCard"


function App() {
  return (
    <>
    <Header/>
    <main>
      <section id="validity">
        <div className="container">
          <ValidityCard />
        </div>
      </section>
    </main>
    </>
  )
}

export default App
