
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
              { name: 'Butt Hinges',id:'bh', href: 'butt_hinges' },
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
              { name: 'MS Drawer Channel',id:'tc', href: 'drawer_slides' },
              { name: 'SS Drawer Channel',id:'scc', href: 'drawer_slides' },

            ],
          },
          {
            id: 'aluminium_profile',
            name: 'Aluminium Profile',
            items: [
              { name: 'Frame Profile',id:'tc', href: 'aluminium_profile' },
              { name: 'Frame With Hnadle Profile',id:'scc', href: 'aluminium_profile' },
              { name: 'Handle profile',id:'scc', href: 'aluminium_profile' },

            ],
          },
          {
            id: 'door_accessories',
            name: 'Door  Accessories',
            items: [
              { name: 'Door Stopper',id:'tc', href: 'door_accessories' },
              { name: 'Door Closer',id:'scc', href: 'door_accessories' },
             

            ],
          },
          {
            id: 'handles_knobs',
            name: 'Handles & Knobs',
            items: [
              { name: 'Cabinet Handles',id:'tc', href: 'general_hardware' },
              { name: 'Main Door Handles',id:'tc', href: 'general_hardware' },
              { name: 'Mortice Handles',id:'tc', href: 'general_hardware' },
              { name: 'Glass Door Handles',id:'tc', href: 'general_hardware' },
              { name: 'Knobs',id:'tc', href: 'general_hardware' },
             
             

            ],
          },
          {
            id: 'general_hardware',
            name: 'General Hardware',
            items: [
              { name: 'General Hardware',id:'tc', href: 'general_hardware' },
             
             

            ],
          },

        ],
      },
      {
        id: 'kitchen_wardrobe_accessories',
        name: 'Kitchen & Wardrobe Accessories',
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
            id: 'kitchem_accessories',
            name: 'Kitchen Accessories',
            items: [
              { name: 'Tandem Box',id:'bh', href: 'hinges' },
              { name: 'Corner units',id:'ah', href: 'hinges' },
              { name: 'Tall Units',id:'hh', href: 'hinges' },
              { name: 'Uplifts',id:'ps', href: 'hinges' },
              { name: 'Rolling Shutters',id:'os', href: 'hinges' },
              { name: 'ACP Baskets',id:'os', href: 'hinges' },
              { name: 'Wire Baskets',id:'os', href: 'hinges' },

            ],
          },
         
          {
            id: 'wardrobe_acessories',
            name: 'Wardrobe Accessories',
            items: [
              { name: 'Jewellery Box',id:'tc', href: 'aluminium_profile' },
              { name: 'Shirt Pullout',id:'scc', href: 'aluminium_profile' },
              { name: 'Trouser Pullout',id:'scc', href: 'aluminium_profile' },
              { name: 'Shoe Rack',id:'scc', href: 'aluminium_profile' },
              { name: 'Pulldown',id:'scc', href: 'aluminium_profile' },

            ],
          },
     
         

        ],
      },
      {
        id: 'bathroom_fittings',
        name: 'Bathroom Fittings',
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
            id: 'bathroom_fittings',
            name: 'Bathroom Fittings',
            items: [
              { name: 'Wash Basins',id:'bh', href: 'hinges' },
              { name: 'Water Closet',id:'ah', href: 'hinges' },
              { name: 'Vanities',id:'hh', href: 'hinges' },
              { name: 'Shower Panels',id:'ps', href: 'hinges' },
              { name: 'General Accessories',id:'os', href: 'hinges' },
          

            ],
          }
        ],
      },
      {
        id: 'decorative_panels',
        name: 'Decorative Panels',
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
            id: 'decorative_panels',
            name: 'Decorative Panels',
            items: [
              { name: 'Louvers',id:'bh', href: 'hinges' },
              { name: 'Mouldings',id:'ah', href: 'hinges' },
              { name: 'Acrylic Sheets',id:'hh', href: 'hinges' },
              { name: 'Laminates',id:'ps', href: 'hinges' },

          

            ],
          }
        ],
      },
      {
        id: 'garments',
        name: 'Clothes',
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
            id: 'men',
            name: 'Men',
            items: [
              { name: 'Shirts',id:'bh', href: 'hinges' },
              { name: 'T-Shirts',id:'ah', href: 'hinges' },
              { name: 'Jackets',id:'hh', href: 'hinges' },
              { name: 'Jeans',id:'ps', href: 'hinges' },
              { name: 'Trousers',id:'ps', href: 'hinges' },

          

            ],
          },
          {
            id: 'women',
            name: 'Women',
            items: [
              { name: 'Suits',id:'bh', href: 'hinges' },
              { name: 'Sarees',id:'ah', href: 'hinges' },
              { name: 'Western Wear',id:'hh', href: 'hinges' },
         
          

            ],
          }
        ],
      },

    ],
    pages: [
      // { name: 'Company', href: '#' },
      // { name: 'Stores', href: '#' },
    ],
  }