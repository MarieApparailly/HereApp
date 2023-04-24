import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Input from '../components/Input';
import authenticateUser from '../api/authentication';
import UserScreen from './UserScreen';

// The onLoginSuccessful prop is only necessary when linking authentication and module display
const ConnexionScreen = ({onLoginSuccessful}) => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    const user = authenticateUser(pseudo, password);
    console.log(user);
    let msg = user !== null ? 'Connexion réussie' : 'Erreur de connexion';
    msg += ` avec les identifiants : ${pseudo + '/' + password}`;
    console.log(msg);
    if (user !== null) onLoginSuccessful(user);
    //else Alert.alert('Action sélectionnée', msg);
    return <UserScreen pseudo={pseudo} password={password} />;
  };

  const resetPassword = () => {
    Alert.alert('Action sélectionnée', 'Mise à jour du mot de passe');
  };

  const signUp = () => {
    Alert.alert('Action sélectionnée', 'Inscription');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.formImage}
        source={require('../assets/position.png')}
      />
      <Text style={styles.title}>HERE</Text>
      <Input
        placeholder="Pseudo"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvWW4r98sfhEqdK826pwQKwr4iQ2QBFRP6fnDr0gypNwY82nrZdVNulMSWIIXAJj9bRc&usqp=CAU"
        hideCharacters={false}
        onChangeText={text => setPseudo(text)}
      />
      <Input
        placeholder="Mot de passe"
        imageUrl="https://static.vecteezy.com/ti/vecteur-libre/p3/581808-verrouiller-l-39-icone-illustrationle-gratuit-vectoriel.jpg"
        hideCharacters={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={[styles.buttonContainer, styles.signInButton]}
        onPress={signIn}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={signUp}>
        <Text>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConnexionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 40,
    fontFamily: 'Roboto',
    color: '#CC1E1E',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  formImage: {
    width: 300,
    height: 200,
    //marginBottom: 20,
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signInButton: {
    backgroundColor: '#B14242',
  },
  loginText: {
    color: 'white',
  },
});
