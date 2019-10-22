const categories = [
  {
    id: 1,
    name: 'Bật/Tắt thiết bị',
    description: 'Ghi nhận quá trình bật/tắt thiết bị',
    image: require('../assets/icons/plants.png')
  },
  {
    id: 2,
    name: 'Tra cứu thiết bị',
    description: 'Tra cứu thong tin lich sử ghi nhận',
    image: require('../assets/icons/seeds.png')
  },
  {
    id: 3,
    name: 'Bảo trì thiết bị',
    description: 'Ghi nhận thông tin bảo trì',
    image: require('../assets/icons/flowers.png')
  },
  {
    id: 4,
    name: 'Thanh lý thiết bị',
    description: 'Ghi nhận thông tin thanh lý',
    image: require('../assets/icons/sprayers.png')
  },
  {
    id: 5,
    name: 'Kiểm kê thiết bị',
    description: 'Ghi nhận kiểm kê thiết bị',
    image: require('../assets/icons/pots.png')
  },
];

const products = [
  {
    id: 1,
    name: '16 Best Plants That Thrive In Your Bedroom',
    description:
      'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png')
    ]
  }
];

const explore = [
  // images
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png')
];

const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'contact@react-ui-kit.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, explore, products, profile };
