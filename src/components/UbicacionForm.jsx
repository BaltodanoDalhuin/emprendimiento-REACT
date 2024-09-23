

const UbicacionForm= () => {
  return (

      <div className="mapaCont">
          <div><h1>UBICACIÓN</h1></div>
          <iframe
              src="https://www.google.com/maps/embed/v1/place?q=heredia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"

          ></iframe>
      </div>
  )
}
export default UbicacionForm
