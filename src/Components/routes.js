import logoMalentendante from './../img/logo-malentendant.png'
export const routes = [
  { label: 'Accueil', route: '/' },
  { label: 'Festival', route: '/festival' },
  { label: 'Vendredi', route: '/vendredi' },
  { label: 'Samedi', route: '/samedi' },
  { label: 'Infos', route: '/infos' },
  { label: 'Remerciements', route: '/remerciements' },
  { label: 'Partenaires', route: '/partenaires' },
  {
    label: (
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '0.5em' }}>Malentendants</span>
        <img class="logo-malentendant" src={logoMalentendante} />
      </span>
    ),
    route: '/gilets-vibrants'
  },
  { label: 'Contact', route: '/contact' }
]
