import React from 'react'

function importAll(r) {
  return r.keys().map(r)
}

const images = importAll(
  require.context('../img/logos-partenaires', false, /\.(png|jpe?g|svg|webp)$/)
)

const partenairesTxt = [
  'La Caravelle',
  'Orthophoniste Fanny Travart',
  'Docteur Roy-Dupuis'
]

const Partenaires = () => {
  return (
    <div>
      <h1>Partenaires</h1>
      <div className="partenaires">
        {images.map((img) => (
          <img src={img} />
        ))}
        {partenairesTxt.map((p, i) => (
          <span className="partenaire-text" key={i}>
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Partenaires
