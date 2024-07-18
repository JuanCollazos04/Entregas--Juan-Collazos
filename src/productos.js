const products = [
    {
      id: "1",
      name: "Squier Fender Affinity Stratocaster",
      price: 1000,
      category: "solidas",
      img: "https://ortizo.com.co/cdn/shop/products/GE2022-01_600x600_crop_center.png?v=1541013810",
      stock: 50,
      description: "Guitarra Electrica Squier by Fender - Affinity Series Stratocaster",
    },
    {
      id: "2",
      name: "Gibson EpiPhone Les Paul",
      price: 1100,
      category: "solidas",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_630788-MCO41708463103_052020-F.webp",
      stock: 90,
      description: "Guitarra Electrica Gibson Epiphone Les Paul",
    },
    {
      id: "3",
      name: "Tagima Brasil T-920",
      price: 1270,
      category: "semi-huecas",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_713764-MLA74650231342_022024-F.webp",
      stock: 3,
      description: "Guitarra eléctrica Tagima Brasil T-920 semi hollow de cedro butterscotch con diapasón de granadillo brasileño",
    },
    {
      id: "4",
      name: "Electrica Gibson ES3900CHNH1 ES-339",
      price: 3400,
      category: "semi-huecas",
      img: "https://tmsmusic.co/cdn/shop/files/guitarra-electrica-gibson-es3900chnh1-es-339-semi-hollow-body-the-music-site-1.jpg?v=1708735307",
      stock: 1,
      description: "Guitarra Electrica Gibson ES3900CHNH1 ES-339 semi-hollow body",
    },
    {
        id: "5",
        name: "Gretsch G5420T ",
        price: 1180,
        category: "huecas",
        img: "https://m.media-amazon.com/images/I/61cV+0lxi7L.jpg",
        stock: 6,
        description: "Gretsch G5420T Guitarra electromática de cuerpo hueco con Bigsby, color naranja",
      },
      {
        id: "6",
        name: "5th Avenue CW Kingpin",
        price: 1200,
        category: "huecas",
        img: "https://m.media-amazon.com/images/I/81+52qHri3L._AC_SL1500_.jpg",
        stock: 0,
        description:"5th Avenue CW Kingpin II CB Cognac Burst incl. Estuche Tric",
      },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 1000);
    });
  };