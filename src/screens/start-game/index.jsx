
import { Button, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { theme } from "../../constants";

import { styles } from "./styles";
import { Header, Card, NumberContainer } from "../../components/index";
import { useState } from "react";

const StartGame = () => {
  const [name, setName] = useState('')

  const [numberOption, setNumberOption] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);


  const onHandlerChangeText = (text) => {
    setNumberOption(text.replace(/[^0-9]/g, ''))
  };

  const onHandlerConfirm = () => {
    const chosenNumber = Number(numberOption);
    if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber <18) {
      Alert.alert("MENOR DE EDAD", "Usted debe ser mayor de edad para entrar",
       [{text: "Okay", style: "destructive", onPress: () => setNumberOption('')}]);
    }else{
      setNumberOption('');
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
    };
  };

  const onHandlerReset = () => {
    setNumberOption('');
    setConfirmed(false);
    setSelectedNumber(null);

    setName('');
  };

  const onHandlerAdelante = () => {

  }

  const Confirmed = () => confirmed ? (
    <Card style={styles.confirmedContainer}>
      <Text style={styles.confirmedTitle}>Bienvenido</Text>
      <NumberContainer text={name} />
      <Button title="Adelante" onPress={onHandlerAdelante} color={theme.colors.primary}/>
      
    </Card>
  ) : null;



    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header title='Welcome' />
          
          <Text style={styles.title}>Bebiendo 4 ever</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit
            placeholder="nombre" 
            style={styles.inputName} 
            onChangeText={setName}
            value={name}
          />
          
          <Card style={styles.inputContainer}>
            <Text style={styles.label}>¿Cuál es tu edad?</Text>
            <TextInput
              keyboardType="number-pad"
              maxLength={2}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              placeholder="0" 
              style={styles.input} 
              onChangeText={onHandlerChangeText}
              value={numberOption}
            />
            <View style={styles.buttonContainer}>
              <Button title="Reset" onPress={onHandlerReset} color={theme.colors.secundary} />
              <Button title="Confirm" onPress={onHandlerConfirm} color={theme.colors.secundary} disabled={numberOption==''}/>
            </View>
          </Card>
          <Confirmed />
        </View>
      </TouchableWithoutFeedback>
    )
}

export default StartGame;