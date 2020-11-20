import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../constants/colors';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          placeholderTextColor={colors.WHITE}
          style={styles.input}
          onChangeText={enteredText => setEnteredGoal(enteredText)}
          value={enteredGoal}
          
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:colors.BLACK
  },
  input: {
    width: '80%',
    borderBottomColor: colors.WHITE,
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 10,
    color:colors.WHITE
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-evenly',
  },
  button: {
    width: '40%',
  },
});
export default GoalInput;
