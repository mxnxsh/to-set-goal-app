import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import colors from './constants/colors';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalsHandler = goalTitle => {
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false)

  };

  const removeGoalHandler = goalId => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }
  return (
    <View style={styles.container}>
      <View style={styles.powderBlue}></View>
      <View style={styles.skyBlue}></View>
      <View style={styles.steelBlue}></View>
      <View style={styles.screen}>
        <View style={styles.buttonStyle}>
          <Button
            title="Add Goal"
            onPress={() => setIsAddMode(true)}
          />  
        </View>
        <GoalInput visible={isAddMode} onAddGoal={addGoalsHandler} onCancel={cancelGoalAdditionHandler}/>
        <FlatList
          keyExtractor={item => item.id}
          data={goals}
          renderItem={itemData => (
            <GoalItem
              title={itemData.item.value}
              id={itemData.item.id}
              onDelete={removeGoalHandler}
            />
          )}
        /> 
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
    flex:1,
    justifyContent: 'center',
  },
  buttonStyle: {
    zIndex:1
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 30,
    backgroundColor: colors.BLACK,
    width: '100%',
    position:'relative'
  },
  powderBlue: {
    position: 'absolute',
    right: 0,
    top:0,
    width: '50%',
    height: '27%',
    backgroundColor: colors.POWERBLUE,
    borderBottomLeftRadius: 600,
  },
  skyBlue: {
    position: 'absolute',
    left: 0,
    top:0,
    width: '70%',
    height: '50%',
    backgroundColor: colors.SKYBLUE,
    borderBottomRightRadius:600,
    zIndex:-1
  },
  steelBlue: {
    position: 'absolute',
    right: 0,
    bottom:0,
    width: 50,
    height: 50,
    width: '100%',
    height: '50%',
    backgroundColor: colors.STEELBLUE,
    borderTopLeftRadius:600
  }
});
