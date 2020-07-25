import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ProductsList from '../../Components/ProductsList';
import AppbarHeader from '../../Components/AppbarHeader';
import {Text} from 'react-native';

export default function Products({navigation}) {
  // const fav = route.params.fav;

  const _navMenu = () => navigation.toggleDrawer();

  const imageLink = require('../../Images/productsImages/drawable-xxhdpi/BIS-Clamps-Lined-Split-Clamp.png');

  const imageLink1 = require('../../Images/productsImages/clampother.png');
  const imageLink2 = require('../../Images/productsImages/BIS-Clamps-Lined-Split-Clamp.png');
  const imageLink3 = require('../../Images/productsImages/clamp.png');

  theObjectOfItems1 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      //description
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/a.png'),
    images: [imageLink1, imageLink2, imageLink3], //product_images: [{image:imageLink}, {image:imageLink}, {image:imageLink}]
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };
  theObjectOfItems2 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/b.png'),
    images: [imageLink1, imageLink2, imageLink3],
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };
  theObjectOfItems3 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/c.png'),
    images: [imageLink1, imageLink2, imageLink3],
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };
  theObjectOfItems4 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/d.png'),
    images: [imageLink1, imageLink2, imageLink3],
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };
  theObjectOfItems5 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/e.png'),
    images: [imageLink1, imageLink2, imageLink3],
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };
  theObjectOfItems6 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/f.png'),
    images: [imageLink1, imageLink2, imageLink3],
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };
  theObjectOfItems7 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/g.png'),
    images: [imageLink1, imageLink2, imageLink3],
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };
  theObjectOfItems8 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/h.png'),
    images: [imageLink1, imageLink2, imageLink3],
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };
  theObjectOfItems9 = {
    name: 'BIS Clamps Lined Split Clamp',
    features: [
      'Lock bolts with combi cross recessed head',
      'For horizontal and vertical applications',
      'Profiled for extra strength',
      'Screws secured with anti-loss washer',
      'Material: steel',
      'Electrogalvanized as per ASTM B 633',
      'Standards (SC3), BS 1706 FE/ZN 12',
      'Temperature resistance from -20 °C to +110 °C',
      'Noise insulating lining, EPDM, black',
      'Noise reduction up to 18dB (A).',
    ],
    iconImage: require('../../Images/productsImages/productslista/drawable-xhdpi/i.png'),
    images: [imageLink1, imageLink2, imageLink3],
    category: [
      'Hot Dip Galvanized and Stainless Steel Option available on request',
      'With connection nut M8/M10, M10/M12 available on request.',
      'With M6 Side Nuts available on request.',
      'This series replaces part number DMC115 series.',
    ],
    isFavourite: false,
  };

  const theproductsItems = [
    theObjectOfItems1,
    theObjectOfItems2,
    theObjectOfItems3,
    theObjectOfItems4,
    theObjectOfItems5,
    theObjectOfItems6,
    theObjectOfItems7,
    theObjectOfItems8,
    theObjectOfItems9,

    // const theproductsItemstwo
  ];

  const productsList = [
    {
      name: 'BIS Metal Pipe Clamps with Lining',
      image: require('../../Images/productsImages/products/drawable-hdpi/a.png'),
      items: theproductsItems,
      click: true,
    },
    {
      name: 'BIS Metal Pipe Clamps',
      image: require('../../Images/productsImages/products/drawable-hdpi/b.png'),
      items: theproductsItems,
      click: false,
    },
    {
      name: 'BIS Clamps For Insulated Pipe',
      image: require('../../Images/productsImages/products/drawable-hdpi/c.png'),
      items: theproductsItems,
      click: false,
    },
    {
      name: 'BIS Fixing Points and Sliding Devices',
      image: require('../../Images/productsImages/products/drawable-hdpi/d.png'),
      items: theproductsItems,
      click: false,
    },
    {
      name: 'BIS RapidStrut® Fixing System',
      image: require('../../Images/productsImages/products/drawable-hdpi/e.png'),
      items: theproductsItems,
      click: false,
    },
    {
      name: 'BIS Rooftop and Solar Fixing System',
      image: require('../../Images/productsImages/products/drawable-hdpi/f.png'),
      items: theproductsItems,
      click: false,
    },
    {
      name: 'BIS Fixing Accessories',
      image: require('../../Images/productsImages/products/drawable-hdpi/g.png'),
      items: theproductsItems,
      click: false,
    },
    {
      name: 'BIS Fastenings',
      image: require('../../Images/productsImages/products/drawable-hdpi/h.png'),
      items: theproductsItems,
      click: false,
    },
    {
      name: 'BIS Pipe Conectors',
      image: require('../../Images/productsImages/products/drawable-hdpi/i.png'),
      items: theproductsItems,
      click: false,
    },
  ];
  console.log('Products Render');
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('https://roundcomm.com/demos/hirawalraven/api/category/')
      .then((response) => response.json())
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      });
  }, []);

  return (
    <>
      <AppbarHeader
        iconName={'briefcase-variant'}
        heading={'Products'}
        _navMenu={_navMenu}
      />
      {products ? (
        <ScrollView style={{backgroundColor: 'white'}}>
          {products.map((product, id) => (
            <ProductsList
              key={product.id}
              name={product.name}
              img={product.image}
              items={product.products}
              navigation={navigation}
              //  click={product.click}
            />
          ))}
        </ScrollView>
      ) : (
        <Text>Loading</Text>
      )}
    </>
  );
}
