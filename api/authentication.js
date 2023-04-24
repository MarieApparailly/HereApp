import UserScreen from '../screens/UserScreen';

// Available users
const users = [
  {mail: 'test@test.fr', password: 'test', nickName: 'test'},
  {mail: 'admin@test.fr', password: 'admin', nickName: 'admin'},
];

const usersHard = [
  {
    id: 1,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Cha',
    password: 'test',
    firstName: 'Charlotte',
    lastName: 'Miaou',
    phone: '0624449999',
    mail: null,
    photo: null,
    car: false,
    status: 1,
    team: 'NousToutes',
    admin: true,
    missions: [],
  },
  {
    id: 2,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Lucky',
    password: 'test',
    firstName: 'Luc',
    lastName: 'Tanos',
    phone: '0627834400',
    mail: null,
    photo: null,
    car: true,
    status: 1,
    team: 'NousToutes',
    admin: true,
    missions: [],
  },
  {
    id: 3,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Idunn',
    password: 'test',
    firstName: 'Idunn',
    lastName: 'Apparailly',
    phone: '0666325487',
    mail: null,
    photo: null,
    car: false,
    status: 1,
    team: 'NousToutes',
    admin: true,
    missions: [],
  },
  {
    id: 4,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Marie',
    password: 'test',
    firstName: 'Marie',
    lastName: 'Apparailly',
    phone: '0626000001',
    mail: null,
    photo: null,
    car: false,
    status: 1,
    team: 'NousToutes',
    admin: true,
    missions: [],
  },
  {
    id: 5,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Marie',
    password: 'test',
    firstName: 'Marie',
    lastName: 'Apparailly',
    phone: '0626000001',
    mail: null,
    photo: null,
    car: false,
    status: 1,
    team: 'BDE',
    admin: true,
    missions: [],
  },
  {
    id: 6,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Cycy',
    password: 'test',
    firstName: 'Cyrielle',
    lastName: 'Barbier',
    phone: '0780322222',
    mail: null,
    photo: null,
    car: true,
    status: 1,
    team: 'BDE',
    admin: true,
    missions: [],
  },
  {
    id: 7,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Jo',
    password: 'test',
    firstName: 'Joseph',
    lastName: 'Beasse',
    phone: '060673333',
    mail: null,
    photo: null,
    car: false,
    status: 1,
    team: 'BDE',
    admin: true,
    missions: [],
  },
  {
    id: 8,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Clem',
    password: 'test',
    firstName: 'Clémence',
    lastName: 'Monnier',
    phone: '0788889543',
    mail: null,
    photo: null,
    car: false,
    status: 1,
    team: 'BDE',
    admin: true,
    missions: [],
  },
  {
    id: 9,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Tiph',
    password: 'test',
    firstName: 'Tiphaine',
    lastName: 'Petit',
    phone: '0632214455',
    mail: null,
    photo: null,
    car: false,
    status: 1,
    team: 'BDE',
    admin: true,
    missions: [],
  },
  {
    id: 10,
    latitude: null,
    longitude: null,
    placeId: null,
    place: null,
    pseudo: 'Alex',
    password: 'test',
    firstName: 'Alexandra',
    lastName: 'Moras',
    phone: '0666669821',
    mail: null,
    photo: null,
    car: true,
    status: 1,
    team: 'BDE',
    admin: true,
    missions: [],
  },
];

// Return null or the authenticated user if login is successful
export default authenticateUser = (pseudo, password) => {
  const userLogged = usersHard.find(
    u => u.pseudo === pseudo && u.password === password,
  );

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [usersApi, setUsersApi] = useState([
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  //   {},
  // ]);
  // // const [users, setUsers] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);

  // const loadUsers = async () => {
  //   setLoading(true);
  //   setError(false);

  //   try {
  //     const usersLoaded = await userService.getUsers();
  //     setUsersApi(usersLoaded);
  //     console.log('connexion');
  //     console.log(usersLoaded);
  //     console.log('fin connexion');
  //   } catch (e) {
  //     setError(true);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   loadUsers();
  // }, []);

  // if (loading) {
  //   return (
  //     <View>
  //       <ActivityIndicator size="large" />
  //     </View>
  //   );
  // }

  // if (error) {
  //   return (
  //     <View>
  //       <Text>Something went wrong :\</Text>
  //     </View>
  //   );
  // }

  return (
    // Search for the first user matching login and password
    <UserScreen user={userLogged} />
  );
};

// export default authenticateUser = (mail, password) => {
//   return (
//     // Search for the first user matching login and password
//     users.find(u => u.mail === mail && u.password === password) || null
//   );
// };
