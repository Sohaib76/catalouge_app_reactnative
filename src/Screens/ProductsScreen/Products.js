import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ProductsList from '../../Components/ProductsList';
import AppbarHeader from '../../Components/AppbarHeader';

export default function Products({navigation}) {
  // const fav = route.params.fav;

  const _navMenu = () => navigation.toggleDrawer();

  const imageLink = require('../../Images/productsImages/drawable-xxxhdpi/BIS-Clamps-Lined-Split-Clamp.png');

  const imageLink1 = require('../../Images/productsImages/clampother.png');
  const imageLink2 = require('../../Images/productsImages/BIS-Clamps-Lined-Split-Clamp.png');
  const imageLink3 = require('../../Images/productsImages/clamp.png');

  theObjectOfItems = {
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
    iconImage: imageLink,
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
    theObjectOfItems,

    {
      name: 'BUS Clamps Lined Split Clamp',
      features: [
        'Awk bolts with combi cross recessed head',
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
      iconImage: imageLink,
      images: [imageLink1, imageLink2, imageLink3],
      category: [
        'Not Dip Galvanized and Stainless Steel Option available on request',
        'With connection nut M8/M10, M10/M12 available on request.',
        'With M6 Side Nuts available on request.',
        'This series replaces part number DMC115 series.',
      ],
      isFavourite: false,
    },
    theObjectOfItems,
    theObjectOfItems,
    theObjectOfItems,
    theObjectOfItems,
    theObjectOfItems,
    theObjectOfItems,
    theObjectOfItems,

    // const theproductsItemstwo
  ];

  const productsList = [
    {
      name: 'BIS Metal Pipe Clamps with Lining',
      image: imageLink,
      items: theproductsItems,
    },
    {
      name: 'BIS Metal Pipe Clamps',
      image: imageLink,
      items: theproductsItems,
    },
    {
      name: 'BIS Clamps For Insulated Pipe',
      image: imageLink,
      items: theproductsItems,
    },
    {
      name: 'BIS Fixing Points and Sliding Devices',
      image: imageLink,
      items: theproductsItems,
    },
    {
      name: 'BIS RapidStrut® Fixing System',
      image: imageLink,
      items: theproductsItems,
    },
    {
      name: 'BIS Rooftop and Solar Fixing System',
      image: imageLink,
      items: theproductsItems,
    },
    {
      name: 'BIS Fixing Accessories',
      image: imageLink,
      items: theproductsItems,
    },
    {
      name: 'BIS Fastenings',
      image: imageLink,
      items: theproductsItems,
    },
    {
      name: 'BIS Pipe Conectors',
      image: imageLink,
      items: theproductsItems,
    },
  ];
  console.log('Products Render');
  const [products, setProducts] = useState(productsList);

  return (
    <>
      <AppbarHeader
        iconName={'briefcase-variant'}
        heading={'Products'}
        _navMenu={_navMenu}
      />

      <ScrollView style={{backgroundColor: 'white'}}>
        {products.map((product, id) => (
          <ProductsList
            key={id}
            name={product.name}
            img={product.image}
            items={product.items}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </>
  );
}
