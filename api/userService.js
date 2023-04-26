const rootEndpoint = "https://piimarieapparailly.azurewebsites.net/api";

// Model class for a user
export class User {
  constructor(
    id,
    latitude,
    longitude,
    placeId,
    place,
    pseudo,
    password,
    firstName,
    lastName,
    phone,
    mail,
    photo,
    car,
    status,
    team,
    admin,
    missions
  ) {
    this.id = id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.placeId = placeId;
    this.place = place;
    this.pseudo = pseudo;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.mail = mail;
    this.photo = photo;
    this.car = car;
    this.status = status;
    this.team = team;
    this.admin = admin;
    this.missions = missions;
  }
}

class UserService {
  async getUsers() {
    const response = await fetch(`${rootEndpoint}/UserApi`);
    const users = await response.json();
    return users;
  }

  // async fetchFromApi(query) {
  //   console.log(`Fetching API with query ${query}`);
  //   try {
  //     const response = await fetch(query);
  //     // FIXME: JSON parse error when users not found
  //     const content = await response.json();
  //     console.log(content);
  //     //ici rentrer le tableau dans un objet
  //     //return content;
  //     return content.users;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // // Create a User model object from a subset of data fields returned by API
  // createUser(user) {
  //   return new User(
  //     user.id,
  //     user.latitude,
  //     user.longitude,
  //     user.placeId,
  //     user.place,
  //     user.pseudo,
  //     user.password,
  //     user.firstName,
  //     user.lastName,
  //     user.phone,
  //     user.mail,
  //     user.photo,
  //     user.car,
  //     user.status,
  //     user.team,
  //     user.admin,
  //     user.missions
  //   );
  // }

  // createListUsers(users) {
  //   // Create a user object for each element in the array
  //   return users.map((user) => this.createUser(user));
  // }
}

export default new UserService();
