// Données produits importées depuis mykettel.com (2026-04-23)
// Script: scripts/import-products.mjs

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
  {
    "id": "shopify-4444348612677",
    "handle": "bracelet-kettlebell-rose-gold",
    "title": "Kettlebell",
    "subtitle": "Muscu · Rose Doré",
    "price": 65,
    "description": "Découvrez le Bracelet Kettlebell en version Rose Gold, doré à l'or fin rose 18 carats ! Symbole de puissance et d'acharnement, le Kettlebell est l'accessoire d'excellence des plus grands crossfiteurs …",
    "fullDescription": "Découvrez le Bracelet Kettlebell en version Rose Gold, doré à l'or fin rose 18 carats ! Symbole de puissance et d'acharnement, le Kettlebell est l'accessoire d'excellence des plus grands crossfiteurs à succès. Vous le retrouverez à tous les poignets pour allier style et performance lors des WODs dans les plus grandes box de crosstraining de France. Avec sa gravure fine et sa robustesse, le bracelet Kettlebell accompagne les passionné(e)s de cross training dans leur quête de dépassement et d'atteinte de leur objectif. Pour lui assurer une résistance à toute épreuve, le pendentif Kettlebell Kettel® est fondu dans un acier inoxydable de haute qualité et assemblé sur son cordon à la main en France. Doré à l'or fin 18 carats, cette version or de la célèbre Kettlebell séduira tous les passionné(e)s de crossfit à succès ! Son cordon 100% fibre de polyester, est ultra-résistant, léger pour un maintien optimal pendant les séances de kettlebell intensives.",
    "sport": "muscu",
    "category": "prestige",
    "finish": "Doré Or Rose 18 carats",
    "images": [
      "/images/products/shopify/bracelet-kettlebell-rose-gold-1.jpg",
      "/images/products/shopify/bracelet-kettlebell-rose-gold-2.jpg",
      "/images/products/shopify/bracelet-kettlebell-rose-gold-3.jpg",
      "/images/products/shopify/bracelet-kettlebell-rose-gold-4.jpg",
      "/images/products/shopify/bracelet-kettlebell-rose-gold-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-kettlebell-rose-gold-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-kettlebell-rose-gold-2.jpg",
    "cordColors": [
      "noir",
      "ocean",
      "pistache",
      "corail",
      "rouge-hermes",
      "noir-shiny",
      "gris-shiny",
      "turquoise-shiny",
      "rose-shiny"
    ],
    "featured": true,
    "tags": [
      "Rose gold"
    ],
    "specs": [
      {
        "key": "Finition",
        "value": "Or fin 24 carats"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4444313583685",
    "handle": "bracelet-kettlebell-gold",
    "title": "Kettlebell",
    "subtitle": "Muscu · Doré",
    "price": 69,
    "description": "Découvrez le bracelet Kettlebell Kettel en version Gold, doré à l'or fin 24 carats ! Symbole de puissance et d'acharnement, le Kettlebell est l'accessoire d'excellence des plus grands crossfiteurs à s…",
    "fullDescription": "Découvrez le bracelet Kettlebell Kettel en version Gold, doré à l'or fin 24 carats ! Symbole de puissance et d'acharnement, le Kettlebell est l'accessoire d'excellence des plus grands crossfiteurs à succès. Vous le retrouverez à tous les poignets pour allier style et performance lors des WODs dans les plus grandes box de crosstraining de France. Avec sa gravure fine et sa robustesse, le bracelet Kettlebell accompagne les passionné(e)s de cross training dans leur quête de dépassement et d'atteinte de leur objectif. Pour lui assurer une résistance à toute épreuve, le pendentif Kettlebell Kettel® est fondu dans un acier inoxydable de haute qualité et assemblé sur son cordon à la main en France. Doré à l'or fin 24 carats, cette version or de la célèbre Kettlebell séduira tous les passionné(e)s de crossfit à succès ! Son cordon, 100% fibre de polyester, est ultra-résistant, léger pour un maintien optimal pendant les séances de football intensives.",
    "sport": "muscu",
    "category": "prestige",
    "finish": "Doré Or 24 carats",
    "images": [
      "/images/products/shopify/bracelet-kettlebell-gold-1.jpg",
      "/images/products/shopify/bracelet-kettlebell-gold-2.jpg",
      "/images/products/shopify/bracelet-kettlebell-gold-3.jpg",
      "/images/products/shopify/bracelet-kettlebell-gold-4.jpg",
      "/images/products/shopify/bracelet-kettlebell-gold-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-kettlebell-gold-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-kettlebell-gold-2.jpg",
    "cordColors": [
      "noir",
      "ocean",
      "rouge-hermes",
      "corail",
      "taupe",
      "noir-shiny",
      "gris-shiny",
      "turquoise-shiny",
      "rose-shiny"
    ],
    "featured": true,
    "tags": [
      "gold"
    ],
    "specs": [
      {
        "key": "Finition",
        "value": "Or fin 24 carats"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-15521346388294",
    "handle": "gravure-supplementaire-1776336571393",
    "title": "Gravure Supplémentaire",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 10,
    "description": "*** This product is generated by the Easify Product Options app to apply charges for custom options. Please don't delete it . If it's removed, the option price won't work on your storefront. You must …",
    "fullDescription": "*** This product is generated by the Easify Product Options app to apply charges for custom options. Please don't delete it . If it's removed, the option price won't work on your storefront. You must keep the product status as Active or Unlisted in the Online Store . This product is not included in collections (and won't show up in website searches as per your settings). You're free to adjust the product title, image , and inventory as needed. For inquiries, reach out via in-app live chat or email support@tigren.com .",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [],
    "thumbImage": "/images/products/shopify/gravure-supplementaire-1776336571393-1.jpg",
    "heroImage": "/images/products/shopify/gravure-supplementaire-1776336571393-1.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": true,
    "tags": [
      "easify_product_options"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-15521341440326",
    "handle": "ajouter-une-gravure-1776336082242",
    "title": "Ajouter une gravure ?",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 10,
    "description": "*** This product is generated by the Easify Product Options app to apply charges for custom options. Please don't delete it . If it's removed, the option price won't work on your storefront. You must …",
    "fullDescription": "*** This product is generated by the Easify Product Options app to apply charges for custom options. Please don't delete it . If it's removed, the option price won't work on your storefront. You must keep the product status as Active or Unlisted in the Online Store . This product is not included in collections (and won't show up in website searches as per your settings). You're free to adjust the product title, image , and inventory as needed. For inquiries, reach out via in-app live chat or email support@tigren.com .",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [],
    "thumbImage": "/images/products/shopify/ajouter-une-gravure-1776336082242-1.jpg",
    "heroImage": "/images/products/shopify/ajouter-une-gravure-1776336082242-1.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": true,
    "tags": [
      "easify_product_options"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6612213170245",
    "handle": "bracelet-golf-rose-gold",
    "title": "Cordon Balle de Golf | Rose Gold",
    "subtitle": "Golf · Doré Or Rose 18 carats",
    "price": 69,
    "description": "Découvrez le bracelet Balle de Golf Rose Gold 18 carats Kettel . L'allié inconditionnel des golfeurs et des golfeuses qui allient élégance et performance sur le green-fee et pendant les plus grandes c…",
    "fullDescription": "Découvrez le bracelet Balle de Golf Rose Gold 18 carats Kettel . L'allié inconditionnel des golfeurs et des golfeuses qui allient élégance et performance sur le green-fee et pendant les plus grandes compétitions. Avec sa gravure fine et sa robustesse, le bracelet golf est inspiré de la célèbre balle de golf accompagne les golfeurs et golfeuses passionnées dans leur quête de dépassement et d'atteinte de leur objectif. Pour lui assurer une résistance à toute épreuve, le pendentif balle de golf est fondu dans un acier inoxydable de haute qualité, flashé à l'or rose 18 carats et assemblé sur son cordon à la main en France. Son cordon 100% fibre de polyester, est ultra-résistant, léger pour un maintien optimal pendant les plus grandes parties de golf ! Pour tous les golfeurs et les golfeuses passionnées ! Ultra résistant - Waterproof Assemblé à la main en France Acier Inoxydable - Qualité optimale Or rose fin 18 carats Marque Française",
    "sport": "golf",
    "category": "prestige",
    "finish": "Doré Or Rose 18 carats",
    "images": [
      "/images/products/shopify/bracelet-golf-rose-gold-1.jpg",
      "/images/products/shopify/bracelet-golf-rose-gold-2.jpg",
      "/images/products/shopify/bracelet-golf-rose-gold-3.jpg",
      "/images/products/shopify/bracelet-golf-rose-gold-4.jpg",
      "/images/products/shopify/bracelet-golf-rose-gold-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-golf-rose-gold-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-golf-rose-gold-2.jpg",
    "cordColors": [
      "noir",
      "ocean",
      "pistache",
      "rouge-hermes",
      "corail",
      "noir-shiny",
      "gris-shiny",
      "turquoise-shiny",
      "rose-shiny"
    ],
    "featured": true,
    "tags": [
      "Rose gold"
    ],
    "specs": [
      {
        "key": "Finition",
        "value": "Or Rose 18 carats"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4663693541445",
    "handle": "bracelet-golf-gold",
    "title": "Cordon Balle de Golf | Gold",
    "subtitle": "Golf · Doré Or 24 carats",
    "price": 69,
    "description": "Bracelet Golf - Revêtement PVD Or - Kettel. - Assemblé en France - Pendentif diamètre 10mm - Revêtement PVD Or - Durabilité et résistance - Cordon 2mm - fabriqué en France Quelle est la différence ent…",
    "fullDescription": "Bracelet Golf - Revêtement PVD Or - Kettel. - Assemblé en France - Pendentif diamètre 10mm - Revêtement PVD Or - Durabilité et résistance - Cordon 2mm - fabriqué en France Quelle est la différence entre le revêtement PVD or et le placage or classique ? Le dépôt physique en phase vapeur, ou PVD, est un processus de revêtement sous vide qui produit un revêtement extrêmement durable en modifiant les propriétés du métal au niveau moléculaire. Les revêtements PVD sont beaucoup plus résistants à la corrosion due à la sueur et à l'usure régulière que le placage à l'or classique. Le processus est réalisé dans une chambre à vide de haute technologie et utilise l'or et du gaz sous tension pour créer une couche du matériau souhaité. Il ne vient pas seulement recouvrir le pendentif mais teinter la masse. Ce type de revêtement est très résistant à la corrosion et à l'oxydation.",
    "sport": "golf",
    "category": "prestige",
    "finish": "Doré Or 24 carats",
    "images": [
      "/images/products/shopify/bracelet-golf-gold-1.jpg",
      "/images/products/shopify/bracelet-golf-gold-2.jpg",
      "/images/products/shopify/bracelet-golf-gold-3.jpg",
      "/images/products/shopify/bracelet-golf-gold-4.png",
      "/images/products/shopify/bracelet-golf-gold-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-golf-gold-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-golf-gold-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "rouge",
      "gris",
      "rose",
      "kaki",
      "turquoise"
    ],
    "featured": true,
    "tags": [
      "gold"
    ],
    "specs": [
      {
        "key": "Finition",
        "value": "Or fin 24 carats"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7978275569949",
    "handle": "bracelet-ping-pong-argente",
    "title": "MyPING",
    "subtitle": "Tennis · PONG",
    "price": 42,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm L'allié inconditionnel des passionnés de ping-pong ! Avec sa gravure fine et sa robustesse, le bracelet symbole ping pong Kettel faire revivre les émotions de vos plus beaux matchs de ping-pong !",
    "sport": "tennis",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-ping-pong-argente-1.png",
      "/images/products/shopify/bracelet-ping-pong-argente-2.jpg",
      "/images/products/shopify/bracelet-ping-pong-argente-3.png",
      "/images/products/shopify/bracelet-ping-pong-argente-4.png",
      "/images/products/shopify/bracelet-ping-pong-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-ping-pong-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-ping-pong-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": true,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7978161209629",
    "handle": "bracelet-ballon-de-basketball-argente",
    "title": "MyBASKETBALL",
    "subtitle": "Basketball · Le Ballon Plaqué Argent",
    "price": 42,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'allié inconditionnel des passionnés de basketball ! Avec sa gravure fine et sa robustesse, le bracelet Ballon de Basketball Kettel faire revivre les émotions de vos plus beaux matchs de basket !",
    "sport": "basketball",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-ballon-de-basketball-argente-1.png",
      "/images/products/shopify/bracelet-ballon-de-basketball-argente-2.jpg",
      "/images/products/shopify/bracelet-ballon-de-basketball-argente-3.jpg",
      "/images/products/shopify/bracelet-ballon-de-basketball-argente-4.png",
      "/images/products/shopify/bracelet-ballon-de-basketball-argente-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-ballon-de-basketball-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-ballon-de-basketball-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": true,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843965956422",
    "handle": "bracelet-mypaddle-argente",
    "title": "MyPADDLE",
    "subtitle": "Muscu · La Paddler Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau Le bracelet des passionnées de Paddle ! Avec sa gravure fine et sa robustesse, le bracelet MyPADDLE- La Paddler ne quittera plus le poignet des paddler woman pour leur rappeler à quel point leur sport préféré leur donne du bonheur !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-mypaddle-argente-1.jpg",
      "/images/products/shopify/bracelet-mypaddle-argente-2.jpg",
      "/images/products/shopify/bracelet-mypaddle-argente-3.jpg",
      "/images/products/shopify/bracelet-mypaddle-argente-4.jpg",
      "/images/products/shopify/bracelet-mypaddle-argente-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-mypaddle-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-mypaddle-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4616834383941",
    "handle": "bracelet-disque-rose-gold",
    "title": "Disque Olympique | Rose Gold",
    "subtitle": "Muscu · Doré Or Rose 18 carats",
    "price": 89,
    "description": "Affirmez votre exigence avec une pièce au caractère affirmé, où la puissance rencontre une esthétique maîtrisée. Le bracelet Disque Olympique en finition or rose 18 carats incarne une vision contempor…",
    "fullDescription": "Affirmez votre exigence avec une pièce au caractère affirmé, où la puissance rencontre une esthétique maîtrisée. Le bracelet Disque Olympique en finition or rose 18 carats incarne une vision contemporaine du bijou sportif : technique, précis, et résolument élégant. Inspiré du disque olympique, symbole absolu de progression, de rigueur et de dépassement, ce bracelet capture l’essence même de la performance pour la transposer dans un objet à forte valeur esthétique. Pensé et assemblé avec minutie dans notre atelier en France, son pendentif en acier inoxydable 316L bénéficie d’une finition haut de gamme dorée à l’or rose fin 18 carats. Ce traitement révèle une teinte chaude et nuancée, aux reflets subtils. Au-delà de son éclat, cette finition est pensée pour durer : elle épouse la matière avec précision, offrant une excellente tenue face à l’eau, à la transpiration et aux contraintes du quotidien. Un équilibre parfait entre sophistication visuelle et exigence fonctionnelle. Son cordon 100% polyester, fabriqué en France, apporte contraste et modernité, tout en garantissant confort et résistance, que ce soit à l’entraînement ou en dehors. Dans l’univers du Cross Training, de l’haltérophilie et de la musculation, le disque olympique est une référence. Ici, il devient signature. Un marqueur d’identité pour celles et ceux qui cultivent la discipline autant que le style. Caractéristiques : Pendentif disque olympique en acier inoxydable 316L avec finition or rose fin 18 carats Dimensions du pendentif : 2 cm de diamètre Cordon haute résistance 100% polyester (fabrication française) Résistant à l’eau et à l’usure Épuré, technique et visuellement distinctif, le bracelet disque olympique or rose 18 carats dépasse sa fonction d’accessoire pour devenir une véritable signature.",
    "sport": "muscu",
    "category": "prestige",
    "finish": "Doré Or Rose 18 carats",
    "images": [
      "/images/products/shopify/bracelet-disque-rose-gold-1.jpg",
      "/images/products/shopify/bracelet-disque-rose-gold-2.jpg",
      "/images/products/shopify/bracelet-disque-rose-gold-3.jpg",
      "/images/products/shopify/bracelet-disque-rose-gold-4.jpg",
      "/images/products/shopify/bracelet-disque-rose-gold-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-disque-rose-gold-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-disque-rose-gold-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rose-pale",
      "turquoise"
    ],
    "featured": true,
    "tags": [
      "Rose gold"
    ],
    "specs": [
      {
        "key": "Finition",
        "value": "Or Rose 18 carats"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4616822030405",
    "handle": "bracelet-disque-olympique-gold",
    "title": "Disque Olympique | Gold",
    "subtitle": "Muscu · Doré Or 24 carats",
    "price": 89,
    "description": "Affirmez votre exigence avec une pièce au caractère affirmé, où la puissance rencontre une esthétique maîtrisée. Le bracelet Disque Olympique en finition or 18 carats incarne une vision contemporaine …",
    "fullDescription": "Affirmez votre exigence avec une pièce au caractère affirmé, où la puissance rencontre une esthétique maîtrisée. Le bracelet Disque Olympique en finition or 18 carats incarne une vision contemporaine du bijou sportif : technique, précis, et résolument élégant. Inspiré du disque olympique, symbole absolu de progression, de rigueur et de dépassement, ce bracelet capture l’essence même de la performance pour la transposer dans un objet à forte valeur esthétique. Pensé et assemblé avec minutie dans notre atelier en France, son pendentif en acier inoxydable 316L bénéficie d’une finition haut de gamme dorée à l’or rose fin 18 carats. Ce traitement révèle une teinte chaude et nuancée, aux reflets subtils. Au-delà de son éclat, cette finition est pensée pour durer : elle épouse la matière avec précision, offrant une excellente tenue face à l’eau, à la transpiration et aux contraintes du quotidien. Un équilibre parfait entre sophistication visuelle et exigence fonctionnelle. Son cordon 100% polyester, fabriqué en France, apporte contraste et modernité, tout en garantissant confort et résistance, que ce soit à l’entraînement ou en dehors. Dans l’univers du Cross Training, de l’haltérophilie et de la musculation, le disque olympique est une référence. Ici, il devient signature. Un marqueur d’identité pour celles et ceux qui cultivent la discipline autant que le style. Caractéristiques : Pendentif disque olympique en acier inoxydable 316L avec finition or fin 18 carats Dimensions du pendentif : 2 cm de diamètre Cordon haute résistance 100% polyester (fabrication française) Résistant à l’eau et à l’usure Épuré, technique et visuellement distinctif, le bracelet disque olympique or 18 carats dépasse sa fonction d’accessoire pour devenir une véritable signature.",
    "sport": "muscu",
    "category": "prestige",
    "finish": "Doré Or 24 carats",
    "images": [
      "/images/products/shopify/bracelet-disque-olympique-gold-1.jpg",
      "/images/products/shopify/bracelet-disque-olympique-gold-2.jpg",
      "/images/products/shopify/bracelet-disque-olympique-gold-3.jpg",
      "/images/products/shopify/bracelet-disque-olympique-gold-4.jpg",
      "/images/products/shopify/bracelet-disque-olympique-gold-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-disque-olympique-gold-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-disque-olympique-gold-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kak",
      "turquoise",
      "rose-pale"
    ],
    "featured": true,
    "tags": [
      "Gold",
      "inox"
    ],
    "specs": [
      {
        "key": "Finition",
        "value": "Or fin 24 carats"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7978251944221",
    "handle": "bracelet-natation-argente",
    "title": "MyNATATION",
    "subtitle": "Natation · Le Bonnet Plaqué Argent",
    "price": 42,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'allié inconditionnel des passionnés de natation ! Avec sa gravure fine et sa robustesse, le bracelet symbole bonnet de bain et lunette Kettel faire revivre les émotions de vos plus belles compétitions de natation !",
    "sport": "natation",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-natation-argente-1.png",
      "/images/products/shopify/bracelet-natation-argente-2.jpg",
      "/images/products/shopify/bracelet-natation-argente-3.png",
      "/images/products/shopify/bracelet-natation-argente-4.png",
      "/images/products/shopify/bracelet-natation-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-natation-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-natation-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-15211940643142",
    "handle": "bracelet-petanque-triplette-vermeil",
    "title": "Pétanque Triplette Vermeil",
    "subtitle": "Golf · Plaqué Argent Brossé",
    "price": 250,
    "description": "Le bracelet des amoureux et amoureuses de la pétanque en version triplette argent massif plaqué or. Bracelet sur cordon avec 3 pendentifs en forme de boule de pétanque Argent massif 925 plaqué or Diam…",
    "fullDescription": "Le bracelet des amoureux et amoureuses de la pétanque en version triplette argent massif plaqué or. Bracelet sur cordon avec 3 pendentifs en forme de boule de pétanque Argent massif 925 plaqué or Diamètre pendentif : 8 mm Cordon 100% polyester : 2,2mm Fabriqué et assemblé à la main en France Bracelet garanti 1 an Waterproof Sans allergène",
    "sport": "golf",
    "category": "prestige",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-petanque-triplette-vermeil-1.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-petanque-triplette-vermeil-1.png",
    "heroImage": "/images/products/shopify/bracelet-petanque-triplette-vermeil-1.png",
    "cordColors": [
      "noir",
      "bleu-marine",
      "kaki",
      "rose-pale",
      "turquoise",
      "france"
    ],
    "featured": true,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-15211936416070",
    "handle": "bracelet-petanque-vermeil",
    "title": "Pétanque Vermeil",
    "subtitle": "Golf · Plaqué Argent Brossé",
    "price": 150,
    "description": "Le bracelet des amoureux et amoureuses de la pétanque en version argent massif plaqué or. Bracelet sur cordon avec pendentif en forme de boule de pétanque Argent massif 925 plaqué or Diamètre pendenti…",
    "fullDescription": "Le bracelet des amoureux et amoureuses de la pétanque en version argent massif plaqué or. Bracelet sur cordon avec pendentif en forme de boule de pétanque Argent massif 925 plaqué or Diamètre pendentif : 8 mm Cordon 100% polyester : 2,2mm Fabriqué et assemblé à la main en France Bracelet garanti 1 an Waterproof Sans allergène",
    "sport": "golf",
    "category": "prestige",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-petanque-vermeil-1.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-petanque-vermeil-1.png",
    "heroImage": "/images/products/shopify/bracelet-petanque-vermeil-1.png",
    "cordColors": [
      "noir",
      "bleu-marine",
      "kaki",
      "rose-pale",
      "turquoise",
      "france"
    ],
    "featured": true,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-15206018941254",
    "handle": "cordon-au-choix-au-metre",
    "title": "Cordon supplémentaire",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 12,
    "description": "Bracelet Cordon supplémentaire — pendentif sport sur cordon tressé.",
    "fullDescription": "",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-au-choix-au-metre-1.jpg",
      "/images/products/shopify/cordon-au-choix-au-metre-2.png",
      "/images/products/shopify/cordon-au-choix-au-metre-3.png",
      "/images/products/shopify/cordon-au-choix-au-metre-4.png",
      "/images/products/shopify/cordon-au-choix-au-metre-5.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-au-choix-au-metre-1.jpg",
    "heroImage": "/images/products/shopify/cordon-au-choix-au-metre-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6589638967365",
    "handle": "bracelet-rugby-gold",
    "title": "Rugby Gold",
    "subtitle": "Rugby · Doré Or 24 carats",
    "price": 69,
    "comparePrice": 85,
    "description": "Bracelet Rugby - Revêtement Gold - PVD Or - Kettel. - Fabriqué en France - Pendentif diamètre 20 mm - Revêtement PVD Or - Durabilité et résistance - Cordon 2mm - fabriqué en France…",
    "fullDescription": "Bracelet Rugby - Revêtement Gold - PVD Or - Kettel. - Fabriqué en France - Pendentif diamètre 20 mm - Revêtement PVD Or - Durabilité et résistance - Cordon 2mm - fabriqué en France",
    "sport": "rugby",
    "category": "prestige",
    "finish": "Doré Or 24 carats",
    "images": [
      "/images/products/shopify/bracelet-rugby-gold-1.png",
      "/images/products/shopify/bracelet-rugby-gold-2.jpg",
      "/images/products/shopify/bracelet-rugby-gold-3.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-rugby-gold-1.png",
    "heroImage": "/images/products/shopify/bracelet-rugby-gold-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "turquoise",
      "rose-pale",
      "france"
    ],
    "featured": true,
    "tags": [
      "gold",
      "inox"
    ],
    "specs": [
      {
        "key": "Finition",
        "value": "Or fin 24 carats"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6589639688261",
    "handle": "bracelet-rugby-rose-gold",
    "title": "Rugby Rose Gold",
    "subtitle": "Rugby · Doré Or Rose 18 carats",
    "price": 69,
    "comparePrice": 85,
    "description": "Bracelet Rugby - Revêtement Rose Gold - PVD - Assemblé en France - Pendentif diamètre 20 mm - Revêtement PVD Rose gold - Durabilité et résistance - Cordon 2mm - fabriqué en France…",
    "fullDescription": "Bracelet Rugby - Revêtement Rose Gold - PVD - Assemblé en France - Pendentif diamètre 20 mm - Revêtement PVD Rose gold - Durabilité et résistance - Cordon 2mm - fabriqué en France",
    "sport": "rugby",
    "category": "prestige",
    "finish": "Doré Or Rose 18 carats",
    "images": [
      "/images/products/shopify/bracelet-rugby-rose-gold-1.png",
      "/images/products/shopify/bracelet-rugby-rose-gold-2.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-rugby-rose-gold-1.png",
    "heroImage": "/images/products/shopify/bracelet-rugby-rose-gold-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rose",
      "turquoise",
      "bleu-blanc-rouge"
    ],
    "featured": true,
    "tags": [
      "Rose gold"
    ],
    "specs": [
      {
        "key": "Finition",
        "value": "Or Rose 18 carats"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-15139928768838",
    "handle": "bracelet-football-f8-plaque-or",
    "title": "Football Vermeil",
    "subtitle": "Football · Plaqué Argent Brossé",
    "price": 150,
    "description": "Le bracelet des amoureux du football en version argent massif plaqué Or. Bracelet sur cordon avec pendentif en forme de Ballon de Football Argent massif 925 plaqué or Diamètre pendentif : 8 mm Cordon …",
    "fullDescription": "Le bracelet des amoureux du football en version argent massif plaqué Or. Bracelet sur cordon avec pendentif en forme de Ballon de Football Argent massif 925 plaqué or Diamètre pendentif : 8 mm Cordon 100% polyester : 2,2mm Fabriqué et assemblé à la main en France Bracelet garanti 1 an Waterproof Sans allergène",
    "sport": "football",
    "category": "prestige",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-football-f8-plaque-or-1.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-football-f8-plaque-or-1.png",
    "heroImage": "/images/products/shopify/bracelet-football-f8-plaque-or-1.png",
    "cordColors": [
      "noir",
      "bleu-marine",
      "kaki",
      "rose-pale",
      "turquoise",
      "france"
    ],
    "featured": true,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4516107616325",
    "handle": "bracelet-velo-maillon-silver",
    "title": "Vélo Maillon Argenté",
    "subtitle": "Cyclisme · Acier Inoxydable 316L",
    "price": 49,
    "description": "Le bracelet des amoureux du vélo ! Maillon de Vélo Acier Inoxydable 316L Diamètre pendentif MAILLON : 20mm Cordon 100% polyester : 2,2mm Confectionné à la main en France Bracelet garanti 1 an Résistan…",
    "fullDescription": "Le bracelet des amoureux du vélo ! Maillon de Vélo Acier Inoxydable 316L Diamètre pendentif MAILLON : 20mm Cordon 100% polyester : 2,2mm Confectionné à la main en France Bracelet garanti 1 an Résistant à l'eau Sans allergène",
    "sport": "cyclisme",
    "category": "signature",
    "finish": "Acier Inoxydable 316L",
    "images": [
      "/images/products/shopify/bracelet-velo-maillon-silver-1.png",
      "/images/products/shopify/bracelet-velo-maillon-silver-2.png",
      "/images/products/shopify/bracelet-velo-maillon-silver-3.png",
      "/images/products/shopify/bracelet-velo-maillon-silver-4.png",
      "/images/products/shopify/bracelet-velo-maillon-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-velo-maillon-silver-1.png",
    "heroImage": "/images/products/shopify/bracelet-velo-maillon-silver-2.png",
    "cordColors": [
      "noir",
      "bleu-marine",
      "corail",
      "rouge",
      "vert",
      "turquoise",
      "rose-pale",
      "gris",
      "kaki",
      "france",
      "espagne",
      "italie",
      "belgique",
      "suisse"
    ],
    "featured": false,
    "tags": [
      "inox",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-14761649373510",
    "handle": "ecrin-kettel",
    "title": "Ecrin à bijou + carte de motivation",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 0,
    "comparePrice": 4.5,
    "description": "Ecrin Kettel et sa carte de motivation. Idéale pour offrir.",
    "fullDescription": "Ecrin Kettel et sa carte de motivation. Idéale pour offrir.",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/ecrin-kettel-1.webp",
      "/images/products/shopify/ecrin-kettel-2.jpg",
      "/images/products/shopify/ecrin-kettel-3.jpg"
    ],
    "thumbImage": "/images/products/shopify/ecrin-kettel-1.webp",
    "heroImage": "/images/products/shopify/ecrin-kettel-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8934164660550",
    "handle": "bracelet-mini-football-argent-massif",
    "title": "Football Argent massif 925",
    "subtitle": "Football · Argent Massif 925",
    "price": 95,
    "description": "Le bracelet des amoureux et amoureuses du football en version mini et argent massif ! Bracelet sur cordon avec pendentif en forme de ballon de football Argent massif 925 poinçon certifié Diamètre pend…",
    "fullDescription": "Le bracelet des amoureux et amoureuses du football en version mini et argent massif ! Bracelet sur cordon avec pendentif en forme de ballon de football Argent massif 925 poinçon certifié Diamètre pendentif : 8 mm Cordon 100% polyester : 2,2mm Fabriqué et assemblé à la main en France Bracelet garanti 1 an Waterproof Sans allergène",
    "sport": "football",
    "category": "massif",
    "finish": "Argent Massif 925",
    "badge": "Argent massif",
    "images": [
      "/images/products/shopify/bracelet-mini-football-argent-massif-1.png",
      "/images/products/shopify/bracelet-mini-football-argent-massif-2.png",
      "/images/products/shopify/bracelet-mini-football-argent-massif-3.png",
      "/images/products/shopify/bracelet-mini-football-argent-massif-4.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-mini-football-argent-massif-1.png",
    "heroImage": "/images/products/shopify/bracelet-mini-football-argent-massif-2.png",
    "cordColors": [
      "noir",
      "bleu-marine",
      "kaki",
      "rose-pale",
      "turquoise",
      "france"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Métal",
        "value": "Argent massif 925 poinçon certifié"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6746529497157",
    "handle": "bracelet-ancre-silver",
    "title": "MyAncre Marine Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage platine 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'a…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage platine 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'allié inconditionnel des passionnés de sport nautique ! Avec sa gravure fine et sa robustesse, le bracelet Ancre Marine Kettel accompagne les passionné(e)s de voile et de bateau sur les plus grandes compétitions de navigation !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-ancre-silver-1.jpg",
      "/images/products/shopify/bracelet-ancre-silver-2.jpg",
      "/images/products/shopify/bracelet-ancre-silver-3.jpg",
      "/images/products/shopify/bracelet-ancre-silver-4.jpg",
      "/images/products/shopify/bracelet-ancre-silver-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-ancre-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-ancre-silver-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843980800326",
    "handle": "bracelet-myskateboard-argente",
    "title": "MySKATEBOARD Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce (attention à l'eau chlorée et l'eau salée !) Le bracelet des passionnées de Skateboard ! Avec sa gravure fine et sa robustesse, le bracelet MySkateboard ne quittera plus le poignet des skateboarders pour leur rappeler à quel point leur sport préféré leur donne du bonheur !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-myskateboard-argente-1.jpg",
      "/images/products/shopify/bracelet-myskateboard-argente-2.jpg",
      "/images/products/shopify/bracelet-myskateboard-argente-3.jpg",
      "/images/products/shopify/bracelet-myskateboard-argente-4.jpg",
      "/images/products/shopify/bracelet-myskateboard-argente-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-myskateboard-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-myskateboard-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843979161926",
    "handle": "bracelet-myrugby-le-rugbyman-argente",
    "title": "MyRUGBY Le Rugbyman Plaqué Argent",
    "subtitle": "Rugby · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce (attention à l'eau chlorée et l'eau salée !) Le bracelet des passionnées de Rugby ! Avec sa gravure fine et sa robustesse, le bracelet MyRugby - Le Rugbyman ne quittera plus le poignet des rugbymen pour leur rappeler à quel point leur sport préféré leur donne du bonheur !",
    "sport": "rugby",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-myrugby-le-rugbyman-argente-1.jpg",
      "/images/products/shopify/bracelet-myrugby-le-rugbyman-argente-2.jpg",
      "/images/products/shopify/bracelet-myrugby-le-rugbyman-argente-3.jpg",
      "/images/products/shopify/bracelet-myrugby-le-rugbyman-argente-4.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-myrugby-le-rugbyman-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-myrugby-le-rugbyman-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843977032006",
    "handle": "bracelet-mypatinage-artistique-la-patineuse-argente",
    "title": "MyPATINAGE ARTISTIQUE La Patineuse laqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce (attention à l'eau chlorée et l'eau salée !) Le bracelet des passionnées de Patinage Artistique ! Avec sa gravure fine et sa robustesse, le bracelet MyPATINAGE ARTISTIQUE - La patineuse ne quittera plus le poignet des patineuses pour leur rappeler à quel point leur sport préféré leur donne du bonheur !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-mypatinage-artistique-la-patineuse-argente-1.jpg",
      "/images/products/shopify/bracelet-mypatinage-artistique-la-patineuse-argente-2.jpg",
      "/images/products/shopify/bracelet-mypatinage-artistique-la-patineuse-argente-3.jpg",
      "/images/products/shopify/bracelet-mypatinage-artistique-la-patineuse-argente-4.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-mypatinage-artistique-la-patineuse-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-mypatinage-artistique-la-patineuse-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843963334982",
    "handle": "bracelet-mynatation-synchronisee-argente",
    "title": "MyNATATION SYNCHRONISÉE Plaqué Argent",
    "subtitle": "Natation · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce (attention à l'eau chlorée et l'eau salée !) Le bracelet des passionnées de Natation synchronisée ou natation artistique ! Avec sa gravure fine et sa robustesse, le bracelet MyNATATION SYNCHRONISÉE ne quittera plus le poignet des nageuses synchro' passionnées pour leur rappeler à quel point leur sport préféré leur donne du bonheur !",
    "sport": "natation",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-mynatation-synchronisee-argente-1.jpg",
      "/images/products/shopify/bracelet-mynatation-synchronisee-argente-2.jpg",
      "/images/products/shopify/bracelet-mynatation-synchronisee-argente-3.jpg",
      "/images/products/shopify/bracelet-mynatation-synchronisee-argente-4.jpg",
      "/images/products/shopify/bracelet-mynatation-synchronisee-argente-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-mynatation-synchronisee-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-mynatation-synchronisee-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843950457158",
    "handle": "bracelet-myjudo-argente",
    "title": "MyJUDO Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau Le bracelet des passionnées de Judo ! Avec sa gravure fine et sa robustesse, le bracelet MyJUDO ne quittera plus le poignet des Judokas et Judokates passionnées pour leur rappeler à quel point leur sport préféré leur donne du bonheur !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-myjudo-argente-1.jpg",
      "/images/products/shopify/bracelet-myjudo-argente-2.jpg",
      "/images/products/shopify/bracelet-myjudo-argente-3.jpg",
      "/images/products/shopify/bracelet-myjudo-argente-4.jpg",
      "/images/products/shopify/bracelet-myjudo-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-myjudo-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-myjudo-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843932041542",
    "handle": "bracelet-mygolf-le-golfeur-argente",
    "title": "MyGOLF",
    "subtitle": "Golf · Le Golfeur Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau Le bracelet des passionnés de Golf ! Avec sa gravure fine et sa robustesse, le bracelet MyGOLF- Le Golfeur ne quittera plus le poignet des golfeurs passionnés pour leur rappeler à quel point leur sport préféré leur donne du bonheur !",
    "sport": "golf",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-mygolf-le-golfeur-argente-1.jpg",
      "/images/products/shopify/bracelet-mygolf-le-golfeur-argente-2.jpg",
      "/images/products/shopify/bracelet-mygolf-le-golfeur-argente-3.jpg",
      "/images/products/shopify/bracelet-mygolf-le-golfeur-argente-4.jpg",
      "/images/products/shopify/bracelet-mygolf-le-golfeur-argente-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-mygolf-le-golfeur-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-mygolf-le-golfeur-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843907039558",
    "handle": "bracelet-mycycliste-argente",
    "title": "MyCYCLISTE Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'allié inconditionnel des passionnés de C YCLISME ! Avec sa gravure fine et sa robustesse, le bracelet MyCYCLISTE Kettel accompagne les passionné(e)s de vélo sur les plus grandes épreuves cyclosportives de France et du Monde !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-mycycliste-argente-1.jpg",
      "/images/products/shopify/bracelet-mycycliste-argente-2.jpg",
      "/images/products/shopify/bracelet-mycycliste-argente-3.jpg",
      "/images/products/shopify/bracelet-mycycliste-argente-4.jpg",
      "/images/products/shopify/bracelet-mycycliste-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-mycycliste-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-mycycliste-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843899699526",
    "handle": "bracelet-mycanoe-kayak-argente",
    "title": "MyCANOË",
    "subtitle": "Muscu · KAYAK Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'e…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage Argent Brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'allié inconditionnel des passionnés de C anoë-kayak ! Avec sa gravure fine et sa robustesse, le bracelet MyCANOË-KAYAK Kettel accompagne les passionné(e)s de sports de pagaie ! ‎",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-mycanoe-kayak-argente-1.jpg",
      "/images/products/shopify/bracelet-mycanoe-kayak-argente-2.jpg",
      "/images/products/shopify/bracelet-mycanoe-kayak-argente-3.jpg",
      "/images/products/shopify/bracelet-mycanoe-kayak-argente-4.jpg",
      "/images/products/shopify/bracelet-mycanoe-kayak-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-mycanoe-kayak-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-mycanoe-kayak-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8843885281606",
    "handle": "bracelet-myboxe-argente",
    "title": "MyBOXE Plaqué Argent",
    "subtitle": "Boxe · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage platine 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'a…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage platine 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'allié inconditionnel des passionnés de boxe ! Avec sa gravure fine et sa robustesse, le bracelet Boxe Kettel accompagne les passionné(e)s de Boxe sur les plus grands combats !",
    "sport": "boxe",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-myboxe-argente-1.jpg",
      "/images/products/shopify/bracelet-myboxe-argente-2.jpg",
      "/images/products/shopify/bracelet-myboxe-argente-3.jpg",
      "/images/products/shopify/bracelet-myboxe-argente-4.jpg",
      "/images/products/shopify/bracelet-myboxe-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-myboxe-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-myboxe-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8831667011910",
    "handle": "bracelet-handball-argente",
    "title": "Handball Plaqué Argent",
    "subtitle": "Handball · Plaqué Argent Brossé",
    "price": 49,
    "description": "Le bracelet des amoureux du handball ! Bracelet sur cordon avec pendentif en forme de Ballon de Handball Argent plaqué 10 microns Diamètre pendentif : 10 mm Cordon 100% polyester : 2,2mm Fabriqué et a…",
    "fullDescription": "Le bracelet des amoureux du handball ! Bracelet sur cordon avec pendentif en forme de Ballon de Handball Argent plaqué 10 microns Diamètre pendentif : 10 mm Cordon 100% polyester : 2,2mm Fabriqué et assemblé à la main en France Bracelet garanti 1 an Résistant à l'eau douce Sans allergène",
    "sport": "handball",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-handball-argente-1.jpg",
      "/images/products/shopify/bracelet-handball-argente-2.png",
      "/images/products/shopify/bracelet-handball-argente-3.png",
      "/images/products/shopify/bracelet-handball-argente-4.jpg",
      "/images/products/shopify/bracelet-handball-argente-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-handball-argente-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-handball-argente-2.png",
    "cordColors": [
      "noir",
      "bleu-marine",
      "kaki",
      "rose-pale",
      "turquoise",
      "bleu-blanc-rouge"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8784157737286",
    "handle": "pochette-cadeau",
    "title": "Pochette cadeau",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 3.9,
    "description": "Bracelet Pochette cadeau — pendentif sport sur cordon tressé.",
    "fullDescription": "",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/pochette-cadeau-1.png"
    ],
    "thumbImage": "/images/products/shopify/pochette-cadeau-1.png",
    "heroImage": "/images/products/shopify/pochette-cadeau-1.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8689627562310",
    "handle": "cordon-belgique-noir-jaune-rouge",
    "title": "Cordon BELGIQUE",
    "subtitle": "Muscu · Noir",
    "price": 15,
    "description": "1 mètre de Cordon BELGIQUE - Noir-Jaune-Rouge Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2.2 mm Matière : 100% polyester - Tressage mat Fabriqué en France Waterproo…",
    "fullDescription": "1 mètre de Cordon BELGIQUE - Noir-Jaune-Rouge Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2.2 mm Matière : 100% polyester - Tressage mat Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-belgique-noir-jaune-rouge-1.png",
      "/images/products/shopify/cordon-belgique-noir-jaune-rouge-2.png",
      "/images/products/shopify/cordon-belgique-noir-jaune-rouge-3.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-belgique-noir-jaune-rouge-1.png",
    "heroImage": "/images/products/shopify/cordon-belgique-noir-jaune-rouge-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8689624416582",
    "handle": "cordon-suisse-rouge-blanc-rouge",
    "title": "Cordon SUISSE",
    "subtitle": "Muscu · Rouge",
    "price": 15,
    "description": "1 mètre de Cordon SUISSE - Rouge-Blanc-Rouge Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2.2 mm Matière : 100% polyester - Tressage mat Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon SUISSE - Rouge-Blanc-Rouge Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2.2 mm Matière : 100% polyester - Tressage mat Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-suisse-rouge-blanc-rouge-1.png",
      "/images/products/shopify/cordon-suisse-rouge-blanc-rouge-2.png",
      "/images/products/shopify/cordon-suisse-rouge-blanc-rouge-3.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-suisse-rouge-blanc-rouge-1.png",
    "heroImage": "/images/products/shopify/cordon-suisse-rouge-blanc-rouge-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8689620779334",
    "handle": "cordon-espana-rouge-jaune-rouge",
    "title": "Cordon ESPAÑA",
    "subtitle": "Muscu · Rouge",
    "price": 15,
    "description": "1 mètre de Cordon ESPANA - Rouge- Jaune-Rouge Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2.2 mm Matière : 100% polyester - Tressage mat Fabriqué en France Waterproo…",
    "fullDescription": "1 mètre de Cordon ESPANA - Rouge- Jaune-Rouge Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2.2 mm Matière : 100% polyester - Tressage mat Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-espana-rouge-jaune-rouge-1.png",
      "/images/products/shopify/cordon-espana-rouge-jaune-rouge-2.png",
      "/images/products/shopify/cordon-espana-rouge-jaune-rouge-3.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-espana-rouge-jaune-rouge-1.png",
    "heroImage": "/images/products/shopify/cordon-espana-rouge-jaune-rouge-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8689618059590",
    "handle": "cordon-italia-vert-blanc-rouge",
    "title": "Cordon ITALIA",
    "subtitle": "Muscu · Vert",
    "price": 15,
    "description": "1 mètre de Cordon ITALIA - Vert-Blanc- Rouge Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2.2 mm Matière : 100% polyester - Tressage mat Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon ITALIA - Vert-Blanc- Rouge Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2.2 mm Matière : 100% polyester - Tressage mat Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-italia-vert-blanc-rouge-1.png",
      "/images/products/shopify/cordon-italia-vert-blanc-rouge-2.png",
      "/images/products/shopify/cordon-italia-vert-blanc-rouge-3.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-italia-vert-blanc-rouge-1.png",
    "heroImage": "/images/products/shopify/cordon-italia-vert-blanc-rouge-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8469304967494",
    "handle": "cordon-ver-fluo-shiny",
    "title": "Cordon",
    "subtitle": "Muscu · Vert Fluo Shiny",
    "price": 12,
    "description": "1 mètre de Cordon Vert Fluo Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2 mm Matière : Tressage brillant Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Vert Fluo Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2 mm Matière : Tressage brillant Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-ver-fluo-shiny-1.jpg",
      "/images/products/shopify/cordon-ver-fluo-shiny-2.jpg"
    ],
    "thumbImage": "/images/products/shopify/cordon-ver-fluo-shiny-1.jpg",
    "heroImage": "/images/products/shopify/cordon-ver-fluo-shiny-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8469304639814",
    "handle": "cordon-rose-fluo-shiny",
    "title": "Cordon",
    "subtitle": "Muscu · Rose Fluo Shiny",
    "price": 12,
    "description": "1 mètre de Cordon Rose Fluo Brillant Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2 mm Matière : Tressage brillant Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Rose Fluo Brillant Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2 mm Matière : Tressage brillant Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-rose-fluo-shiny-1.jpg",
      "/images/products/shopify/cordon-rose-fluo-shiny-2.jpg"
    ],
    "thumbImage": "/images/products/shopify/cordon-rose-fluo-shiny-1.jpg",
    "heroImage": "/images/products/shopify/cordon-rose-fluo-shiny-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8469303558470",
    "handle": "cordon-jaune-fluo-shiny",
    "title": "Cordon",
    "subtitle": "Muscu · Jaune Fluo Shiny",
    "price": 12,
    "description": "1 mètre de Cordon Jaune Fluo Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2 mm Matière : Tressage brillant Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Jaune Fluo Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2 mm Matière : Tressage brillant Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-jaune-fluo-shiny-1.jpg",
      "/images/products/shopify/cordon-jaune-fluo-shiny-2.jpg"
    ],
    "thumbImage": "/images/products/shopify/cordon-jaune-fluo-shiny-1.jpg",
    "heroImage": "/images/products/shopify/cordon-jaune-fluo-shiny-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8360725807430",
    "handle": "bracelet-myfootball-argente",
    "title": "MyFOOTBALL",
    "subtitle": "Football · Le Ballon Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif : le football dans la peau ! - Plaquage argent brossé 10 micro…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif : le football dans la peau ! - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'allié inconditionnel des passionnés de football ! Le bracelet MyFootball Kettel faire revivre les émotions de vos plus beaux matchs de Foot !",
    "sport": "football",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-myfootball-argente-1.png",
      "/images/products/shopify/bracelet-myfootball-argente-2.jpg",
      "/images/products/shopify/bracelet-myfootball-argente-3.png",
      "/images/products/shopify/bracelet-myfootball-argente-4.jpg",
      "/images/products/shopify/bracelet-myfootball-argente-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-myfootball-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-myfootball-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8360711586118",
    "handle": "bracelet-myrugby-argente",
    "title": "MyRUGBY",
    "subtitle": "Rugby · L'Ovalie Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif : le rugby dans la peau ! - Plaquage argent brossé 10 microns …",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif : le rugby dans la peau ! - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm L'allié inconditionnel des passionnés de rugby ! Le bracelet MyRugby Kettel faire revivre les émotions de vos plus beaux matchs de Rugby.",
    "sport": "rugby",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-myrugby-argente-1.png",
      "/images/products/shopify/bracelet-myrugby-argente-2.png",
      "/images/products/shopify/bracelet-myrugby-argente-3.jpg",
      "/images/products/shopify/bracelet-myrugby-argente-4.jpg",
      "/images/products/shopify/bracelet-myrugby-argente-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-myrugby-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-myrugby-argente-2.png",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8142925299997",
    "handle": "cordon-corail-mate",
    "title": "Cordon",
    "subtitle": "Muscu · Corail Mate",
    "price": 12,
    "description": "1 mètre de Cordon Corail Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Corail Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-corail-mate-1.png",
      "/images/products/shopify/cordon-corail-mate-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-corail-mate-1.png",
    "heroImage": "/images/products/shopify/cordon-corail-mate-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8142924415261",
    "handle": "cordon-pistache-mate",
    "title": "Cordon",
    "subtitle": "Muscu · Pistache Mate",
    "price": 12,
    "description": "1 mètre de Cordon Pistache Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Pistache Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-pistache-mate-1.png",
      "/images/products/shopify/cordon-pistache-mate-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-pistache-mate-1.png",
    "heroImage": "/images/products/shopify/cordon-pistache-mate-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8142917140765",
    "handle": "cordon-rose-pale-mate",
    "title": "Cordon",
    "subtitle": "Muscu · Rose Pâle Mate",
    "price": 12,
    "description": "1 mètre de Cordon Rose Pâle Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Rose Pâle Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-rose-pale-mate-1.png",
      "/images/products/shopify/cordon-rose-pale-mate-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-rose-pale-mate-1.png",
    "heroImage": "/images/products/shopify/cordon-rose-pale-mate-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8142491681053",
    "handle": "cordon-rouge-mate",
    "title": "Cordon",
    "subtitle": "Muscu · Rouge Mate",
    "price": 12,
    "description": "1 mètre de Cordon Rouge Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Rouge Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-rouge-mate-1.png",
      "/images/products/shopify/cordon-rouge-mate-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-rouge-mate-1.png",
    "heroImage": "/images/products/shopify/cordon-rouge-mate-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8142823227677",
    "handle": "cordon-bleu-marine-mate",
    "title": "Cordon",
    "subtitle": "Muscu · Bleu Marine Mate",
    "price": 12,
    "description": "1 mètre de Cordon Bleu Marine Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Bleu Marine Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-bleu-marine-mate-1.png",
      "/images/products/shopify/cordon-bleu-marine-mate-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-bleu-marine-mate-1.png",
    "heroImage": "/images/products/shopify/cordon-bleu-marine-mate-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8041175646493",
    "handle": "cordon-gris",
    "title": "Cordon",
    "subtitle": "Muscu · Gris Mate",
    "price": 12,
    "description": "1 mètre de Cordon Gris Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Gris Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-gris-1.png",
      "/images/products/shopify/cordon-gris-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-gris-1.png",
    "heroImage": "/images/products/shopify/cordon-gris-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8038349865245",
    "handle": "cordon-turquoise",
    "title": "Cordon",
    "subtitle": "Muscu · Turquoise Mate",
    "price": 12,
    "description": "1 mètre de Cordon Turquoise Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Turquoise Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-turquoise-1.png",
      "/images/products/shopify/cordon-turquoise-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-turquoise-1.png",
    "heroImage": "/images/products/shopify/cordon-turquoise-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-8026639040797",
    "handle": "cordon-kaki",
    "title": "Cordon",
    "subtitle": "Muscu · Kaki Mate",
    "price": 12,
    "description": "1 mètre de Cordon Kaki Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "1 mètre de Cordon Kaki Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-kaki-1.png",
      "/images/products/shopify/cordon-kaki-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-kaki-1.png",
    "heroImage": "/images/products/shopify/cordon-kaki-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7979993694493",
    "handle": "bracelet-cible-argente",
    "title": "MyTIR À L'ARC Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm L'allié inconditionnel des passionnés de fléchette ou de tir à l'arc ! Avec sa gravure fine et sa robustesse, le bracelet symbole cible Kettel faire revivre les émotions de vos plus beaux tirs !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-cible-argente-1.png",
      "/images/products/shopify/bracelet-cible-argente-2.jpg",
      "/images/products/shopify/bracelet-cible-argente-3.png",
      "/images/products/shopify/bracelet-cible-argente-4.png",
      "/images/products/shopify/bracelet-cible-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-cible-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-cible-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7978261414173",
    "handle": "bracelet-patin-a-glace-argente",
    "title": "MyPATINAGE ARTISTIQUE",
    "subtitle": "Muscu · Le Patin Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des passionnés de patin à glace ! Avec sa gravure fine et sa robustesse, le bracelet symbole patin à glace Kettel faire revivre les émotions de vos plus belles compétitions de patinage !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-patin-a-glace-argente-1.png",
      "/images/products/shopify/bracelet-patin-a-glace-argente-2.jpg",
      "/images/products/shopify/bracelet-patin-a-glace-argente-3.png",
      "/images/products/shopify/bracelet-patin-a-glace-argente-4.png",
      "/images/products/shopify/bracelet-patin-a-glace-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-patin-a-glace-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-patin-a-glace-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7978240966941",
    "handle": "bracelet-e-sport-argente",
    "title": "MyE",
    "subtitle": "Muscu · SPORT Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm L'allié inconditionnel des passionnés de E-sport ! Avec sa gravure fine et sa robustesse, le bracelet symbole E-Sport Kettel faire revivre les émotions de vos plus belles parties en ligne !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-e-sport-argente-1.png",
      "/images/products/shopify/bracelet-e-sport-argente-2.jpg",
      "/images/products/shopify/bracelet-e-sport-argente-3.png",
      "/images/products/shopify/bracelet-e-sport-argente-4.png",
      "/images/products/shopify/bracelet-e-sport-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-e-sport-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-e-sport-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7978233200925",
    "handle": "bracelet-curling-argente",
    "title": "MyCURLING Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau L'allié inconditionnel des passionnés de curling ! Avec sa gravure fine et sa robustesse, le bracelet symbole de la pierre de Curling Kettel faire revivre les émotions de vos plus belles parties de Curling !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-curling-argente-1.png",
      "/images/products/shopify/bracelet-curling-argente-2.jpg",
      "/images/products/shopify/bracelet-curling-argente-3.png",
      "/images/products/shopify/bracelet-curling-argente-4.png",
      "/images/products/shopify/bracelet-curling-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-curling-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-curling-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7978221011229",
    "handle": "bracelet-ceinture-combat-argente",
    "title": "MyCOMBAT",
    "subtitle": "Muscu · La Ceinture Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des passionnés de sport de combat ! Avec sa gravure fine et sa robustesse, le bracelet Ceinture de Combat Kettel faire revivre les émotions de vos plus beaux combats !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-ceinture-combat-argente-1.png",
      "/images/products/shopify/bracelet-ceinture-combat-argente-2.jpg",
      "/images/products/shopify/bracelet-ceinture-combat-argente-3.png",
      "/images/products/shopify/bracelet-ceinture-combat-argente-4.png",
      "/images/products/shopify/bracelet-ceinture-combat-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-ceinture-combat-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-ceinture-combat-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7978215801117",
    "handle": "bracelet-casque-moto-argente",
    "title": "MyMOTO Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester épaisseur 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaquage argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des passionnés de moto ! Avec sa gravure fine et sa robustesse, le bracelet Casque de Moto Kettel faire revivre les émotions de vos plus belles sorties à moto !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-casque-moto-argente-1.png",
      "/images/products/shopify/bracelet-casque-moto-argente-2.jpg",
      "/images/products/shopify/bracelet-casque-moto-argente-3.png",
      "/images/products/shopify/bracelet-casque-moto-argente-4.png",
      "/images/products/shopify/bracelet-casque-moto-argente-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-casque-moto-argente-1.png",
    "heroImage": "/images/products/shopify/bracelet-casque-moto-argente-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7979217879325",
    "handle": "gift-wrap-3",
    "title": "Pochette cadeau",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 3.5,
    "description": "POCHETTE CADEAU OFFERTE ! Sublimez votre Kettel pour l'offrir !",
    "fullDescription": "POCHETTE CADEAU OFFERTE ! Sublimez votre Kettel pour l'offrir !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/gift-wrap-3-1.png"
    ],
    "thumbImage": "/images/products/shopify/gift-wrap-3-1.png",
    "heroImage": "/images/products/shopify/gift-wrap-3-1.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-7975641284893",
    "handle": "cordon-bleu-blanc-rouge",
    "title": "Cordon FRANCE",
    "subtitle": "Muscu · Bleu",
    "price": 15,
    "description": "Le Cordon Tricolore - ALLEZ LES BLEUS - Bleu Blanc Rouge - Kettel. (vendu au mètre) 1 mètre de Cordon Bleu Blanc Rouge Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre…",
    "fullDescription": "Le Cordon Tricolore - ALLEZ LES BLEUS - Bleu Blanc Rouge - Kettel. (vendu au mètre) 1 mètre de Cordon Bleu Blanc Rouge Mate Kettel Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-bleu-blanc-rouge-1.jpg",
      "/images/products/shopify/cordon-bleu-blanc-rouge-2.png",
      "/images/products/shopify/cordon-bleu-blanc-rouge-3.jpg"
    ],
    "thumbImage": "/images/products/shopify/cordon-bleu-blanc-rouge-1.jpg",
    "heroImage": "/images/products/shopify/cordon-bleu-blanc-rouge-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6836140474437",
    "handle": "gift-wrap-1",
    "title": "Pochette Cadeau Kettel",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 3.5,
    "description": "La pochette cadeau idéale pour sublimer votre bijou Kettel lors des fêtes ou pour une occasion spéciale !",
    "fullDescription": "La pochette cadeau idéale pour sublimer votre bijou Kettel lors des fêtes ou pour une occasion spéciale !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/gift-wrap-1-1.png"
    ],
    "thumbImage": "/images/products/shopify/gift-wrap-1-1.png",
    "heroImage": "/images/products/shopify/gift-wrap-1-1.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6746541555781",
    "handle": "bracelet-danse-platine",
    "title": "MyDANSE",
    "subtitle": "Muscu · Les Chaussons Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France. - Cordon 100% polyester - 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaqué argent brossé 10 microns - Diamètre médaille : 17mm - Résist…",
    "fullDescription": "- Créé, fabriqué et assemblé en France. - Cordon 100% polyester - 2,2mm - fabriqué en France - Pendentif creusé au niveau du motif - Plaqué argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau Le symbole des chaussons, l'allié inconditionnel des passionné(e)s de danse ! Le pendentif Chaussons de Danse est fabriqué en laiton, plaqué en argent brossé et assemblé sur son cordon 100% fibre de polyester à la main en France.",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-danse-platine-1.png",
      "/images/products/shopify/bracelet-danse-platine-2.jpg",
      "/images/products/shopify/bracelet-danse-platine-3.png",
      "/images/products/shopify/bracelet-danse-platine-4.jpg",
      "/images/products/shopify/bracelet-danse-platine-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-danse-platine-1.png",
    "heroImage": "/images/products/shopify/bracelet-danse-platine-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6746537984069",
    "handle": "bracelet-hockey-silver",
    "title": "MyHOCKEY Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France. - Pendentif creusé au niveau du motif - Plaquage plaqué argent 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des passionn…",
    "fullDescription": "- Créé, fabriqué et assemblé en France. - Pendentif creusé au niveau du motif - Plaquage plaqué argent 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des passionné(e)s de Hockey ! Avec sa gravure fine et sa robustesse, le bracelet Hockey Kettel accompagne les hockeyeurs au quotidien. Le petit mot d'Estelle, la créatrice : \"Pourquoi les Crosses ? J'ai choisi les crosses pour représenter le Hockey sous toutes ses formes. Sur glace ou sur gazon, le hockeyeur ce sont ses armes pour attaquer, défendre et marquer ! \"",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-hockey-silver-1.png",
      "/images/products/shopify/bracelet-hockey-silver-2.png",
      "/images/products/shopify/bracelet-hockey-silver-3.png",
      "/images/products/shopify/bracelet-hockey-silver-4.jpg",
      "/images/products/shopify/bracelet-hockey-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-hockey-silver-1.png",
    "heroImage": "/images/products/shopify/bracelet-hockey-silver-2.png",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6746534150213",
    "handle": "bracelet-yoga-silver",
    "title": "MyYoga Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 39,
    "description": "Découvrez le Bracelet Yoga Kettel ! - Symbole Fleur de Lotus - Fabriqué en France. - Pendentif creusé au niveau du motif - Plaquage platine haute qualité - Diamètre médaille : 17mm L'allié incondition…",
    "fullDescription": "Découvrez le Bracelet Yoga Kettel ! - Symbole Fleur de Lotus - Fabriqué en France. - Pendentif creusé au niveau du motif - Plaquage platine haute qualité - Diamètre médaille : 17mm L'allié inconditionnel des passionné(e)s de yoga ! Avec sa gravure fine et sa robustesse, le bracelet Yoga Kettel accompagne les yogies au quotidien. Le yoga ne se limite pas aux postures, c’est avant tout une philosophie de vie. Pourquoi la Fleur de Lotus ? Nous avons choisis la Fleur de Lotus pour représenté le Yoga car elle est considérée comme un symbole d’illumination, de pureté, de renaissance et de triomphe sur les obstacles. Si vous pratiquez le yoga ou même la méditation, vous avez surement utilisé l’image du lotus. La posture du lotus par exemple est l’une des positions fondamentales pratiquées pour la respiration profonde. Le pendentif Fleur de Lotus Kettel est fabriqué en laiton plaqué platine et assemblé sur son cordon 100% fibre de polyester à la main en France. Son cordon, 100% fibre de polyester, est ultra-résistant, léger pour un maintien optimal.",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-yoga-silver-1.png",
      "/images/products/shopify/bracelet-yoga-silver-2.png",
      "/images/products/shopify/bracelet-yoga-silver-3.png",
      "/images/products/shopify/bracelet-yoga-silver-4.png",
      "/images/products/shopify/bracelet-yoga-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-yoga-silver-1.png",
    "heroImage": "/images/products/shopify/bracelet-yoga-silver-2.png",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6746532544581",
    "handle": "bracelet-hamecon-platine",
    "title": "MyPÊCHE",
    "subtitle": "Muscu · L'Hameçon Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France. - Pendentif creusé au niveau du motif - Plaqué argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des passionnés…",
    "fullDescription": "- Créé, fabriqué et assemblé en France. - Pendentif creusé au niveau du motif - Plaqué argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des passionnés de pêche ! Avec son emboutissage marqué et sa robustesse, le bracelet Hameçon Kettel accompagne les pêcheurs sur les plus grandes sorties pêche d'eau douce et d'eau salé !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-hamecon-platine-1.png",
      "/images/products/shopify/bracelet-hamecon-platine-2.jpg",
      "/images/products/shopify/bracelet-hamecon-platine-3.jpg",
      "/images/products/shopify/bracelet-hamecon-platine-4.jpg",
      "/images/products/shopify/bracelet-hamecon-platine-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-hamecon-platine-1.png",
    "heroImage": "/images/products/shopify/bracelet-hamecon-platine-2.jpg",
    "cordColors": [
      "homme",
      "femme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6746527400005",
    "handle": "bracelet-run-man-silver",
    "title": "MyRUNNING",
    "subtitle": "Running · Le Coureur Plaqué Argent",
    "price": 39,
    "description": "- Créé, fabriqué et assemblé en France. - Pendentif creusé au niveau du motif - Plaqué argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des coureurs !…",
    "fullDescription": "- Créé, fabriqué et assemblé en France. - Pendentif creusé au niveau du motif - Plaqué argent brossé 10 microns - Diamètre médaille : 17mm - Résiste à l'eau douce L'allié inconditionnel des coureurs ! Avec sa gravure fine et sa robustesse, le bracelet Run Man Kettel accompagne les passionné(e)s de course, de vitesse ou de fond, dans leur sport préféré !",
    "sport": "running",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-run-man-silver-1.png",
      "/images/products/shopify/bracelet-run-man-silver-2.jpg",
      "/images/products/shopify/bracelet-run-man-silver-3.png",
      "/images/products/shopify/bracelet-run-man-silver-4.png",
      "/images/products/shopify/bracelet-run-man-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-run-man-silver-1.png",
    "heroImage": "/images/products/shopify/bracelet-run-man-silver-2.jpg",
    "cordColors": [
      "homme",
      "enfant"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6746483392581",
    "handle": "bracelet-running-woman-silver",
    "title": "Run Woman | Le souvenir de votre course",
    "subtitle": "Running · Plaqué Argent Brossé",
    "price": 39,
    "description": "✔Le bracelet des sportives qui vont jusqu’au bout ✔Votre course. Votre temps. Votre médaille à vie. ✔Résiste à l'eau et à la transpiration ✔Pendentif Acier Inoxydable garanti 1 an ✔Taille unique - cor…",
    "fullDescription": "✔Le bracelet des sportives qui vont jusqu’au bout ✔Votre course. Votre temps. Votre médaille à vie. ✔Résiste à l'eau et à la transpiration ✔Pendentif Acier Inoxydable garanti 1 an ✔Taille unique - cordon ajustable",
    "sport": "running",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-running-woman-silver-1.jpg",
      "/images/products/shopify/bracelet-running-woman-silver-2.jpg",
      "/images/products/shopify/bracelet-running-woman-silver-3.jpg",
      "/images/products/shopify/bracelet-running-woman-silver-4.jpg",
      "/images/products/shopify/bracelet-running-woman-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-running-woman-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-running-woman-silver-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "baseball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6717397958725",
    "handle": "bracelet-boxe-silver",
    "title": "Cordon Gant de Boxe | Plaqué Argent",
    "subtitle": "Boxe · Acier Inoxydable 316L",
    "price": 49,
    "description": "Bracelet Gant de Boxe — Élégance Combative Conçu pour celles et ceux qui cultivent la passion du combat avec exigence, ce bracelet incarne une esthétique à la fois affirmée et raffinée. Son pendentif …",
    "fullDescription": "Bracelet Gant de Boxe — Élégance Combative Conçu pour celles et ceux qui cultivent la passion du combat avec exigence, ce bracelet incarne une esthétique à la fois affirmée et raffinée. Son pendentif en forme de gant de boxe, réalisé en laiton plaqué argent 10 microns, impose une présence subtile et distinctive. Monté sur un cordon résistant, il allie caractère et durabilité dans un esprit résolument contemporain. Caractéristiques : Pendentif gant de boxe : 22 mm (longueur) x 10 mm (largeur) Laiton plaqué argent antique 10 microns Cordon 100 % polyester : diamètre 2,2 mm Fabrication artisanale en France Pensé pour un usage quotidien, ce bijou est résistant à l’eau et conçu sans allergènes. Il bénéficie d’une garantie d’un an. Plus qu’un simple accessoire, ce bracelet est un symbole. Il évoque la discipline, la détermination et l’intensité propres aux sports de combat — de la boxe anglaise au MMA, en passant par la savate ou le kick-boxing. Une pièce à forte identité, destinée à ceux qui ne font aucun compromis entre style et engagement.",
    "sport": "boxe",
    "category": "cordon",
    "finish": "Acier Inoxydable 316L",
    "images": [
      "/images/products/shopify/bracelet-boxe-silver-1.png",
      "/images/products/shopify/bracelet-boxe-silver-2.jpg",
      "/images/products/shopify/bracelet-boxe-silver-3.jpg",
      "/images/products/shopify/bracelet-boxe-silver-4.jpg",
      "/images/products/shopify/bracelet-boxe-silver-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-boxe-silver-1.png",
    "heroImage": "/images/products/shopify/bracelet-boxe-silver-2.jpg",
    "cordColors": [
      "noir",
      "bleu",
      "rose-pale",
      "kaki",
      "turquoise",
      "gris"
    ],
    "featured": false,
    "tags": [
      "inox",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-6709123219525",
    "handle": "bracelet-flocon-silver",
    "title": "Flocon | Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 49,
    "description": "Le bracelet des amoureux des sports d'hiver ! ✔️Bracelet sur cordon avec pendentif en forme de flocon de neige ✔️Laiton plaqué argent ✔️Diamètre pendentif : 11 mm ✔️Cordon 100% polyester : 2,2mm ✔️Con…",
    "fullDescription": "Le bracelet des amoureux des sports d'hiver ! ✔️Bracelet sur cordon avec pendentif en forme de flocon de neige ✔️Laiton plaqué argent ✔️Diamètre pendentif : 11 mm ✔️Cordon 100% polyester : 2,2mm ✔️Confectionné en France ✔️Garanti 12 mois ✔️Résistant à l'eau",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-flocon-silver-1.png",
      "/images/products/shopify/bracelet-flocon-silver-2.png",
      "/images/products/shopify/bracelet-flocon-silver-3.png",
      "/images/products/shopify/bracelet-flocon-silver-4.png",
      "/images/products/shopify/bracelet-flocon-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-flocon-silver-1.png",
    "heroImage": "/images/products/shopify/bracelet-flocon-silver-2.png",
    "cordColors": [
      "noir",
      "ocean",
      "kaki",
      "turquoise",
      "rose-pale",
      "france"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4577441316933",
    "handle": "bracelet-disque-olympique-silver",
    "title": "Disque Olympique | Inox 316 L",
    "subtitle": "Muscu · Acier Inoxydable 316L",
    "price": 49,
    "description": "Bracelet Disque Olympique - L’emblème des passionné(e)s de force et de performance Affichez votre exigence avec un bijou qui incarne la rigueur, la progression et la puissance. Le bracelet Disque Olym…",
    "fullDescription": "Bracelet Disque Olympique - L’emblème des passionné(e)s de force et de performance Affichez votre exigence avec un bijou qui incarne la rigueur, la progression et la puissance. Le bracelet Disque Olympique rend hommage à l’un des symboles les plus iconiques du Cross Training, de la musculation et de l’haltérophilie : le disque, au cœur de chaque mouvement, de chaque record, de chaque dépassement. Confectionné avec précision dans notre atelier en France, ce bracelet associe élégance minimaliste et robustesse. Son pendentif en forme de disque olympique, en acier inoxydable 316L, est conçu pour durer : il résiste à l’eau, à la transpiration et à l’intensité de vos entraînements, tout en conservant son éclat. Son cordon 100% polyester, fabriqué en France, garantit un confort optimal et une excellente tenue au poignet, que vous soyez en pleine séance ou dans votre quotidien. Dans toutes les disciplines de force, Cross Training, haltérophilie, musculation, le disque olympique est un repère universel. Il symbolise la progression, la discipline et la quête constante de performance. Porter ce bracelet, c’est revendiquer cet état d’esprit et afficher une appartenance à une communauté engagée. Caractéristiques : Pendentif disque olympique en acier inoxydable 316L Dimensions du pendentif : 2 cm x 1,5 cm Cordon haute résistance 100% polyester (fabrication française) Résistant à l’eau et à l’usure Épuré, résistant et chargé de sens, le bracelet disque olympique accompagne chaque athlète dans son parcours, bien au-delà de la salle.",
    "sport": "muscu",
    "category": "signature",
    "finish": "Acier Inoxydable 316L",
    "badge": "Premium",
    "images": [
      "/images/products/shopify/bracelet-disque-olympique-silver-1.jpg",
      "/images/products/shopify/bracelet-disque-olympique-silver-2.jpg",
      "/images/products/shopify/bracelet-disque-olympique-silver-3.jpg",
      "/images/products/shopify/bracelet-disque-olympique-silver-4.jpg",
      "/images/products/shopify/bracelet-disque-olympique-silver-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-disque-olympique-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-disque-olympique-silver-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "gris",
      "kaki",
      "turquoise",
      "rose-pale"
    ],
    "featured": false,
    "tags": [
      "inox",
      "Silver"
    ],
    "specs": [
      {
        "key": "Pendentif",
        "value": "Acier Inoxydable 316L hypoallergénique"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      },
      {
        "key": "Étanchéité",
        "value": "Résiste eau, transpiration, chlore"
      }
    ]
  },
  {
    "id": "shopify-4577434009669",
    "handle": "bracelet-kettlebell-silver",
    "title": "Kettlebell | Inox 316 L",
    "subtitle": "Muscu · Acier Inoxydable 316L",
    "price": 49,
    "description": "Bracelet Kettlebell – L’icône des passionné(e)s de Cross Training et Hyrox Affirmez votre engagement avec un bijou qui incarne la puissance, la discipline et la performance. Le bracelet Kettlebell est…",
    "fullDescription": "Bracelet Kettlebell – L’icône des passionné(e)s de Cross Training et Hyrox Affirmez votre engagement avec un bijou qui incarne la puissance, la discipline et la performance. Le bracelet Kettlebell est bien plus qu’un accessoire : c’est un symbole fort pour celles et ceux qui vivent le Cross Training et l’Hyrox comme un véritable mode de vie. Fabriqué avec exigence dans notre atelier en France, ce bracelet allie savoir-faire artisanal et matériaux premium. Son pendentif kettlebell en acier inoxydable 316L, reconnu pour sa résistance exceptionnelle, conserve son éclat face à l’eau, à la transpiration et aux entraînements les plus intensifs. Son cordon 100% polyester, également conçu en France, assure confort, durabilité et maintien optimal, que ce soit lors de vos WODs ou dans votre quotidien. Dans les box de Cross Training comme sur les terrains de compétition Hyrox, la kettlebell est une icône. Elle représente la force mentale, la persévérance et le dépassement de soi. Porter ce bracelet, c’est afficher fièrement ces valeurs et appartenir à une communauté exigeante qui ne transige jamais avec ses objectifs. Caractéristiques : Pendentif kettlebell en acier inoxydable 316L Dimensions du pendentif : 2 cm x 1,5 cm Cordon haute résistance 100% polyester (fabrication française) Résistant à l’eau et à l’usure Élégant, robuste et chargé de sens, le bracelet kettlebell est le détail qui fait la différence, à la salle comme au quotidien.",
    "sport": "muscu",
    "category": "signature",
    "finish": "Acier Inoxydable 316L",
    "badge": "Premium",
    "images": [
      "/images/products/shopify/bracelet-kettlebell-silver-1.jpg",
      "/images/products/shopify/bracelet-kettlebell-silver-2.jpg",
      "/images/products/shopify/bracelet-kettlebell-silver-3.jpg",
      "/images/products/shopify/bracelet-kettlebell-silver-4.jpg",
      "/images/products/shopify/bracelet-kettlebell-silver-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-kettlebell-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-kettlebell-silver-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "vert",
      "turquoise",
      "rose-pale",
      "kaki"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Pendentif",
        "value": "Acier Inoxydable 316L hypoallergénique"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      },
      {
        "key": "Étanchéité",
        "value": "Résiste eau, transpiration, chlore"
      }
    ]
  },
  {
    "id": "shopify-4572650537029",
    "handle": "bracelet-haltere-silver",
    "title": "Haltère Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 49,
    "description": "Découvrez le bracelet Haltère Kettel . Créé, fabriqué et assemblé en France Cordon 100% polyester et fabriqué en France Diamètre pendentif : 2,5cm x 0,7cm Pendentif Acier Inoxydable - Qualité optimale…",
    "fullDescription": "Découvrez le bracelet Haltère Kettel . Créé, fabriqué et assemblé en France Cordon 100% polyester et fabriqué en France Diamètre pendentif : 2,5cm x 0,7cm Pendentif Acier Inoxydable - Qualité optimale Résiste à l'eau (douce ET salée) Le célèbre symbole de l'haltère idéal pour vos entraînements d'haltérophilie en club ou box de cross training. Le symbole de la musculation alliant performance et robustesse, ce bracelet musculation pour homme ou femme, bijou pour sportif, accompagne les passionnés de training intense dans leur quête de force physique et d'atteinte de leur objectif.",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-haltere-silver-1.png",
      "/images/products/shopify/bracelet-haltere-silver-2.png",
      "/images/products/shopify/bracelet-haltere-silver-3.jpg",
      "/images/products/shopify/bracelet-haltere-silver-4.png",
      "/images/products/shopify/bracelet-haltere-silver-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-haltere-silver-1.png",
    "heroImage": "/images/products/shopify/bracelet-haltere-silver-2.png",
    "cordColors": [
      "noir",
      "marine",
      "vert",
      "rouge",
      "orange",
      "kaki",
      "gris",
      "turquoise",
      "rose-pale",
      "france",
      "italie",
      "espagne",
      "belgique",
      "suisse"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4575836471365",
    "handle": "bracelet-football-silver",
    "title": "Football Argent",
    "subtitle": "Football · Plaqué Argent Brossé",
    "price": 49,
    "description": "Le bracelet des amoureux du football ! Bracelet sur cordon avec pendentif en forme de Ballon de Football Argent plaqué 10 microns Diamètre pendentif : 10 mm Cordon 100% polyester : 2,2mm Fabriqué et a…",
    "fullDescription": "Le bracelet des amoureux du football ! Bracelet sur cordon avec pendentif en forme de Ballon de Football Argent plaqué 10 microns Diamètre pendentif : 10 mm Cordon 100% polyester : 2,2mm Fabriqué et assemblé à la main en France Bracelet garanti 1 an Résistant à l'eau douce Sans allergène",
    "sport": "football",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-football-silver-1.jpg",
      "/images/products/shopify/bracelet-football-silver-2.jpg",
      "/images/products/shopify/bracelet-football-silver-3.png",
      "/images/products/shopify/bracelet-football-silver-4.png",
      "/images/products/shopify/bracelet-football-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-football-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-football-silver-2.jpg",
    "cordColors": [
      "noir",
      "bleu-marine",
      "kaki",
      "rose-pale",
      "turquoise",
      "france",
      "vert"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4575827820613",
    "handle": "bracelet-basketball-silver",
    "title": "Basketball Argent",
    "subtitle": "Basketball · Plaqué Argent Brossé",
    "price": 49,
    "description": "Le bracelet des amoureux du Basketball ! Bracelet sur cordon avec pendentif en forme de Ballon de Basketball Argent Plaqué 11 microns Diamètre pendentif : 10 mm Cordon 100% polyester : 2,2mm Confectio…",
    "fullDescription": "Le bracelet des amoureux du Basketball ! Bracelet sur cordon avec pendentif en forme de Ballon de Basketball Argent Plaqué 11 microns Diamètre pendentif : 10 mm Cordon 100% polyester : 2,2mm Confectionné à la main en France Bracelet garanti 1 an Résistant à l'eau Sans allergène",
    "sport": "basketball",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-basketball-silver-1.jpg",
      "/images/products/shopify/bracelet-basketball-silver-2.png",
      "/images/products/shopify/bracelet-basketball-silver-3.png",
      "/images/products/shopify/bracelet-basketball-silver-4.png",
      "/images/products/shopify/bracelet-basketball-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-basketball-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-basketball-silver-2.png",
    "cordColors": [
      "noir",
      "marine",
      "rose-pale",
      "turquoise",
      "kaki",
      "france"
    ],
    "featured": false,
    "tags": [
      "basketball",
      "Le Matte",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4575822807109",
    "handle": "bracelet-rugby-silver",
    "title": "Rugby Argent",
    "subtitle": "Rugby · Plaqué Argent Brossé",
    "price": 49,
    "description": "Le bracelet des amoureux de Rugby ! Bracelet sur cordon en forme de Ballon de Rugby Argent plaqué 10 microns Diamètre pendentif GRAND BALLON : 20mm Diamètre pendentif PETIT BALLON : 15mm Cordon 100% p…",
    "fullDescription": "Le bracelet des amoureux de Rugby ! Bracelet sur cordon en forme de Ballon de Rugby Argent plaqué 10 microns Diamètre pendentif GRAND BALLON : 20mm Diamètre pendentif PETIT BALLON : 15mm Cordon 100% polyester : 2,2mm Fabriqué et assemblé à la main en France Bracelet garanti 1 an Résistant à l'eau Sans allergène",
    "sport": "rugby",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-rugby-silver-1.jpg",
      "/images/products/shopify/bracelet-rugby-silver-2.jpg",
      "/images/products/shopify/bracelet-rugby-silver-3.jpg",
      "/images/products/shopify/bracelet-rugby-silver-4.png",
      "/images/products/shopify/bracelet-rugby-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-rugby-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-rugby-silver-2.jpg",
    "cordColors": [
      "noir",
      "bleu-marine",
      "kaki",
      "rose-pale",
      "turquoise",
      "france"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4575816712261",
    "handle": "bracelet-tennis-silver",
    "title": "Tennis Argent",
    "subtitle": "Tennis · Plaqué Argent Brossé",
    "price": 49,
    "description": "Le bracelet des amoureux du Tennis ! Balle de Tennis Plaqué Argent 10 microns Diamètre pendentif : 11 mm Cordon 100% polyester : 2,2mm Confectionné à la main en France Bracelet garanti 1 an Résistant …",
    "fullDescription": "Le bracelet des amoureux du Tennis ! Balle de Tennis Plaqué Argent 10 microns Diamètre pendentif : 11 mm Cordon 100% polyester : 2,2mm Confectionné à la main en France Bracelet garanti 1 an Résistant à l'eau Sans allergène",
    "sport": "tennis",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-tennis-silver-1.jpg",
      "/images/products/shopify/bracelet-tennis-silver-2.png",
      "/images/products/shopify/bracelet-tennis-silver-3.png",
      "/images/products/shopify/bracelet-tennis-silver-4.png",
      "/images/products/shopify/bracelet-tennis-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-tennis-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-tennis-silver-2.png",
    "cordColors": [
      "noir",
      "bleu-marine",
      "turquoise",
      "rose-pale",
      "kaki",
      "france"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4575798493253",
    "handle": "bracelet-petanque-silver",
    "title": "Cordon Boule de Pétanque | Plaqué Argent",
    "subtitle": "Golf · Acier Inoxydable 316L",
    "price": 49,
    "description": "Bracelet Boule de Pétanque — Maîtrise Élégante Pensé pour celles et ceux qui cultivent le sens du geste juste, ce bracelet incarne une esthétique sobre, précise et affirmée. Son pendentif en forme de …",
    "fullDescription": "Bracelet Boule de Pétanque — Maîtrise Élégante Pensé pour celles et ceux qui cultivent le sens du geste juste, ce bracelet incarne une esthétique sobre, précise et affirmée. Son pendentif en forme de boule de pétanque, réalisé en laiton plaqué argent 10 microns, reflète une présence discrète mais distinctive. Monté sur un cordon résistant, il conjugue finesse et durabilité dans un équilibre parfaitement maîtrisé. Caractéristiques : Pendentif boule de pétanque : 11 mm (diamètre) Laiton plaqué argent 10 microns Cordon 100 % polyester : diamètre 2,2 mm Fabrication artisanale en France Pensé pour accompagner le quotidien, ce bijou est résistant à l’eau et conçu sans allergènes. Il bénéficie d’une garantie de 12 mois. Plus qu’un simple accessoire, ce bracelet est un symbole. Il évoque la précision, la concentration et le sang-froid — ces qualités essentielles qui font la différence à chaque lancer. Une pièce à l’identité subtile, destinée à ceux qui recherchent l’équilibre entre maîtrise et élégance.",
    "sport": "golf",
    "category": "cordon",
    "finish": "Acier Inoxydable 316L",
    "images": [
      "/images/products/shopify/bracelet-petanque-silver-1.png",
      "/images/products/shopify/bracelet-petanque-silver-2.jpg",
      "/images/products/shopify/bracelet-petanque-silver-3.jpg",
      "/images/products/shopify/bracelet-petanque-silver-4.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-petanque-silver-1.png",
    "heroImage": "/images/products/shopify/bracelet-petanque-silver-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "turquoise",
      "rose-pale"
    ],
    "featured": false,
    "tags": [
      "inox",
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4575789973573",
    "handle": "bracelet-volleyball-silver",
    "title": "Volleyball Plaqué Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 49,
    "description": "Le bracelet des amoureux du volleyball ! Ballon de volley plaqué argent Diamètre pendentif : 10 mm Cordon 100% polyester : 2,2mm Confectionné à la main en France Bracelet garanti 1 an Résistant à l'ea…",
    "fullDescription": "Le bracelet des amoureux du volleyball ! Ballon de volley plaqué argent Diamètre pendentif : 10 mm Cordon 100% polyester : 2,2mm Confectionné à la main en France Bracelet garanti 1 an Résistant à l'eau Sans allergène",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/bracelet-volleyball-silver-1.jpg",
      "/images/products/shopify/bracelet-volleyball-silver-2.jpg",
      "/images/products/shopify/bracelet-volleyball-silver-3.jpg",
      "/images/products/shopify/bracelet-volleyball-silver-4.jpg",
      "/images/products/shopify/bracelet-volleyball-silver-5.jpg"
    ],
    "thumbImage": "/images/products/shopify/bracelet-volleyball-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-volleyball-silver-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "turquoise",
      "rose-pale",
      "bleu-blanc-rouge"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4561887199301",
    "handle": "fer-a-cheval-silver",
    "title": "Fer à Cheval Argent",
    "subtitle": "Muscu · Plaqué Argent Brossé",
    "price": 49,
    "description": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif FER À CHEVAL relief - Plaquage Argent 10 microns - Dimension du pendentif : 1,7cm x 1,8cm - Résiste à l'…",
    "fullDescription": "- Créé, fabriqué et assemblé en France - Cordon 100% polyester - fabriqué en France - Pendentif FER À CHEVAL relief - Plaquage Argent 10 microns - Dimension du pendentif : 1,7cm x 1,8cm - Résiste à l'eau Le bracelet des passionnés d'ÉQUITATION ! Avec sa gravure fine et sa robustesse, le bracelet Fer à Cheval ne quittera plus le poignet des cavaliers et cavalières passionnées pour leur rappeler à quel point leur sport préféré leur donne du bonheur !",
    "sport": "muscu",
    "category": "signature",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/fer-a-cheval-silver-1.png",
      "/images/products/shopify/fer-a-cheval-silver-2.jpg",
      "/images/products/shopify/fer-a-cheval-silver-3.png",
      "/images/products/shopify/fer-a-cheval-silver-4.png",
      "/images/products/shopify/fer-a-cheval-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/fer-a-cheval-silver-1.png",
    "heroImage": "/images/products/shopify/fer-a-cheval-silver-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "vert",
      "rouge",
      "orange",
      "turquoise",
      "kaki",
      "gris",
      "rose-pale",
      "france",
      "espagne",
      "italie",
      "suisse",
      "belgique"
    ],
    "featured": false,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-4561025728581",
    "handle": "bracelet-golf-silver",
    "title": "Cordon Balle de Golf | Platine",
    "subtitle": "Golf · Plaqué Platine",
    "price": 69,
    "description": "Bracelet sur cordon avec perle de golf et pendentif en laiton plaqué platine PVD. Ce bracelet sur cordon incarne l’univers du golf à travers une interprétation minimaliste et contemporaine. La perle d…",
    "fullDescription": "Bracelet sur cordon avec perle de golf et pendentif en laiton plaqué platine PVD. Ce bracelet sur cordon incarne l’univers du golf à travers une interprétation minimaliste et contemporaine. La perle de golf, symbole central, évoque la précision, la maîtrise de soi et la persévérance — des valeurs fondamentales de ce sport exigeant. Elle devient un signe discret d’appartenance à un état d’esprit où rigueur et élégance se rencontrent. Le pendentif en laiton est sublimé par un placage platine PVD (Physical Vapor Deposition), une technologie de pointe reconnue pour sa résistance supérieure à l’usure, aux rayures et à l’oxydation. Ce traitement garantit une tenue durable de la couleur et un éclat stable dans le temps, tout en offrant une finition moderne et haut de gamme. Monté sur un cordon ajustable, ce bracelet unisexe s’adapte à tous les poignets grâce à son nœud coulissant. Léger et polyvalent, il se porte aussi bien sur le parcours qu’au quotidien, affirmant une élégance sportive et maîtrisée. Cordon ajustable par nœud coulissant, disponible en plusieurs coloris. Ce modèle peut également être décliné en collier sur cordon. Chaque création présente de légères variations, rendant chaque pièce unique. Sphère signature — balle de golf finition plaqué platine PVD Diamètre du pendentif — 10 mm Cordon technique — polyester haute tenue, 2,2 mm Fabrication artisanale — réalisé à la main en France Garantie — 12 mois Résistance — conçu pour un usage quotidien, résistant à l’eau Confort — sans allergène",
    "sport": "golf",
    "category": "prestige",
    "finish": "Plaqué Platine",
    "images": [
      "/images/products/shopify/bracelet-golf-silver-1.jpg",
      "/images/products/shopify/bracelet-golf-silver-2.jpg",
      "/images/products/shopify/bracelet-golf-silver-3.jpg",
      "/images/products/shopify/bracelet-golf-silver-4.jpg",
      "/images/products/shopify/bracelet-golf-silver-5.png"
    ],
    "thumbImage": "/images/products/shopify/bracelet-golf-silver-1.jpg",
    "heroImage": "/images/products/shopify/bracelet-golf-silver-2.jpg",
    "cordColors": [
      "noir",
      "marine",
      "rose-pale",
      "vert",
      "kaki",
      "turquoise"
    ],
    "featured": true,
    "tags": [
      "Silver"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  },
  {
    "id": "shopify-2070083305529",
    "handle": "cordon-bracelet-kettel-le-matte",
    "title": "Cordon",
    "subtitle": "Muscu · Noir Mate",
    "price": 12,
    "description": "Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof…",
    "fullDescription": "Longueur : 1 mètre : convient pour 2 bracelets ou 1 collier. Diamètre : 2,2 mm Matière : Tressage mate - 100% Polyester Fabriqué en France Waterproof",
    "sport": "muscu",
    "category": "cordon",
    "finish": "Plaqué Argent Brossé",
    "images": [
      "/images/products/shopify/cordon-bracelet-kettel-le-matte-1.png",
      "/images/products/shopify/cordon-bracelet-kettel-le-matte-2.png"
    ],
    "thumbImage": "/images/products/shopify/cordon-bracelet-kettel-le-matte-1.png",
    "heroImage": "/images/products/shopify/cordon-bracelet-kettel-le-matte-2.png",
    "cordColors": [
      "noir",
      "marine",
      "kaki",
      "rouge",
      "blanc"
    ],
    "featured": false,
    "tags": [
      "Le Matte"
    ],
    "specs": [
      {
        "key": "Diamètre",
        "value": "10 mm"
      },
      {
        "key": "Pendentif",
        "value": "Acier plaqué argent brossé 10 microns"
      },
      {
        "key": "Cordon",
        "value": "Polyester tressé — France"
      },
      {
        "key": "Taille",
        "value": "Réglable 15–21 cm"
      },
      {
        "key": "Atelier",
        "value": "Assemblé en France"
      }
    ]
  }
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
  return PRODUCTS.filter(p => p.badge === 'Best-seller' || p.featured).slice(0, 8)
}

export const SPORT_MAP: Record<string, string[]> = {
  football: PRODUCTS.filter(p => p.sport === 'football').map(p => p.id),
  basketball: PRODUCTS.filter(p => p.sport === 'basketball').map(p => p.id),
  tennis: PRODUCTS.filter(p => p.sport === 'tennis').map(p => p.id),
  running: PRODUCTS.filter(p => p.sport === 'running').map(p => p.id),
  muscu: PRODUCTS.filter(p => p.sport === 'muscu').map(p => p.id),
  rugby: PRODUCTS.filter(p => p.sport === 'rugby').map(p => p.id),
  golf: PRODUCTS.filter(p => p.sport === 'golf').map(p => p.id),
  boxe: PRODUCTS.filter(p => p.sport === 'boxe').map(p => p.id),
  cyclisme: PRODUCTS.filter(p => p.sport === 'cyclisme').map(p => p.id),
  natation: PRODUCTS.filter(p => p.sport === 'natation').map(p => p.id),
}
