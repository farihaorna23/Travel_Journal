import locationLogo from "../assets/img/marker.png"
const Entry = (props) => {
  return(
    <>
      <section className="journal-entry">
        <div className="main-img-container">
          <img className="main-img" src={props.imgSrc} alt={props.imgAlt}/>
        </div>
        <div className="country-information-container">
         <img src={locationLogo} alt="locator-logo"/>
         <span>{props.country}</span>
         <a href={props.googleMapsLink}>View on Google Maps</a>
         <h2>{props.title}</h2>
         <p>{props.dates}</p>
         <p>{props.textInfo}</p>
        </div>
      </section>
    </>
  )
}

export default Entry;