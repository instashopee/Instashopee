
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
              // { name: 'Auto Hinges',id:'ah', href: 'auto_hinges' },
              { name: 'Hydraulic Hinges',id:'hh', href: 'hydraulic_hinges' },
              // { name: 'Piano Hinges',id:'ps', href: 'piano_slides' },
              { name: 'Other Hinges',id:'os', href: 'other_slides' },

            ],
          },
          {
            id: 'drawer_slides',
            name: 'Drawer Slides',
            items: [
              { name: 'MS Drawer Channel',id:'tc', href: 'ms_drawer_channel' },
              { name: 'SS Drawer Channel',id:'scc', href: 'ss_drawer_channel' },

            ],
          },
          {
            id: 'aluminium_profile',
            name: 'Aluminium Profile',
            items: [
              { name: 'Frame Profile',id:'tc', href: 'frame_profile' },
              { name: 'Frame With Handle Profile',id:'scc', href: 'frame_with_handle_profile' },
              { name: 'Handle profile',id:'scc', href: 'handle_profile' },

            ],
          },
          {
            id: 'door_accessories',
            name: 'Door  Accessories',
            items: [
              { name: 'Door Stopper',id:'tc', href: 'door_stopper' },
              { name: 'Door Closer',id:'scc', href: 'door_closer' },
             

            ],
          },
          {
            id: 'handles_knobs',
            name: 'Handles & Knobs',
            items: [
              { name: 'Cabinet Handles',id:'tc', href: 'cabinet_handles' },
              { name: 'Main Door Handles',id:'tc', href: 'main_door_handles' },
              { name: 'Mortice Handles',id:'tc', href: 'mortice_handles' },
              { name: 'Glass Door Handles',id:'tc', href: 'glass_door_handles' },
              { name: 'Knobs',id:'tc', href: 'knobs' },
             
             

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
              { name: 'Tandem Box',id:'bh', href: 'tandom_box' },
              { name: 'Corner units',id:'ah', href: 'corner_units' },
              { name: 'Tall Units',id:'hh', href: 'tall_units' },
              { name: 'Uplifts',id:'ps', href: 'uplifts' }

            ],
          },
         
          {
            id: 'wardrobe_acessories',
            name: 'Wardrobe Accessories',
            items: [
              { name: 'Jewellery Box',id:'tc', href: 'jewellery_box' },
              { name: 'Shirt Pullout',id:'scc', href: 'shirt_pullout' },
              { name: 'Trouser Pullout',id:'scc', href: 'trouser_pullout' },
              { name: 'Shoe Rack',id:'scc', href: 'shoe_rack' },
              { name: 'Pulldown',id:'scc', href: 'pulldown' },
              { name: 'Sliding Fittings',id:'sf', href: 'sliding_fittings' },


            ],
          },
     
         

        ],
      },

      // {
      //   id: 'bathroom_fittings',
      //   name: 'Bathroom Fittings',
      //   // featured: [
      //   //   {
      //   //     name: 'New Arrivals',
      //   //     href: '/',
      //   //     // imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
      //   //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
      //   //     imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
      //   //   },
      //   //   {
      //   //     name: 'Basic Tees',
      //   //     href: '#',
      //   //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
      //   //     imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
      //   //   },
      //   // ],
      //   sections: [
      //     {
      //       id: 'bathroom_fittings',
      //       name: 'Bathroom Fittings',
      //       items: [
      //         { name: 'Wash Basin',id:'bh', href: 'wash_basin' },
      //         { name: 'Water Closet',id:'ah', href: 'water_closet' },
      //         { name: 'Vanities',id:'hh', href: 'vanities' },
      //         { name: 'Shower Panels',id:'ps', href: 'shower_panels' },
      //         { name: 'General Accessories',id:'os', href: 'general_accessories' },
          

      //       ],
      //     }
      //   ],
      // },
      {
        id: 'chimeny_and_cooktops',
        name: 'Chimney & Cooktops',

        sections: [
          {
            id: 'chimeny',
            name: 'Chimney & Cooktops',
            items: [
              { name: 'Chimney',id:'ch', href: 'chimney' },
              { name: 'Cooktop',id:'ct', href: 'cooktop' },
              { name: 'Microwave',id:'mw', href: 'microwave' },
              { name: 'Oven',id:'ov', href: 'oven' },
              { name: 'Other Appliances',id:'oa', href: 'other_appliances' },
          

            ],
          },
         
     
         

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
              { name: 'Louvers',id:'bh', href: 'louvers' },
              { name: 'Mouldings',id:'ah', href: 'mouldings' },
              { name: 'Acrylic Sheets',id:'hh', href: 'acrylic_sheets' },
              { name: 'Laminates',id:'ps', href: 'laminates' },

          

            ],
          }
        ],
      },
      // {
      //   id: 'garments',
      //   name: 'Clothes',
      //   // featured: [
      //   //   {
      //   //     name: 'New Arrivals',
      //   //     href: '/',
      //   //     // imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
      //   //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
      //   //     imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
      //   //   },
      //   //   {
      //   //     name: 'Basic Tees',
      //   //     href: '#',
      //   //     imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
      //   //     imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
      //   //   },
      //   // ],
      //   sections: [
      //     {
      //       id: 'men',
      //       name: 'Men',
      //       items: [
      //         { name: 'Shirts',id:'bh', href: 'shirts' },
      //         { name: 'T-Shirts',id:'ah', href: 'tshirts' },
      //         { name: 'Jackets',id:'hh', href: 'jackets' },
      //         { name: 'Jeans',id:'ps', href: 'jeans' },
      //         { name: 'Trousers',id:'ps', href: 'trousers' },

          

      //       ],
      //     },
      //     {
      //       id: 'women',
      //       name: 'Women',
      //       items: [
      //         { name: 'Suits',id:'bh', href: 'suits' },
      //         { name: 'Sarees',id:'ah', href: 'sarees' },
      //         { name: 'Western Wear',id:'hh', href: 'western_wear' },
         
          

      //       ],
      //     }
      //   ],
      // },
   
    ],
    pages: [
      // { name: 'Company', href: '#' },
      // { name: 'Stores', href: '#' },
    ],
  }