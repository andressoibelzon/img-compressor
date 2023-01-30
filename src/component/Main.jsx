import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';


const Main = () => {
  return (
    <div className='' >
      <div className='d-flex flex-column justify-content-center align-items-center border rounded-4 mb-3' style={{ height: "50vh" }}>
        <div className='d-flex flex-row justify-content-between my-3'>
          <div>73%</div>
          {/* barra  */}
          <div className="progress mx-3">
            <div className="progress-bar" role="progressbar" aria-valuenow="30"
              aria-valuemin="0" aria-valuemax="100" style={{ width: "300px", backgroundColor:"#662D91"}}>
              <span className="sr-only"></span>
            </div>
          </div>
          {/* ---------- */}
          <div>27%</div>
        </div>

        <div className='d-flex flex-row justify-content-between'>

          <div className='d-flex flex-column align-items-center px-4'>
            <div className='display-6' id='num'>738.512</div>
            <div>Imágenes encontradas</div>
          </div>
          <div className='d-flex flex-column align-items-center px-4'>
            <div className='display-6' id='num'>214.300</div>
            <div>Imágenes optimizadas</div>
          </div>

        </div>
        <div className='btn btn-primary rounded-4 my-3 px-4 py-2 shadow-sm'>
          Optimizar Imágenes
        </div>
      </div>

      <div className="input-group flex-nowrap ">
        <span className="input-group-text bg-white " id="addon-wrapping"><BiSearchAlt2 /></span>
        <input type="text" className="form-control " placeholder="Buscador inteligente de imagenes" aria-label="Username" aria-describedby="addon-wrapping" />
      </div>
    </div>


  )
}

export default Main

// justify-content-around
// align-items-center