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

// The onLoginSuccessful prop is only necessary when linking authentication and module display
const AuthForm = ({onLoginSuccessful}) => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    const user = authenticateUser(pseudo, password);
    let msg = user !== null ? 'Connexion réussie' : 'Erreur de connexion';
    msg += ` avec les identifiants : ${pseudo + '/' + password}`;
    if (user !== null) onLoginSuccessful(user);
    else Alert.alert('Action sélectionnée', msg);
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
      <Input
        placeholder="Pseudo"
        imageUrl="https://img.icons8.com/doodle/48/000000/email-sign.png"
        hideCharacters={false}
        onChangeText={text => setPseudo(text)}
      />
      <Input
        placeholder="Mot de passe"
        imageUrl="https://img.icons8.com/ultraviolet/40/000000/key.png"
        hideCharacters={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={[styles.buttonContainer, styles.signInButton]}
        onPress={signIn}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={resetPassword}>
        <Text>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer} onPress={signUp}>
        <Text>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  formImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
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
    backgroundColor: 'skyblue',
  },
  loginText: {
    color: 'white',
  },
});
