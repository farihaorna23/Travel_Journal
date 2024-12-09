import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"
function App() {
  return (
    <>
    <Header/>
    {data.map((entry) => {
      return <Entry key={entry.id}  
        imgSrc = {entry.img.src}
        imgAlt = {entry.img.alt}
        title = {entry.title}
        country = {entry.country}
        googleMapsLink = {entry.googleMapsLink}
        dates = {entry.dates}
        textInfo = {entry.text}
      />
    })}
    </>
  )
}

export default App
