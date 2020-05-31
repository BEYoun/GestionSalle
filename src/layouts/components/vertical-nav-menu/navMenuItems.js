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
  },
  {
    url: "/page2",
    name: "Page 2",
    slug: "page2",
    icon: "FileIcon",
  }, {
    url: null,
    name: "Evenements",
    tag: "2",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "Dashboard",
    submenu: [{
        url: '/dashboard/analytics',
        name: "Creation Evenement",
        slug: "dashboard-analytics",
        i18n: "Analytics",
      },
      {
        url: '/listEvents',
        name: "Liste des Evenements",
        slug: "dashboard-ecommerce",
        i18n: "eCommerce",
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
        url: '/dashboard/analytics',
        name: "Creation Reservation",
        slug: "dashboard-analytics",
        i18n: "Analytics",
      },
      {
        url: '/listEvents',
        name: "Liste des Reservations",
        slug: "dashboard-ecommerce",
        i18n: "eCommerce",
      },
    ]
  }, {
    url: "/planningSalle",
    name: "Planning des Salles",
    slug: "page2",
    icon: "FileIcon",
  },
]
