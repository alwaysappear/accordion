import faqs from './data'
import Faq from "./components/Faq"

function App() {

  return (
    <main className="card">
      <h3 className="md:text-2xl">
        questions and answers about login
      </h3>
      <section className="cards-container">
        {faqs.map(faq => (
          <Faq {...faq} key={faq.id} />
        ))}
      </section>
    </main>
  )
}

export default App