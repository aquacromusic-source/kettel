// Données produits réelles scrapées depuis mykettel.com
// Prix, noms et descriptions reformulés pour STRAP.

export interface Product {
  id: string
  handle: string
  title: string
  subtitle: string
  price: number
  comparePrice?: number
  description: string
  fullDescription: string
  sport: string
  category: 'signature' | 'prestige' | 'massif' | 'cordon'
  finish: string
  badge?: string
  images: string[]
  thumbImage: string
  heroImage: string
  cordColors: string[]
  featured: boolean
  tags: string[]
  specs: { key: string; value: string }[]
}

export const PRODUCTS: Product[] = [
  // ── BEST-SELLERS ──────────────────────────────────────────────────
  {
    id: 'football-argent',
    handle: 'le-terrain-football',
    title: 'Le Terrain',
    subtitle: 'Football · Plaqué Argent',
    price: 49,
    comparePrice: 59,
    description: 'Le bracelet des passionnés de football. Pendentif ballon gravé plaqué argent brossé, sur cordon tressé interchangeable.',
    fullDescription: 'Taillé pour ceux qui vivent le football au-delà du match. Le Terrain associe un pendentif ballon en acier plaqué argent brossé 10 microns à un cordon polyester tressé 2,2mm fabriqué en France. Gravure personnalisée disponible.',
    sport: 'football',
    category: 'signature',
    finish: 'Plaqué Argent Brossé 10 microns',
    badge: 'Best-seller',
    images: [
      '/images/products/football-argent-wrist.png',
      '/images/products/football-argent-bbl.png',
      '/images/products/football-argent-noir.png',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/football-argent-hero.jpg',
    heroImage: '/images/products/football-argent-wrist.png',
    cordColors: ['kaki', 'marine', 'noir', 'rose', 'turquoise', 'rouge', 'blanc', 'gris'],
    featured: true,
    tags: ['football', 'argent', 'best-seller', 'sport'],
    specs: [
      { key: 'Pendentif', value: 'Acier plaqué argent brossé 10 microns' },
      { key: 'Diamètre', value: '10 mm' },
      { key: 'Cordon', value: 'Polyester tressé 2,2mm — France' },
      { key: 'Taille', value: 'Réglable 15–21 cm' },
      { key: 'Étanchéité', value: 'Résiste à l\'eau' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },
  {
    id: 'basketball-argent',
    handle: 'le-ballon-basketball',
    title: 'Le Ballon',
    subtitle: 'Basketball · Plaqué Argent',
    price: 49,
    comparePrice: 59,
    description: 'Le bracelet des amoureux du basketball. Pendentif ballon en plaqué argent brossé sur cordon coloré.',
    fullDescription: 'Pour les passionnés de basketball, ce bracelet sport associe un pendentif ballon finement détaillé en argent brossé à un cordon polyester haute résistance. Disponible dans 8 coloris de cordon.',
    sport: 'basketball',
    category: 'signature',
    finish: 'Plaqué Argent Brossé',
    badge: 'Top choix',
    images: [
      '/images/products/basketball-argent-wrist.png',
      '/images/products/basketball-argent-marine.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/basketball-argent-hero.jpg',
    heroImage: '/images/products/basketball-argent-wrist.png',
    cordColors: ['kaki', 'marine', 'noir', 'rose', 'turquoise', 'rouge', 'blanc', 'gris'],
    featured: true,
    tags: ['basketball', 'argent', 'sport'],
    specs: [
      { key: 'Pendentif', value: 'Acier plaqué argent brossé 10 microns' },
      { key: 'Diamètre', value: '10 mm' },
      { key: 'Cordon', value: 'Polyester tressé 2,2mm — France' },
      { key: 'Taille', value: 'Réglable 15–21 cm' },
      { key: 'Étanchéité', value: 'Résiste à l\'eau' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },
  {
    id: 'tennis-argent',
    handle: 'la-raquette-tennis',
    title: 'La Raquette',
    subtitle: 'Tennis · Plaqué Argent',
    price: 49,
    comparePrice: 59,
    description: 'Le bracelet des amoureux du tennis. Pendentif raquette plaqué argent sur cordon tressé polyester.',
    fullDescription: 'Conçu pour les tennismen et tenniswomen qui portent leur passion au poignet. Pendentif raquette en argent brossé, cordon technique interchangeable en moins de 5 secondes.',
    sport: 'tennis',
    category: 'signature',
    finish: 'Plaqué Argent Brossé',
    images: [
      '/images/products/tennis-argent-hero.jpg',
      '/images/products/tennis-argent-noir.png',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/tennis-argent-hero.jpg',
    heroImage: '/images/products/tennis-argent-noir.png',
    cordColors: ['kaki', 'marine', 'noir', 'rose', 'turquoise', 'rouge', 'blanc', 'gris'],
    featured: true,
    tags: ['tennis', 'argent', 'sport'],
    specs: [
      { key: 'Pendentif', value: 'Acier plaqué argent brossé 10 microns' },
      { key: 'Diamètre', value: '10 mm' },
      { key: 'Cordon', value: 'Polyester tressé 2,2mm — France' },
      { key: 'Taille', value: 'Réglable 15–21 cm' },
      { key: 'Étanchéité', value: 'Résiste à l\'eau' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },
  {
    id: 'rugby-argent',
    handle: 'lovalie-rugby',
    title: 'L\'Ovalie',
    subtitle: 'Rugby · Plaqué Argent',
    price: 49,
    comparePrice: 59,
    description: 'Le bracelet des rugbymen et rugbywomen. Pendentif ballon ovale plaqué argent, cordon tressé made in France.',
    fullDescription: 'Pour les amoureux de l\'ovalie, ce bracelet sport allie un pendentif ballon rugby en acier plaqué argent à un cordon technique fabriqué en France. Parfait pour le terrain comme les tribunes.',
    sport: 'rugby',
    category: 'signature',
    finish: 'Plaqué Argent Brossé',
    images: [
      '/images/products/rugby-argent-wrist.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/rugby-argent-hero.jpg',
    heroImage: '/images/products/rugby-argent-wrist.jpg',
    cordColors: ['kaki', 'marine', 'noir', 'rose', 'turquoise', 'rouge', 'blanc', 'gris'],
    featured: false,
    tags: ['rugby', 'argent', 'sport'],
    specs: [
      { key: 'Pendentif', value: 'Acier plaqué argent brossé 10 microns' },
      { key: 'Diamètre', value: '20 mm' },
      { key: 'Cordon', value: 'Polyester tressé 2mm — France' },
      { key: 'Taille', value: 'Réglable 15–21 cm' },
      { key: 'Atelier', value: 'Fabriqué en France' },
    ],
  },

  // ── PRESTIGE (PVD / Revêtement) ───────────────────────────────────
  {
    id: 'rugby-gold',
    handle: 'lovalie-rugby-gold',
    title: 'L\'Ovalie Gold',
    subtitle: 'Rugby · Revêtement PVD Or',
    price: 69,
    description: 'La version prestige du bracelet rugby. Pendentif ballon avec revêtement PVD Or — durabilité et résistance hors du commun.',
    fullDescription: 'Le bracelet rugby en version Gold représente l\'excellence du sport. Revêtement PVD Or 18 carats sur pendentif diamètre 20mm, associé à un cordon tressé technique 2mm fabriqué en France. Anti-rayures, résiste à l\'eau.',
    sport: 'rugby',
    category: 'prestige',
    finish: 'PVD Or 18 carats',
    badge: 'Prestige',
    images: [
      '/images/products/rugby-gold-wrist.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/rugby-gold-hero.png',
    heroImage: '/images/products/rugby-gold-wrist.jpg',
    cordColors: ['noir', 'marine', 'kaki', 'rouge', 'gris', 'blanc'],
    featured: true,
    tags: ['rugby', 'gold', 'prestige', 'pvd'],
    specs: [
      { key: 'Pendentif', value: 'Acier revêtement PVD Or 18 carats' },
      { key: 'Diamètre', value: '20 mm' },
      { key: 'Cordon', value: 'Polyester tressé 2mm — France' },
      { key: 'Résistance', value: 'Anti-rayures, waterproof' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },
  {
    id: 'golf-platine',
    handle: 'le-green-golf-platine',
    title: 'Le Green',
    subtitle: 'Golf · Plaqué Platine',
    price: 65,
    description: 'Le bracelet des golfeurs et golfeuses qui allient élégance et performance. Pendentif balle de golf plaqué platine.',
    fullDescription: 'Pensé pour le green comme le clubhouse, ce bracelet golf incarne la sobriété et l\'élégance. Pendentif balle de golf en acier plaqué platine, cordon tressé technique disponible en plusieurs coloris.',
    sport: 'golf',
    category: 'prestige',
    finish: 'Plaqué Platine',
    images: [
      '/images/products/golf-platine-wrist.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/golf-platine-hero.jpg',
    heroImage: '/images/products/golf-platine-wrist.jpg',
    cordColors: ['kaki', 'marine', 'noir', 'rose', 'turquoise', 'blanc'],
    featured: true,
    tags: ['golf', 'platine', 'sport', 'elegant'],
    specs: [
      { key: 'Pendentif', value: 'Acier revêtement PVD Platine' },
      { key: 'Diamètre', value: '10 mm' },
      { key: 'Cordon', value: 'Polyester tressé 2mm — France' },
      { key: 'Résistance', value: 'Anti-rayures, waterproof' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },
  {
    id: 'golf-gold',
    handle: 'le-green-golf-gold',
    title: 'Le Green Or',
    subtitle: 'Golf · PVD Or 18 carats',
    price: 69,
    description: 'Balle de golf en finition Or 18 carats. Pour les golfeurs qui jouent autant l\'élégance que le par.',
    fullDescription: 'Le bracelet golf Gold — revêtement PVD Or 18 carats sur pendentif diamètre 10mm. Durabilité et éclat, anti-rayures, résistant à l\'eau. Cordon 2mm fabriqué en France.',
    sport: 'golf',
    category: 'prestige',
    finish: 'PVD Or 18 carats',
    badge: 'Nouveau',
    images: [
      '/images/products/golf-gold-wrist.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/golf-gold-hero.jpg',
    heroImage: '/images/products/golf-gold-wrist.jpg',
    cordColors: ['noir', 'marine', 'kaki', 'blanc'],
    featured: false,
    tags: ['golf', 'gold', 'prestige', 'pvd'],
    specs: [
      { key: 'Pendentif', value: 'Acier revêtement PVD Or 18 carats' },
      { key: 'Diamètre', value: '10 mm' },
      { key: 'Cordon', value: 'Polyester tressé 2mm — France' },
      { key: 'Résistance', value: 'Anti-rayures, waterproof' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },

  // ── KETTLEBELL (fitness/muscu) ─────────────────────────────────────
  {
    id: 'kettlebell-inox',
    handle: 'la-fonte-kettlebell-inox',
    title: 'La Fonte',
    subtitle: 'Fitness · Inox 316L',
    price: 79,
    description: 'Symbole de puissance et d\'acharnement, le pendentif kettlebell en acier inoxydable 316L. La version sport ultime.',
    fullDescription: 'L\'inox 316L hypoallergénique et sa résistance exceptionnelle au quotidien. Ce bracelet kettlebell est fait pour les athlètes sérieux — crossfit, musculation, fonctionnel. Pendentif massif, cordon technique.',
    sport: 'muscu',
    category: 'prestige',
    finish: 'Acier Inoxydable 316L',
    badge: 'Premium',
    images: [
      '/images/products/kettlebell-inox-hero.jpg',
      '/images/products/kettlebell-inox-2.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/kettlebell-inox-hero.jpg',
    heroImage: '/images/products/kettlebell-inox-2.jpg',
    cordColors: ['noir', 'marine', 'kaki', 'rouge', 'gris', 'blanc', 'turquoise'],
    featured: true,
    tags: ['fitness', 'inox', 'crossfit', 'musculation', 'premium'],
    specs: [
      { key: 'Pendentif', value: 'Acier Inoxydable 316L hypoallergénique' },
      { key: 'Cordon', value: 'Polyester tressé technique — France' },
      { key: 'Taille', value: 'Réglable 15–22 cm' },
      { key: 'Étanchéité', value: 'Résiste eau, transpiration, chlore' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },
  {
    id: 'kettlebell-gold',
    handle: 'la-fonte-kettlebell-gold',
    title: 'La Fonte Or',
    subtitle: 'Fitness · Doré Or 24 carats',
    price: 69,
    description: 'Le kettlebell doré à l\'or fin 24 carats. Pour ceux qui ne font pas les choses à moitié.',
    fullDescription: 'Doré à l\'or fin 24 carats, ce bracelet kettlebell incarne la puissance avec élégance. L\'accessoire des plus grands crossfiteurs, porté au quotidien du terrain au bureau.',
    sport: 'muscu',
    category: 'prestige',
    finish: 'Doré Or Fin 24 carats',
    images: [
      '/images/products/kettlebell-gold-wrist.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/kettlebell-gold-hero.jpg',
    heroImage: '/images/products/kettlebell-gold-wrist.jpg',
    cordColors: ['noir', 'marine', 'kaki', 'corail', 'rouge', 'taupe'],
    featured: false,
    tags: ['fitness', 'gold', 'crossfit', 'musculation'],
    specs: [
      { key: 'Pendentif', value: 'Doré or fin 24 carats' },
      { key: 'Cordon', value: 'Polyester tressé mat — France' },
      { key: 'Taille', value: 'Réglable 15–22 cm' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },
  {
    id: 'kettlebell-rosegold',
    handle: 'la-fonte-kettlebell-rose-gold',
    title: 'La Fonte Rose',
    subtitle: 'Fitness · Doré Or Rose 18 carats',
    price: 65,
    description: 'Le kettlebell en version or rose 18 carats. Puissance et féminité, sans compromis.',
    fullDescription: 'Doré à l\'or fin rose 18 carats, ce bracelet kettlebell allie puissance sportive et esthétique raffinée. Pour celles et ceux qui repoussent leurs limites avec style.',
    sport: 'muscu',
    category: 'prestige',
    finish: 'Doré Or Rose 18 carats',
    images: [
      '/images/products/kettlebell-rosegold-wrist.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/kettlebell-rosegold-hero.jpg',
    heroImage: '/images/products/kettlebell-rosegold-wrist.jpg',
    cordColors: ['noir', 'rose', 'corail', 'turquoise', 'gris'],
    featured: false,
    tags: ['fitness', 'rose-gold', 'crossfit', 'musculation'],
    specs: [
      { key: 'Pendentif', value: 'Doré or rose 18 carats' },
      { key: 'Cordon', value: 'Polyester tressé mat — France' },
      { key: 'Taille', value: 'Réglable 15–22 cm' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },

  // ── BOXE ──────────────────────────────────────────────────────────
  {
    id: 'boxe-argent',
    handle: 'le-gant-boxe',
    title: 'Le Gant',
    subtitle: 'Boxe · Plaqué Argent',
    price: 49,
    description: 'Le bracelet des boxeurs. Pendentif gant de boxe plaqué argent sur cordon tressé technique.',
    fullDescription: 'Pour les guerriers du ring et de la salle. Pendentif gant de boxe en acier plaqué argent brossé, cordon polyester tressé 2,2mm fabriqué en France. Résiste à l\'eau et à la transpiration.',
    sport: 'boxe',
    category: 'signature',
    finish: 'Plaqué Argent Brossé',
    images: [
      '/images/products/boxe-argent-hero.jpg',
      '/images/products/boxe-cordon-hero.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/boxe-argent-hero.jpg',
    heroImage: '/images/products/boxe-cordon-hero.jpg',
    cordColors: ['noir', 'rouge', 'marine', 'kaki', 'gris', 'blanc'],
    featured: false,
    tags: ['boxe', 'argent', 'sport', 'combat'],
    specs: [
      { key: 'Pendentif', value: 'Acier plaqué platine 10 microns' },
      { key: 'Diamètre', value: '17 mm' },
      { key: 'Cordon', value: 'Polyester tressé 2,2mm — France' },
      { key: 'Taille', value: 'Réglable 15–21 cm' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },

  // ── DISQUE OLYMPIQUE ─────────────────────────────────────────────
  {
    id: 'disque-rosegold',
    handle: 'le-disque-olympique-rose-gold',
    title: 'Le Disque',
    subtitle: 'Athlétisme · Or Rose 18 carats',
    price: 89,
    comparePrice: 109,
    description: 'Une pièce au caractère affirmé — le Disque Olympique en finition or rose 18 carats.',
    fullDescription: 'Affirmez votre exigence avec une pièce où la puissance rencontre une esthétique maîtrisée. Le bracelet Disque Olympique en finition or rose 18 carats incarne une vision contemporaine du sport et du luxe.',
    sport: 'muscu',
    category: 'prestige',
    finish: 'Or Rose 18 carats',
    badge: 'Pièce unique',
    images: [
      '/images/products/disque-rosegold-hero.jpg',
      '/images/products/disque-rosegold-2.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/disque-rosegold-hero.jpg',
    heroImage: '/images/products/disque-rosegold-2.jpg',
    cordColors: ['noir', 'marine', 'kaki', 'rose', 'blanc'],
    featured: true,
    tags: ['athletisme', 'rose-gold', 'prestige', 'luxe'],
    specs: [
      { key: 'Finition', value: 'Or Rose 18 carats' },
      { key: 'Pendentif', value: 'Disque Olympique — inox premium' },
      { key: 'Cordon', value: 'Polyester tressé technique' },
      { key: 'Taille', value: 'Réglable' },
      { key: 'Garantie', value: '2 ans' },
    ],
  },
  {
    id: 'disque-gold',
    handle: 'le-disque-olympique-gold',
    title: 'Le Disque Or',
    subtitle: 'Athlétisme · Or 18 carats',
    price: 89,
    description: 'Le Disque Olympique en finition or 18 carats. Vision contemporaine de la performance et du style.',
    fullDescription: 'Une vision contemporaine de la performance. Le bracelet Disque Olympique en finition or 18 carats incarne l\'excellence sportive et l\'esthétique maîtrisée.',
    sport: 'muscu',
    category: 'prestige',
    finish: 'Or 18 carats',
    images: [
      '/images/products/disque-gold-hero.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/disque-gold-hero.jpg',
    heroImage: '/images/products/disque-gold-hero.jpg',
    cordColors: ['noir', 'marine', 'kaki', 'blanc'],
    featured: false,
    tags: ['athletisme', 'gold', 'prestige', 'luxe'],
    specs: [
      { key: 'Finition', value: 'Or 18 carats' },
      { key: 'Pendentif', value: 'Disque Olympique — inox premium' },
      { key: 'Cordon', value: 'Polyester tressé technique' },
      { key: 'Garantie', value: '2 ans' },
    ],
  },

  // ── ARGENT MASSIF 925 ────────────────────────────────────────────
  {
    id: 'football-massif',
    handle: 'le-terrain-football-massif',
    title: 'Le Terrain 925',
    subtitle: 'Football · Argent Massif 925',
    price: 95,
    description: 'Le bracelet football en argent massif 925, poinçon certifié. Pour les amoureux du football exigeants.',
    fullDescription: 'Le bracelet des amoureux et amoureuses du football en version mini et argent massif certifié. Pendentif ballon en argent massif 925 (poinçon certifié), cordon polyester tressé fabriqué en France.',
    sport: 'football',
    category: 'massif',
    finish: 'Argent Massif 925 certifié',
    badge: 'Argent massif',
    images: [
      '/images/products/football-massif-hero.png',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/football-massif-hero.png',
    heroImage: '/images/products/football-massif-hero.png',
    cordColors: ['noir', 'marine', 'kaki', 'blanc', 'rouge'],
    featured: false,
    tags: ['football', 'argent-massif', '925', 'premium'],
    specs: [
      { key: 'Métal', value: 'Argent massif 925 poinçon certifié' },
      { key: 'Diamètre', value: '8 mm' },
      { key: 'Cordon', value: 'Polyester tressé — France' },
      { key: 'Taille', value: 'Réglable 15–21 cm' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },

  // ── HANDBALL ─────────────────────────────────────────────────────
  {
    id: 'handball-argent',
    handle: 'le-sept-handball',
    title: 'Le Sept',
    subtitle: 'Handball · Plaqué Argent',
    price: 49,
    description: 'Le bracelet des handballeurs et handballeuses. Pendentif ballon de handball plaqué argent.',
    fullDescription: 'Pour les joueurs de handball qui veulent porter leur passion au poignet. Bracelet sur cordon avec pendentif en forme de ballon de handball, argent plaqué 10 microns. Diamètre 10mm, cordon polyester 2,2mm France.',
    sport: 'basketball',
    category: 'signature',
    finish: 'Plaqué Argent 10 microns',
    images: [
      '/images/products/handball-argent-hero.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/handball-argent-hero.jpg',
    heroImage: '/images/products/handball-argent-hero.jpg',
    cordColors: ['kaki', 'marine', 'noir', 'rose', 'turquoise', 'rouge', 'blanc', 'gris'],
    featured: false,
    tags: ['handball', 'argent', 'sport'],
    specs: [
      { key: 'Pendentif', value: 'Argent plaqué 10 microns' },
      { key: 'Diamètre', value: '10 mm' },
      { key: 'Cordon', value: 'Polyester 2,2mm — France' },
      { key: 'Taille', value: 'Réglable 15–21 cm' },
      { key: 'Atelier', value: 'Fabriqué en France' },
    ],
  },

  // ── PÉTANQUE ─────────────────────────────────────────────────────
  {
    id: 'petanque-argent',
    handle: 'la-boule-petanque',
    title: 'La Boule',
    subtitle: 'Pétanque · Plaqué Argent',
    price: 49,
    description: 'Le bracelet des passionnés de pétanque. Pendentif boule plaqué argent, 100% made in France.',
    fullDescription: 'Pour les amoureux du boulodrome, ce bracelet pétanque associe un pendentif boule en argent plaqué à un cordon technique tressé. Parfait cadeau pour les fans de la pastis et du point.',
    sport: 'golf',
    category: 'signature',
    finish: 'Plaqué Argent Brossé',
    images: [
      '/images/products/petanque-argent-hero.png',
      '/images/products/petanque-argent-2.jpg',
      '/images/products/packaging-2.png',
    ],
    thumbImage: '/images/products/petanque-argent-hero.png',
    heroImage: '/images/products/petanque-argent-2.jpg',
    cordColors: ['noir', 'marine', 'kaki', 'rouge', 'blanc', 'gris'],
    featured: false,
    tags: ['petanque', 'argent', 'sport'],
    specs: [
      { key: 'Pendentif', value: 'Acier plaqué argent brossé' },
      { key: 'Cordon', value: 'Polyester tressé — France' },
      { key: 'Taille', value: 'Réglable 15–21 cm' },
      { key: 'Atelier', value: 'Assemblé en France' },
    ],
  },
]

// Helpers
export function getProductByHandle(handle: string): Product | undefined {
  return PRODUCTS.find(p => p.handle === handle)
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.featured)
}

export function getProductsBySport(sport: string): Product[] {
  return PRODUCTS.filter(p => p.sport === sport)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return PRODUCTS.filter(p => p.category === category)
}

export function getBestSellers(): Product[] {
  return PRODUCTS.filter(p => p.badge === 'Best-seller' || p.featured).slice(0, 4)
}

export const SPORT_MAP: Record<string, string[]> = {
  football: ['football', 'handball'],
  basketball: ['basketball', 'handball'],
  tennis: ['tennis'],
  running: [],
  muscu: ['kettlebell-inox', 'kettlebell-gold', 'kettlebell-rosegold', 'disque-rosegold', 'disque-gold'],
  rugby: ['rugby-argent', 'rugby-gold'],
  golf: ['golf-platine', 'golf-gold'],
  boxe: ['boxe-argent'],
  petanque: ['petanque-argent'],
}
