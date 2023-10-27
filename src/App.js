import {useState,useEffect} from "react"
import './App.css';

function App() {
  const [quotes,setQuotes]=useState([])
  const [quote,setQuote]=useState(null)
  useEffect(()=>{
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((json)=>{
      setQuotes(json)
      setQuote(json[0])
    })
  },[])
  const getRandomQuotes=(quotes)=>{
    return quotes[Math.floor(Math.random()*quotes.length)]
  }
  const getNewQuote=()=>{
    setQuote(getRandomQuotes(quotes))
}
  return (
    <div>
      <main>
        <h1>Quotes</h1>
        <section>
          <button onClick={getNewQuote}New Quote Here></button>
          <h3>
            <span>"</span>
            {quote?.text}
          </h3>
          <i>-{quote?.author}</i>
        </section>
      </main>
    </div>
  );
}

export default App;
