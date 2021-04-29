const productData = [
  {
    name: "Apple iPhone 11 (64GB) - Black",
    brand: "Apple",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71DjxIGy0ZL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/7155Vt4EulL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81a0mY01LLL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81A4mZpvWBL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71Y5I3LK5CL._SL1500_.jpg",
    ],
    about: [
      "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",

      "Water and dust resistant (2 meters for up to 30 minutes, IP68)",

      "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",

      "12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo",

      "Face ID for secure authentication",

      "A13 Bionic chip with third-generation Neural Engine",

      "Fast-charge capable",

      "Wireless charging",
    ],
    price: 51999,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: "Apple iPhone 12 Pro Max (128GB) - Pacific Blue",
    brand: "Apple",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81zWNUdBZxL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81N-FmzQNoL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81%2Bg2iqRn8L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71yz7E%2BC2fL._SL1500_.jpg",
    ],
    about: [
      "6.7-inch (17 cm diagonal) Super Retina XDR display",

      "Ceramic Shield, tougher than any smartphone glass",

      "A14 Bionic chip, the fastest chip ever in a smartphone",

      "Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording",

      "LiDAR Scanner for improved AR experiences, Night mode portraits",

      "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",
      "Wireless charging",
    ],
    price: 125900,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "Apple iPhone 12 (64GB) - Blue",
    brand: "Apple",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81hB-X3SMtL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/719M6YlOXTL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81tJbh5cAXL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81UBryv7mOL._SL1500_.jpg",
    ],
    about: [
      "6.1-inch (15.5 cm diagonal) Super Retina XDR display",

      "Ceramic Shield, tougher than any smartphone glass",

      "A14 Bionic chip, the fastest chip ever in a smartphone",

      "Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording",

      "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording",

      "Industry-leading IP68 water resistance Supports MagSafe accessories for easy attach and faster wireless charging",

      "iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",
    ],
    price: 76900,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "iPhone 11 Pro Max (256GB) - Space Grey",
    brand: "Apple",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61tuQdl2yLL._SL1024_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51SqbCX0MBL._SL1024_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61jCXtTWt6L._SL1024_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71zZRTj3L7L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61jgfLBydjL._SL1024_.jpg",
    ],
    about: [
      "6.5-inch (16.5 cm diagonal) Super Retina XDR OLED display",

      "Ceramic Shield, tougher than any smartphone glass",

      "A13 Bionic chip with third-generation Neural Engine",

      "Triple-camera system with 12MP Ultra Wide, Wide, and Telephoto cameras; Night mode, Portrait mode, and 4K video up to 60fps",

      "12MP TrueDepth front camera with Portrait Mode, 4K video, and Slo-Mo",

      "Water and dust resistant (4 meters for up to 30 minutes, IP68)",

      "Fast charge with 18W adapter included",

      "Wireless charging",

      "iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",
    ],
    price: 99900,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "Apple iPhone XR 64GB - Black",
    brand: "Apple",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41nxG-ngwpL._SL1024_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51DSo%2BvQJwL._SL1024_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51hECVqjbuL._SL1024_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41QKa15IyEL._SL1024_.jpg",
    ],
    about: [
      "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",

      "Water and dust resistant (1 meter for up to 30 minutes, IP67)",

      "Single 12MP Wide camera with Portrait mode, Portrait Lighting, Depth Control, Smart HDR, and 4K video up to 60fps",

      "7MP TrueDepth front camera system with Portrait mode, Portrait Lighting, Depth Control, and 1080p video",

      "A12 Bionic with second-generation Neural Engine Fast-charge capable",

      "Includes EarPods with Lightning Connector, Lightning to USB Cable, USB Power Adapter",

      "Face ID for secure authentication",

      "Wireless charging",

      "iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more",
    ],
    price: 41999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)",
    brand: "OnePlus",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61Tw6LZoaiL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61WEXquocyL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61oDpGk8uYL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61T6fOPh7dL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71UqqpGVheL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51d-ounkr4L._SL1500_.jpg",
    ],
    about: [
      "Rear quad camera setup having 48MP main camera with Sony IMX586 sensor, 16MP ultra wide angle Lends, 5MP macro lens, 2MP monochrome lens | 16MP front camera with Sony IMX471 sensor",

      "16.63 centimeters (6.55 inch) 120Hz fluid AMOLED capacitive touchscreen with 2400 x 1080 pixels resolution, 402 ppi pixel density",

      "OxygenOS based on Android v11 operating system with 2.86GHz Qualcomm Snapdragon 865TM with Adreno 650 GPU quad core processor",

      "Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 128GB | Dual SIM (nano+nano) dual-standby (5G+4G)",

      "4500mAH lithium-polymer battery",

      "120 Hz fluid Amoled display, Qualcomm Snapdragon 865, Warp Charge 65 , OxygenOS based on Android 11, Adreno 650 GPU",
    ],
    price: 42999,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: "OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)",
    brand: "OnePlus",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71zlbKfhFsL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71xix9L8OYL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61UIe0tpaaL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61zEztOuLWL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61Et38E-pnL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61EqpVdUWEL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/611PagZ50yL._SL1500_.jpg",
    ],
    about: [
      "48MP+8MP+5MP+2MP quad rear camera with 1080P Video at 30/60 fps, 4k 30fps | 32MP+8MP front dual camera with 4K video capture at 30/60 fps and 1080 video capture at 30/60 fps",

      "6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppi",

      "Memory, Storage & SIM: 12GB RAM | 256GB internal memory | Dual SIM (nano+nano) | OnePlus Nord currently support dual 4G SIM Cards or a Single 5G SIM. 5G+4G support will be available via OTA update at a future date",

      "OxygenOS based on Android 10 operating system with 2.4GHz Kryo 475 Prime + 2.2GHz Kryo 475 Gold + 6x1.8GHz Kryo 475 Silver Qualcomm Snapdragon 765G 5G mobile platform octa core processor, Adreno 620 GPU",

      "4115mAH lithium-ion battery | In-Display fingerprint sensor",

      "Corning Gorilla Glass 5 | 12GB GB LPDDR4X, 256GB UFS 2.1",
    ],
    price: 29999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "OnePlus 5 (Slate Gray 6GB RAM + 64GB memory)",
    brand: "OnePlus",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81uGBY4-hFL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71vNU7kpgyL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/817M8wpzLJL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/91wiDeMrbhL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71fK-BhkFML._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61iXlQ4F5RL._SL1500_.jpg",
    ],
    about: [
      "20MP+16MP primary dual camera and 16MP front facing camera",

      "13.97 centimeters (5.5-inch) capacitive touchscreen FHD display with 1920 x 1080 pixels resolution. Cover Glass:2.5D Corning Gorilla Glass 5",

      "Android v7.1.1 Nougat OS with Qualcomm Snapdragon 835 octa core processor",

      "6 GB RAM, 64 GB internal memory and dual nano SIM dual-standby (4G+4G)",

      "3300mAH lithium Polymer battery with Dash Charge technology",

      "Fingerprint scanner, all-metal unibody and NFC enabled",

      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    ],
    price: 40200,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)",
    brand: "OnePlus",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61T0DkKlXNL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61xeAF6pAoL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61G1Oq5uKQL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61AtwbunAaL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61ovbU0bd0L._SL1500_.jpg",
    ],
    about: [
      "48MP+8MP+5MP+2MP quad rear camera with 1080P Video at 30/60 fps, 4k 30fps | 32MP+8MP front dual camera with 4K video capture at 30/60 fps and 1080 video capture at 30/60 fps",

      "6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppi",

      "Memory, Storage & SIM: 12GB RAM | 256GB internal memory | Dual SIM (nano+nano) | OnePlus Nord currently support dual 4G SIM Cards or a Single 5G SIM. 5G+4G support will be available via OTA update at a future date",

      "OxygenOS based on Android 10 operating system with 2.4GHz Kryo 475 Prime + 2.2GHz Kryo 475 Gold + 6x1.8GHz Kryo 475 Silver Qualcomm Snapdragon 765G 5G mobile platform octa core processor, Adreno 620 GPU",

      "4115mAH lithium-ion battery | In-Display fingerprint sensor",

      "Corning Gorilla Glass 5 | 12GB GB LPDDR4X, 256GB UFS 2.1",
    ],
    price: 29999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "OnePlus 7 Pro (Nebula Blue, 8GB RAM, 256GB Storage)",
    brand: "OnePlus",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/51FwsSj8knL._SL1000_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/512tEZ9LOGL._SL1000_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51YYAjTYadL._SL1000_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51TGQBCV%2B4L._SL1000_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61AtwbunAaL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41GgDw2Wh7L._SL1000_.jpg",
    ],
    about: [
      "Rear Camera; 48MP (Primary)+ 8MP (Tele-photo)+16MP (ultrawide); Front Camera;16 MP POP-UP Camera; You will need to chargethe phone when you first get it or if you have not used it for a long time",

      "16.9 centimeters (6.67-inch) multi-touch capacitive touchscreen with 3120 x 1440 pixels resolution",

      "Memory, Storage and SIM: 8GB RAM | 256GB internal memory | Dual SIM dual-standby (4G+4G)",

      "Android Oxygen operating system with 2.84GHz Snapdragon 855 octa core processor",

      "4000mAH lithium-ion battery, Buttons: Gestures and on-screen navigation support; Alert Slider",

      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    ],
    price: 52999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name:
      "Samsung Galaxy S20 + (Cosmic Gray, 8GB RAM, 128GB Storage) Without Offer",
    brand: "Samsung",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/816p3TnkSjL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81aQoxIw8jL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61FyPQ3riDL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81dow9p7lvL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51FTEzc4aZL._SL1500_.jpg",
    ],
    about: [
      "64+12+12MP triple quad rear camera - 64MP OIS F2.0 tele camera + 12MP F2.2 ultra wide + 12MP (2PD) OIS F1.8 wide + VGA depth camera | 10MP (2PD) OIS F2.2 front punch hole camera | rear LED flash",

      "16.95 centimeters (6.7-inch) dynamic AMOLED display with capacitive touchscreen | 3200 x 1440 pixels resolution | Quad HD+ Resolution",

      "Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB | Dual SIM (nano+nano) dual-standby (4G+4G) | MicroSD card slot (Expandable upto 1 TB), Hybrid Sim Slot",

      "Android v10.0 operating system with 2.73GHz+2.5GHz+2GHz Exynos 990 octa core processor",

      "4500mAH (non-removable) lithium-ion battery | Face-Unlock & Finger Print sensor",

      "Box also includes: Non-removable battery included, earphones, travel adapter, USB cable and user manual",
    ],
    price: 61999,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: "Samsung Galaxy S20 FE (Cloud Lavender, 8GB RAM, 128GB Storage)",
    brand: "Samsung",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71tI9xMcZ5L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71stUfSD0xL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61pYo4u3ZRL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71MIj14LPvL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41WdjyHxL5L._SL1500_.jpg",
    ],
    about: [
      "Triple rear camera setup - 8MP OIS F2.4 tele camera + 12MP F2.2 ultra wide + 12MP (2PD) OIS F1.8 wide rear camera | 32MP (2PD) OIS F2.2 front punch hole camera | Rear LED flash",

      "16.40 centimeters (6.5-inch) dynamic AMOLED display, FHD+ capacitive multi-touch touchscreen, Quad HD+ resolution with 1080 x 2400 pixels resolution",

      "Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB | Dual SIM (nano+nano) dual-standby (4G+4G)",

      "Android v10.0 operating system with 2.73GHz+2.5GHz+2GHz Exynos 990 octa core processor",

      "4500mAH lithium-ion battery (Non-removable), face-unlock & finger print sensor",
    ],
    price: 44999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)",
    brand: "Samsung",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71tI9xMcZ5L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71tjpMLIB4L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71lVZz6RDCL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81rmA2GPuGL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71hFvpH4N4L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81Jsd4vzjZL._SL1500_.jpg",
    ],
    about: [
      "Triple rear camera setup- Main Camera 12MP Dual Pixel + Ultra Wide 12MP Camera + Tele1 3X 64MP Camera | 10MP front Dual Pixel Camera",

      "(6.2-inch) Dynamic AMOLED 2X Display, FHD+ resolution with 2400 X 1080 pixels resolution, 421 PPI with 16M colours",

      "8GB RAM | 128GB internal Storage | Dual SIM (nano+nano) dual-standby (5G+5G)",

      "Android Pie v10.0 operating system with 2.9GHz Exynos 2100 octa core processor",

      "4000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    ],
    price: 69999,
    rating: 4.0,
    isInStock: true,
  },
  {
    name: "Samsung Galaxy Z Fold2 5G Mystic Bronze, 12GB RAM, 256GB Storage",
    brand: "Samsung",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71U9nzW%2BXsL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61F1C9%2BAVgL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71JLR9O7WUL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71S%2BJnL-FFL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71rOW6G-YvL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71mV1Tye4-L._SL1500_.jpg",
    ],
    about: [
      "Triple camera setup - Wide: 12MP (F1.8) + Tele: 12MP (F2.4) 2x optical zoom + UW: 12MP (F2.2) with front camera cover display (HID): 10MP (F2.2) + main display (HID): 10MP (F2.2)",

      "19.27 centimeters (7.6-inch) dynamic AMOLED 2X - Infinity-O display, QXGA+ multi-touch capacitive touchscreen with 2208 x 1768 pixels resolution, 373 ppi pixel density and 16M color support",

      "Android v10.0 operating system with 1.8GHz+2.4GHz+3.09GHz Qualcomm | SM8250-2-AB octa core processor",

      "Memory, Storage & SIM: 12GB RAM | 128GB internal memory expandable | Dual SIM (nano+nano) dual-standby (4G+4G)",

      "4500mAH lithium-ion battery fast charge | 25W Type-C fast charger in the box",

      "Fast face unlock and fingerprint sensor | Dual SIM (SIM 1 + Embedded SIM) with dual standby and dual VoLTE , Dedicated Sim slot",

      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    ],
    price: 149998,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "Samsung Galaxy M31s (Mirage Blue, 8GB RAM, 128GB Storage)",
    brand: "Samsung",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61d-phh4GfL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61OavvFAYqL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61MMMHnfxEL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61Cl1ytOA9L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41k-3BjSfqL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41k-3BjSfqL._SL1500_.jpg",
    ],
    about: [
      "Quad camera setup - 64MP (F1.8) main camera + 12MP (F2.2) ultra wide camera + 5MP (F2.4) depth camera + 5MP (F2.4) macro camera | 32MP (F2.2) front camera",

      "16.4 centimeters (6.5-inch) super Amoled - Infinity-O display, FHD+ capacitive multi-touch touchscreen with 1080 x 2400 pixels resolution, 407 ppi pixel density and Contrast Ratio: 78960:1",

      "Memory, Storage & SIM: 8GB RAM, 128GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G)",

      "Android v10.0 operating system with 1.7GHz+2.3GHz Exynos 9611 octa core processor",

      "6000mAH lithium-ion battery with 5x fast charge | 25W Type-C fast charger in the box",

      "Fast face unlock and fingerprint sensor | Dual SIM (nano+nano) with dual standby and dual VoLTE, Dedicated Sim slot",

      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    ],
    price: 20499,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "Mi 10i 5G (Midnight Black, 8GB RAM, 128GB Storage)",
    brand: "Mi",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71%2BKJpeI2rL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71EZC3CrdVL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81WzV-2Wx7L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/612Etd7-gsL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51V8SmUKClL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51DfqS1DeKL._SL1500_.jpg",
    ],
    about: [
      "Camera: 108 MP Quad Rear camera with Ultra-wide and Macro mode",

      "Processor: Octa-core Snapdragon 750G with 8nm process and support for next generation 5G Network",

      "Display: 16.9 centimeters (6.67-inch) FHD+ Full screen dot display with AdaptiveSync 120Hz refresh rate",

      "Battery: 4820 mAh large battery with 33W fast charger in-box and Type-C connectivity",

      "Memory, Storage & SIM: 6GB RAM | 128GB storage expandable up to 512GB with microSD card slot",
    ],
    price: 23999,
    rating: 4,
    isInStock: true,
  },

  {
    name: "Redmi Note 9 (Arctic White, 4GB RAM, 64GB Storage)",
    brand: "Mi",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71X5I1cVfbL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71%2BDjKMNc6L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71JQS%2BfMnDL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81gKYSTRFHL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71d3XBDAdKL._SL1500_.jpg",
    ],
    about: [
      "48MP rear camera with ultra-wide, macro, depth sensor, portrait, night mode, ai scene recognition, hdr, pro mode | 13MP front camera",

      "16.5862 centimeters (6.53-inch) FHD+ display with multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution | 19.5:9 aspect ratio",

      "Memory, Storage & SIM: 4GB RAM | 64GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G)",

      "5020mAH lithium-polymer battery with 22.5W fast charger in-box | dedicated SD card support",

      "Box also includes: Power adapter, USB cable, SIM eject tool, Warranty card, User guide, Clear soft case",
    ],
    price: 10999,
    rating: 4,
    isInStock: true,
  },
  {
    name: "Mi 10T Pro 5G (Cosmic Black, 8GB RAM, 128GB Storage)",
    brand: "Mi",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71p-KwOWcUL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71m8TYyAdRL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81MdoIMYVKL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51pS2tFYcAL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61doEfvnAeL._SL1500_.jpg",
    ],
    about: [
      "108MP triple rear camera with 13MP ultra-wide and 5MP macro mode, six long exposure modes, photo clones, timed burst, document mode 2. 0, panorama mode, portrait mode | 20 MP front camera",

      "16.9 centimeters (6.67-inch) FHD+ full screen dot display, FHD+ LCD multi-touch capacitive touchscreen with 2400x1080 pixels resolution, 395 ppi pixel density and 20:9 aspect ratio | 144Hz AdaptiveSync intelligent display",

      "Memory, Storage & SIM: 8GB RAM | 128GB storage | Dual SIM (nano+nano)",

      "Android v10 operating system with upto 2.84GHz clock speed Qualcomm Snapdragon 865 octa core processor with 7nm process",

      "5000mAH lithium-polymer large battery providing talk-time of 26 hours and standby time of 535 hours with 33W fast charger in-box and type-C connectivity",

      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",

      "Box also includes: Power adapter, USB cable, SIM eject tool, Warranty card, User guide, Clear soft case",
    ],
    price: 37999,
    rating: 4.0,
    isInStock: true,
  },
  {
    name:
      "Mi 10 (Coral Green, 8GB RAM, 256GB Storage) - 108MP Quad Camera, SD 865 Processor, 5G Ready",
    brand: "Mi",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/515%2B4BAU5SL._SL1200_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51aBtcGbtsL._SL1200_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61UkCRv6ZNL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61oCvJVbGVL._SL1200_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51p0P4imZUL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41Pj5Pam6CL._SL1200_.jpg",
    ],
    about: [
      "108MP quad rear camera with OIS, ultra-wide, macro, portrait, night mode, AI scene recognition, HDR, pro mode | 20MP front camera",

      "16.94 centimeters (6.67-inch) FHD+ AMOLED capacitive multi-touch touchscreen with 2340 x 1080 pixels resolution, 386 ppi pixel density and 19.5:9 aspect ratio | 3D Curved glass",

      "Memory, Storage & SIM: 8GB RAM | 256GB internal memory | Dual SIM (nano+nano) with support for 5G",

      "Android v10 operating system with 2.84GHz Qualcomm Snapdragon 865 with 7nm octa core processor",

      "4780mAH lithium-polymer battery with 30W wired fast charger in-box & support for up to 30W wireless charging",

      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",

      "Box also includes: Power adapter, USB cable, SIM eject tool, Warranty card, User guide, Clear soft case",
    ],
    price: 54999,
    rating: 4.0,
    isInStock: true,
  },
  {
    name: "Redmi Note 10 Pro Max (Vintage Bronze, 6GB RAM, 128GB Storage)",
    brand: "Mi",
    category: "Mobiles",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71i5BHw4RYL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71jKCt5N3JL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61f-Do0Z-aL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81am6tkiTtL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61zXixc8rlL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61dJHa9TfsL._SL1500_.jpg",
    ],
    about: [
      "Processor: Qualcomm Snapdragon 732G with Kryo 470 Octa-core; 8nm process; Up to 2.3GHz clock speed",

      "Camera: 108 MP Quad Rear camera setup with 8MP Ultra-wide, 2MP Portrait and 5MP Macro mode | 16 MP front camera",

      "Display: 120Hz high refresh rate FHD+ (1080x2400) AMOLED Dot display; 16.9 centimeters (6.67 inch); 20:9 aspect ratio; HDR 10 support",

      "Battery: 5020 mAH large battery with 33W fast charger in-box and Type-C connectivity",

      "Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)",

      "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
    ],
    price: 19999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name:
      "OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black)",
    brand: "OnePlus",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81qtALn%2BGpL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81szQiCQVRL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/719Wx1mh0CL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71-Hue6YxFL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61SiMoWnZyL._SL1500_.jpg",
    ],
    about: [
      "Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",

      "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices",

      "Sound : 20 Watts Output | Dolby Audio",

      "Smart TV Features: Android TV 9.0 | OnePlus Connect | Google Assistant | Play Store | Chromecast | Shared Album | Supported Apps : Netflix, YouTube, Prime video | Content Calendar | OxygenPlay",

      "Display : LED Panel | Noise Reduction | Colour Space Mapping |Dynamic Contrast | Anti-Aliasing | DCI-P3 93% colour gamut | Gamma Engine",

      "Design: Bezel-less | Screen/Body Ratio = 91.4%",
    ],
    price: 15499,
    rating: 4.5,
    isInStock: true,
  },
  {
    name:
      "OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black)",
    brand: "OnePlus",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/812wg%2BpfXAL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/7184ROxnceL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71nsFlZ1aKL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61OHVJI9lwL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61skKo2idYL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/619JGYzTdHL._SL1500_.jpg",
    ],
    about: [
      "Resolution: Full HD (1920x1080) | Refresh Rate: 60 hertz",

      "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices",

      "Sound : 20 Watts Output | Dolby Audio",

      "Smart TV Features: Android TV 9.0 | OnePlus Connect | Google Assistant | Play Store | Chromecast | Shared Album | Supported Apps : Netflix, YouTube, Prime video | Content Calendar | OxygenPlay",

      "Display: LED Panel | Noise Reduction | Colour Space Mapping |Dynamic Contrast | Anti-Aliasing | DCI-P3 93% colour gamut | Gamma Engine",

      "Design: Bezel-less | Screen/Body Ratio = 88.5%",
    ],
    price: 25999,
    rating: 4.0,
    isInStock: true,
  },
  {
    name:
      "OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN Pro (Black)",
    brand: "OnePlus",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71GYLokH21L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71ZVX3PNmTL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61mzPSH1hqL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71bYvhWXq%2BL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61hbWsMSinL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/91dGFBdaEWL._SL1500_.jpg",
    ],
    about: [
      "Resolution: 4K Ultra HD (3840x2160) | Motion Rate 480 Hertz. Speaker type : 2.1 CH",

      "Connectivity: 4 HDMI ports (HDMI 2 supports ARC) to connect set top box, Blu Ray players, gaming console | 3 USB port to connect hard drives and other USB devices",

      "Sound : 50 Watts Output | Alluring sound | Dolby Atmos | Full range 4 Speaker | 2 Tweeter | 2 Sub-woofer",

      "Smart TV Features : Built-In Wifi | One Click Amazon Prime Video Button Remote | Android TV | Google assistant | Oxygen OS with Android Pie (9) | RAM 3 GB | 16 GB Storage | CPU: A53*4 | OnePlus PQ Engine Gamma Color Magic | Chromecast Built-in |OxygenPlay VOD selection | Screen casting | OnePlus Connect Mobile Sync and control | Bluetooth Stereo mode | File browser(local media player)",

      "Display : QLED 120% NTSC | Bezel Less Design | Support HDR10，HDR10+，HLG decode, Dolby vision certification | Most holistic experience",

      "Warranty Information: 1 year comprehensive warranty with additional 1 year warranty on panel from date of purchase.",
    ],
    price: 84899,
    rating: 4.0,
    isInStock: true,
  },
  {
    name:
      "OnePlus U Series 138.8 cm (55 inches) 55U1 Series 4K Ultra HD LED Smart Android TV 55UA0A01 (Black)",
    brand: "OnePlus",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71de4PH0BnL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71GuJNkQdAL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61QpZC3OumL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71uDnL0dJJL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/616cE4sgY0L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61S0oYyDcZL._SL1500_.jpg",
    ],
    about: [
      "Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 60 hertz",

      "Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices Sound : 30 Watts Output | down-firing reflex 4-units speaker | Dolby Atmos",

      "Smart TV Features: Android TV 9.0 | Data Saver Plus | OnePlus Connect | Google Assistant | Play Store | Chromecast | Shared Album | Supported Apps : Netflix, YouTube, Prime video | Content Calendar | OxygenPlay | Kids Mode | Game Mode",

      "Display: LED Panel | MEMC | Noise Reduction | Super Resolution | Colour Space Mapping | Dynamic Contrast | Anti-Aliasing | AI PQ (Dynamic Gamma Curve) | Dolby Vision | HDR10 | HDR10+ | HLG | DCI-P3 93% colour gamut | Gamma Engine",

      "Design: Bezel-less | 95% Screen to Body Ratio | 6.9mm Ultra Slim | Carbon Fibre Pattern | Metal Body Warranty Information: 1 year comprehensive warranty + additional 1 year on panel provided by the manufacturer from date of purchase",
    ],
    price: 52999,
    rating: 4.0,
    isInStock: true,
  },
  {
    name: "Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black)",
    brand: "MI",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71qOOWyfc7L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71qseMc5wJL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81rONKWm24L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71Q-Lgdse0L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61pxfgxlkiL._SL1500_.jpg",
    ],
    about: [
      "Resolution: HD Ready Android TV (1366x768) | Refresh Rate: 60 hertz",

      "Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices",

      "Sound: 20 Watts Output | Dolby+ DTS-HD",

      "Smart TV Features : Built-In Wi-Fi | PatchWall | Netflix | Prime Video | Disney+Hotstar and more | Android TV 9.0 | Google Assistant | Data Saver",

      "Display : LED Panel | Vivid Picture engine",
    ],
    price: 14999,
    rating: 4.0,
    isInStock: true,
  },
  {
    name: "Mi TV 4A PRO 108 cm (43 Inches) Full HD Android LED TV (Black)",
    brand: "MI",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/710rArA2OPL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71934SolopL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71sR3Lui0QL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71UWQtowtVL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61J8NS93MDL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71EVyyOn%2BHL._SL1500_.jpg",
    ],
    about: [
      "Resolution : Full HD (1920x1080) | Refresh Rate: 60 hertz",

      "Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 3 USB ports to connect hard drives and other USB devices",

      "Sound: 20 Watts Output | DTS-HD sound",

      "Smart TV Features :Built-In Wi-Fi | PatchWall | Netflix | Prime Video | Disney+Hotstar and more | Android TV 9.0 | Google Assistant | Data Saver",

      "Display : LED Panel | Vivid Picture engine",
    ],
    price: 24999,
    rating: 4.0,
    isInStock: true,
  },
  {
    name: "Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)",
    brand: "MI",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/710rArA2OPL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71934SolopL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71sR3Lui0QL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71UWQtowtVL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61J8NS93MDL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71EVyyOn%2BHL._SL1500_.jpg",
    ],
    about: [
      "Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 60 hertz",

      "Connectivity: 3 HDMI ports to connect set top box, Blu Ray players gaming console | 2 USB ports to connect hard drives and other USB devices",

      "Sound: 20 Watts Output | Dolby+ DTS-HD. Viewing Angle：178°",

      "Smart TV features : Built-In Wi-Fi | PatchWall | Netflix | Prime Video | Disney+Hotstar and more | Android TV 9.0 | Google Assistant | Data Saver",

      "Display : LED Panel | 4K HDR 10-bit display",
    ],
    price: 34999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "Mi TV 4X 138.8 cm (55 Inches) Ultra HD Android LED TV (Black)",
    brand: "MI",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71zRDT-NHfL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71nw5kRMQLL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71xqi9eJWRL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71ZecKDxwxL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71kN2REkByL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61WxNErTjvL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71OlRzWpNzL._SL1500_.jpg",
    ],
    about: [
      "Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 60 hertz",

      "Connectivity: 3 HDMI ports to connect set top box, Blu Ray players gaming console | 2 USB ports to connect hard drives and other USB devices",

      "Sound: 20 Watts Output | Dolby Audio + DTS-HD. Audio Power ：10W x 2",

      "Smart TV features : Built-In Wi-Fi | PatchWall | Netflix | Prime Video | Disney+Hotstar and more | Android TV 9.0 | Google Assistant | Data Saver",

      "Display : LED Panel | 4K HDR 10-bit display",
    ],
    price: 39999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name:
      "MI TV 4A Horizon Edition 108cm (43 inches) Full HD Android LED TV (Black)",
    brand: "MI",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71Cf27AHBEL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71sVuoPZp0L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71dQHCxPJKL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61yg-OOidKL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71z1%2B7AFrLL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51-1STbWFmL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71WBafODndL._SL1500_.jpg",
    ],
    about: [
      "Resolution : Full HD (1920x1080) | Refresh Rate: 60 hertz",

      "Connectivity: Connectivity : 3 HDMI ports to connect set top box, Blue Ray players | 2 USB ports to connect hard drives and other USB devices | Bluetooth 4.1",

      "Sound: 20 Watts Stereo Speakers | DTS-HD sound",

      "Smart TV Features : Android TV 9 | Google Assistant | Google Play | Chromecast Built-in | Google Data Saver to watch 3X more on mobile data | Supported Apps: Netflix | Prime Video | Disney+ Hotstar | YouTube | 5000+ apps from Google Play Store| Mi Quick Wake Under 5 secs",

      "Display : Bezel-less Design | LED Panel | Vivid Picture engine",
    ],
    price: 25999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "Realme 108 cm (43 Inches) Full HD Smart TV",
    brand: "Realme",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61puHiI0KGL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71JiILhQtwL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71MGjQHO0yL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61zINHK90eL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61khLA5vFVL._SL1500_.jpg",
    ],
    about: [
      "Resolution: Full HD (1920 x 1080p) | Refresh Rate: 60Hz",

      "Ceramic Shield, tougher than any smartphone glass",

      "Connectivity: 3 HDMI Ports to connect set top box, Blu Ray players, gaming console | 2 USB Ports to connect hard drives and other USB devices | 1 VGA Slot to connect your Laptop/PC | 1 Headphone Jack | 1 AV Input Slot | 1 AV Output Slot | RF Slot",

      "Sound: 24 Watts Output | Quad Speakers | Dolby Audio | Cinematic Surround Sound",

      "Display: Ultra Bright Display | Chroma Boost Picture Engine | 178 Degree Viewing Angle | Brightness: 400nits",

      "Smart TV Features: Certified Android 9.0 (Pie) | In-Built Wi-Fi | In-Built Chromecast | 1GB RAM | 8GB ROM | In Built Apps: Netflix, Prime Video, Disney+Hotstar, Youtube",
    ],
    price: 25999,
    rating: 5,
    isInStock: true,
  },
  {
    name: "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV",
    brand: "LG",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71qN7IK4H1L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71sg%2BOsy9EL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71CRLDZEUKL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61zvOFLhEtL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51ngWi65FXL._SL1500_.jpg",
    ],
    about: [
      "Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 50 hertz",

      "Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices",

      "Sound : 20 Watts Output | Powerful Sound, Amazon Alexa: Enabled",

      "Smart TV Features : AI ThinQ (Needs Magic Remote that can be purchased separately) | Web OS | Magic mobile connection | Quad core processor | Cloud photo and video",

      "Display : 4K IPS display | Wide viewing angle | 4K active HDR | 4K upscaler | DTS virtual: X",

      "Warranty Information: 1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module from the date of purchase",
    ],
    price: 34999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name:
      "LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)",
    brand: "LG",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71uKCdULRgL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/716KoX1XAoL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61GHCHvseGL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51V-0nW46wL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/7139OYRMpqL._SL1500_.jpg",
    ],
    about: [
      "Resolution: HD Ready (1366x768) | Refresh Rate: 50 hertz",

      "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",

      "Sound output: 10 Watts Output I 2 Speakers | DTS Virtual:X | Sound Type : Down Firing",

      "Smart TV Features: Web OS Smart TV | Wi-Fi | Home Dashboard | Screen Mirroring | Mini TV Browser | Multi-Tasking | Office 365",

      "Display: Active HDR | Display Type: Flat | BackLight Module: Slim LED",

      "Warranty Information: 1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module from the date of purchase",
    ],
    price: 16499,
    rating: 4.5,
    isInStock: true,
  },
  {
    name:
      "LG 108 cm (43 inches) Full HD LED Smart TV 43LM5650PTA (Ceramic Black)",
    brand: "LG",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/7173oa2fxXL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61QY6jFVXqL._SL1413_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51RdUbNYUgL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71STzmWROHL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61d2-KCuHbL._SL1500_.jpg",
    ],
    about: [
      "Resolution: Full HD (1920 x 1080) | Refresh Rate: 50 hertz",

      "Connectivity: 2 HDMI ports to connect set top box, Blu Ray players, gaming console | 1 USB ports to connect hard drives and other USB devices",

      "Sound: 20 Watts Output | 2.0 Ch Speaker| DTS Virtual:X | Clear Voice III | Sound Type: Down Firing | Optical Sound Sync",

      "Smart TV Features: WebOS Smart TV, Unlimited OTT App Support, LG Content Store, Home Dashboard, Mini TV Browser, Cloud Phots & Videos, Multi-Tasking, Screen Mirroring, Office 365, Wi-Fi",

      "Display: Active HDR | Display Type: Flat | BackLight Module: Slim LED",

      "Warranty Information: 1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module from the date of purchase",
    ],
    price: 29999,
    rating: 4.5,
    isInStock: true,
  },
  {
    name:
      "LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD (Ceramic BK + Dark Steel Silver)",
    brand: "LG",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71kMdY5M1KL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71StX-QmYAL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61mzXJa-KML._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41SpeLDrD2L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/41ndyYkEAuL._SL1500_.jpg",
    ],
    about: [
      "Resolution: 4K Ultra HD (3840x2160) | Refresh Rate: 50 hertz",

      "Connectivity: 3 HDMI ports to connect set top box, Blu Ray players, gaming console | 2 USB ports to connect hard drives and other USB devices",

      "Sound : 20 Watts Output | Powerful Sound",

      "Smart TV Features : Amazon Prime Video | AI ThinQ (Needs Magic Remote that can be purchased separately), the new smart, evolved by AI | Quad core processor the origin of 4k images | Magic mobile connection",

      "Display : 4K resolution a new standard for high definition | True immersion, even at a wide viewing angle | True color accuracy | 4K active HDR for incredible detail | DTS virtual: X",

      "Warranty Information: 1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module from the date of purchase",
    ],
    price: 49990,
    rating: 4.5,
    isInStock: true,
  },
  {
    name: "LG 139 cm (55 inches) 4K Ultra HD Smart LED TV 55SK8500PTA (Black)",
    brand: "LG",
    category: "TV",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/91PLSOR1d6L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/91mJWSbQqhL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/91wVM%2B-AP2L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51I5KVdOvFL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71fx31E73gL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/91IGxcBmYIL._SL1500_.jpg",
    ],
    about: [
      "Resolution: 4K (3840 x 2160) | Refresh Rate: 50 hertz",

      "Connectivity: 4 HDMI ports to connect set top box, Blu Ray players, gaming console | 3 USB ports to connect hard drives and other USB devices",

      "Sound : 40 Watts Output | Dolby Atmos",

      "Smart TV Features : ThinQ AI | Mobile connection overlay | α7 intelligent processor",

      "Display : NanoCell Panel | 4K cinema HDR | Dolby vision | Nano cell colour display | Full array dimming",

      "Warranty Information: 1 Year LG India Comprehensive Warranty and additional 1 year Warranty is applicable on panel/module from the date of purchase",
    ],
    price: 124999,
    rating: 4.0,
    isInStock: true,
  },
  {
    name: "HP Spectre x360 13-ap0121TU 2019 13.3-inch Full HD Laptop",
    brand: "HP",
    category: "Laptop",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/81d0iFyuVjL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81X3QbECPLL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71rh84NcBHL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71vaEJQJRzL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71IQZOcc1tL._SL1500_.jpg",
    ],
    about: [
      "Processor: Intel Core i5-8265U Quad-Core processor (1.6 GHz base processor speed, up to 3.9 GHz burst frequency, 4 Cores, 6 MB cache)",

      "Operating System: Pre-loaded Windows 10 Pro with lifetime validity",

      "Display: 13.3-inch Full HD (1920x1080) IPS anti-glare Touchscreen display(300 nits, 166 ppi) | Corning Gorilla Glass| HP Sure View Integrated Privacy Screen | Comes with Inking Pen",

      "Memory & Storage: 8GB DDR4 RAM with Intel UHD Graphics | Storage: 256GB SSD",

      "Design and battery: Touchscreen convertible laptop, thin and light design, Laptop weight: 1.3 kg, Battery life: upto 15 hours, 4-cell Li-ion Fast Charge Battery",

      "Graphics: Intel UHD Graphics 620",
    ],
    price: 119990,
    rating: 4,
    isInStock: true,
  },

  {
    name: "Apple MacBook Pro",
    brand: "Apple",
    category: "Laptop",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71IQiviMzWL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71SGVy%2BPD6L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71Iimlt4bFL._SL1500_.jpg",
    ],
    about: [
      "Quad-core 8th-generation Intel Core i5 processor; Brilliant Retina display with True Tone technology",

      "Touch Bar and Touch ID; Intel Iris Plus Graphics 645",

      "Ultrafast SSD; Two Thunderbolt 3 (USB-C) ports",

      "802.11ac Wi-Fi",

      "Latest Apple-designed keyboard",

      "Force Touch trackpad",
    ],
    price: 116790,
    rating: 4,
    isInStock: true,
  },
  {
    name: "Apple Watch Series 6",
    brand: "Apple",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71qMIJnrhFL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81EhTfo2wZL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81NH99pXawL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81QWhq3s7RL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71DjkbX9XGL._SL1500_.jpg",
    ],
    about: [
      "GPS + Cellular model lets you call, text, and get directions without your phone",

      "Measure your blood oxygen with an all-new sensor and app",

      "Check your heart rhythm with the ECG app",

      "The Always-On Retina display is 2.5x brighter outdoors when your wrist is down",

      "S6 SiP is up to 20% faster than Series 5",

      "5GHz Wi-Fi and U1 Ultra Wideband chip",
    ],
    price: 52900,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: "Apple Watch SE",
    brand: "Apple",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81brXenmEGL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/8152WGKLjqL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81Yg%2BhEmS2L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/714YSQfCLVL._SL1500_.jpg",
    ],
    about: [
      "GPS model lets you take calls and reply to texts from your wrist",

      "Large Retina OLED display",

      "Up to 2x faster processor than Series 3",

      "Track your daily activity on Apple Watch and see your trends in the Fitness app on iPhone",

      "Measure workouts like running, walking, cycling, yoga, swimming, and dance",

      "Swimproof design",
    ],
    price: 32899,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: "Apple Watch Series 3",
    brand: "Apple",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71hSF2zjcGL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71o1ZmwMPxL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/710%2BQCLWITL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71Ew4N66zqL._SL1500_.jpg",
    ],
    about: [
      "GPS",

      "Retina display",

      "Swimproof",

      "Optical heart sensor",

      "Store and stream music, podcasts and audiobooks",

      "Elevation",
    ],
    price: 23900,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: "Samsung Galaxy Watch",
    brand: "Samsung",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71oNPZKNTfL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71hEA%2BdHZ6L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71PhaADDTPL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71Zs1DDFCLL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71e2uGxwn2L._SL1500_.jpg",
    ],
    about: [
      "Super AMOLED display with customizable Always on Watch faces",

      "24/7 Activity Tracking - 4 stage Sleep, Activity with continuous HRM and Stress monitoring",

      "39 built in trackers with 50m Water Resistance",

      "Galaxy Watch 4G can be activated only with Samsung Galaxy Smartphones (Android 5.0 & 1.5GB or higher) for using in standalone 4G mode",
    ],
    price: 19990,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: "Samsung Galaxy Watch Active 2",
    brand: "Samsung",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61uej9efKYL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71BbEhvMi2L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/719sB3iCHML._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71kkZYH5QgL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71E4Mkt2pbL._SL1500_.jpg",
    ],
    about: [
      "country of origin:India",

      "Super AMOLED display with customizable Always on Watch faces",

      "24/7 Activity Tracking - 4 stage Sleep, Activity with continuous HRM and Stress monitoring",

      "39 built in trackers with 50m Water Resistance",

      "Connectivity - Bluetooth 5.0. Compatible with Android 5.0 or higher and RAM 1.5GB above. iPhone: iPhone 5 and above, iOS 9.0 or above",

      "Display Size: 3.45cm",
    ],
    price: 19900,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: "Noise Colorfit Pro 2 Full Touch Control Smart Watch",
    brand: "Noise",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71R3TF2wIcL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71a81l4gTcL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71jqx3bL6DL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61yciKu9KBL._SL1500_.jpg",
    ],
    about: [
      "Bluetooth Version v5.0",

      "Get a 1-year assured warranty from NOISE. Manage your warranty claims 24x7 by typing SUPPORT.GONOISE.COM in your browser's address bar. For product related queries please reach out to us at 8882132132 or drop an email at PRODUCTFEEDBACK@NEXXBASE.COM",

      '"The brilliant 1.3" colour display is now full capacitive touch, supporting taps and swipes, so it is easy to read and operate.',

      "The strong polycarbonate case makes the ColorFit Pro 2 featherlight on your wrist and is available in 4 beautiful colours with matching swappable straps",

      "24x7 heart rate monitoring with the built in optical HR monitor that measures your heart rate every five minutes.",
    ],
    price: 2999,
    rating: 4,
    isInStock: true,
  },

  {
    name: "Realme Fashion Watch",
    brand: "Realme",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/71pYXdg9%2BIL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71A3Hg7hm4L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71htNyVh3rL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71rPVueepmL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71MjIrjE8hL._SL1500_.jpg",
    ],
    about: [
      "call notification 20 times (hang up after waiting for 10s)",

      "smart connect - control your phone camera and music from your watch",

      "raise your wrist and light up the screen 80 times/day",

      "smart notifications for sms, calls, whatsapp, and other apps",

      "realme link app - get all your fitness data on your phone seamlessly (only for android)",
    ],
    price: 3488,
    rating: 3.5,
    isInStock: true,
  },

  {
    name: '"Realme Watch S 1.3" Large"',
    brand: "Realme",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/51KsSgYGOKL._SL1348_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/711wddDzP8L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/71kkZXKl6sL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61WCZuvbe%2BL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/81Iuxf8yAaL._SL1500_.jpg",
    ],
    about: [
      "3.3cm (1.3 inch) Auto Brightness Touchscreen",

      "Heart Rate & Blood Oxygen Monitor, IP68 Water Resistant with 16 Sport Modes",

      "100+ Stylish Watch Faces to be Updated via OTA | Aluminium Alloy Case for a Premium Look and Durability",

      "Magnetic Charging Base for Hassle-free Charging",

      "Touchscreen",
    ],
    price: 4999,
    rating: 4.5,
    isInStock: true,
  },

  {
    name: '"Realme Watch S Pro 1.4" Large"',
    brand: "Realme",
    category: "Watch",
    images: [
      "https://images-na.ssl-images-amazon.com/images/I/61-SQrGpBWL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61TF1YxZnaL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61WsslrmtTL._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/61qHWWy5N2L._SL1500_.jpg",

      "https://images-na.ssl-images-amazon.com/images/I/51hvSfan2cL._SL1500_.jpg",
    ],
    about: [
      "3.5cm (1.39 inch) Large AMOLED Touchscreen | 14 Days Battery Life",

      "Always On Display Mode will Reduce the Battery Run-time|Battery Run-time: Upto 7 Days (with Always On Display)",

      "Stainless Steel Case for a Premium Look and Durability 100+ Stylish Watch Faces | High Precision Dual Satellite GPS",

      "Blood Oxygen & Heart Rate Monitor for Accurate Health Tracking | 15 Sports Modes | 5ATM Water Resistance (Upto 50m)",

      "realme link app - get all your fitness data on your phone seamlessly (only for android)",
    ],
    price: 3488,
    rating: 3.5,
    isInStock: true,
  },
];

module.exports = productData;
