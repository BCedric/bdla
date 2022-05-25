import React from 'react'

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context('../img/logos-partenaires', false, /\.(png|jpe?g|svg|webp)$/)
)
// const images = requuire.context(
//   '../img/logos-partenaires',
//   false,
//   /\.(png|jpe?g|svg)$/
// )

const Partenaires = () => {
  return (
    <div>
      <h1>Partenaires</h1>
      <div className="partenaires">
        {images.map((img) => (
          <img src={img.default} />
        ))}
        <div className="partenaire-text">
          <span>Pascale Roy-Dupuis</span>
        </div>
      </div>
    </div>
  )
}

export default Partenaires
