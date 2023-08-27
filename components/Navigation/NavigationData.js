
export const navigation = {
    categories: [
      {
        id: 'hardware_fittings',
        name: 'Hardware Fittings',
        // featured: [
        //   {
        //     name: 'New Arrivals',
        //     href: '/',
        //     // imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        //     imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        //   },
        //   {
        //     name: 'Basic Tees',
        //     href: '#',
        //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
        //     imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        //   },
        // ],
        sections: [
          {
            id: 'hinges',
            name: 'Hinges',
            items: [
              { name: 'Butt Hinges',id:'bh', href: 'hinges' },
              { name: 'Auto Hinges',id:'ah', href: 'hinges' },
              { name: 'Hydraulic Hinges',id:'hh', href: 'hinges' },
              { name: 'Piano Slides',id:'ps', href: 'hinges' },
              { name: 'Other Slides',id:'os', href: 'hinges' },

            ],
          },
          {
            id: 'drawer_slides',
            name: 'Drawer Slides',
            items: [
              { name: 'Teliscopic Channel',id:'tc', href: 'hinges' },
              { name: 'Soft Close Channel',id:'top', href: 'hinges' },

            ],
          },

        ],
      },

    ],
    pages: [
      // { name: 'Company', href: '#' },
      // { name: 'Stores', href: '#' },
    ],
  }