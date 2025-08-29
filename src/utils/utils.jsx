const CompanyMaps = [
  { image: require('../../assets/images/Rahimo.png'), id: '1', name: 'Rahimo' },
  { image: require('../../assets/images/rakieta.png'), id: '2', name: 'Rakieta' },
  { image: require('../../assets/images/tcv.jpg'), id: '3', name: 'TCV' },
  { image: require('../../assets/images/tsr.png'), id: '4', name: 'TSR' },
  { image: require('../../assets/images/Rahimo.png'), id: '5', name: 'Rahimo' },
  { image: require('../../assets/images/rakieta.png'), id: '6', name: 'Rakieta' },
  { image: require('../../assets/images/Rahimo.png'), id: '7', name: 'Rahimo' },
  { image: require('../../assets/images/rakieta.png'), id: '8', name: 'Rakieta' },
  { image: require('../../assets/images/tcv.jpg'), id: '9', name: 'TCV' },
  { image: require('../../assets/images/tsr.png'), id: '10', name: 'TSR' },
  { image: require('../../assets/images/Rahimo.png'), id: '11', name: 'Rahimo' },
  { image: require('../../assets/images/rakieta.png'), id: '12', name: 'Rakieta' },
  { image: require('../../assets/images/Rahimo.png'), id: '13', name: 'Rahimo' },
  { image: require('../../assets/images/rakieta.png'), id: '14', name: 'Rakieta' },
  { image: require('../../assets/images/tcv.jpg'), id: '15', name: 'TCV' },
  { image: require('../../assets/images/tsr.png'), id: '16', name: 'TSR' },
  { image: require('../../assets/images/Rahimo.png'), id: '17', name: 'Rahimo' },
  { image: require('../../assets/images/rakieta.png'), id: '18', name: 'Rakieta' },
];

const Categories = [
  { name: 'Favoris', icon: 'heart-outline' },
  { name: 'Nouveauté', icon: 'star-outline' },
  { name: 'Populaire', icon: 'medal-outline' },
  { name: 'V.I.P', icon: 'shield-checkmark-outline' },
];

const BuStandar = [
  { image: require('../../assets/images/saramaya.jpg'), id:1},
  { image: require('../../assets/images/staf.jpg'), id:2},
  { image: require('../../assets/images/tsriimg.jpg'), id:3},
  { image: require('../../assets/images/RahimoBus.jpg'), id:4},
]

const BusVip = [
  { image: require('../../assets/images/elitis.jpg'), id:1},
  { image: require('../../assets/images/bus3.jpg'), id:2},
  { image: require('../../assets/images/bus2.jpg'), id:3},
  { image: require('../../assets/images/elitis.webp'), id:4},
]

const Services = [
  { id: '1', title: 'Expedition et livraison de colis', icon: 'bag-handle-outline', screen: 'DeliveryScreen' },
  { id: '2', title: 'Services de pressing', icon: 'basket-outline', screen: 'PressingScreen' },
  { id: '3', title: 'Mes Commandes', icon: 'cube-outline', screen: 'OrdersScreen' },
];

const ticketHistory = [
  { id: '1', number: '#0038695', details: 'votre voyage à destination de Bobo Dioulasso' },
];

const parcelHistory = [
  { id: '2', number: '#398625', details: 'votre colis à destination de Bobo Dioulasso' },
];

const pressingHistory = [
  { id: '3', number: 'commande pressing', details: 'Lavage & repassage' },
];

const helpData = [
  {
    id: '1',
    question: 'Comment faire une réservation ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '2',
    question: 'Comment trouver un bus ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '3',
    question: 'Comment faire une commande pressing ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '4',
    question: 'Comment faire une commande de livraison ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '5',
    question: 'Comment un pressing ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '6',
    question: 'Comment trouver une société de livraison ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const activeTickets = [
  { id: '1', destination: 'Bobo Dioulasso', date: '26 juil. 2025' },
  { id: '2', destination: 'Korhogo', date: '28 juil. 2025' },
];
const deliveries = [
  { id: '1', status: 'En transit', origin: 'Ouagadougou', destination: 'Bobo Dioulasso' },
  { id: '2', status: 'En attente', origin: 'Ouagadougou', destination: 'Korhogo' },
];
const pressings = [
  { id: '1', status: 'En cours', service: 'Lavage & repassage', pickupDate: '27 juil. 2025' },
];

export { 
  CompanyMaps, Categories, BuStandar, BusVip, Services,
  ticketHistory, parcelHistory, pressingHistory, helpData,
  activeTickets, deliveries, pressings, 
}