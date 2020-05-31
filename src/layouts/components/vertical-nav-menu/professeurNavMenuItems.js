/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [{
  url: "/",
  name: "Home",
  slug: "home",
  icon: "HomeIcon",
}, {
  url: null,
  name: "Evenements",
  tag: "2",
  tagColor: "warning",
  icon: "HomeIcon",
  i18n: "Dashboard",
  submenu: [{
      url: '/CreateEvent',
      name: "Creation Evenement",
      slug: "Creation-event",
    },
    {
      url: '/ListeEvent',
      name: "Liste des Evenements",
      slug: "list-event",
    },
  ]
}, {
  url: null,
  name: "Reservation",
  tag: "2",
  tagColor: "warning",
  icon: "HomeIcon",
  i18n: "Dashboard",
  submenu: [{
      url: '/ReservationSalle',
      name: "Creation Reservation",
      slug: "creation-reservation",
    },
    {
      url: '/ListeReservationSalle',
      name: "Liste des Reservations",
      slug: "liste-reservation",
    },
  ]
}, {
  url: "/PlaningdesSalles",
  name: "Planing des Salles",
  slug: "page2",
  icon: "FileIcon",
}, ]
