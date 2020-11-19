import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

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
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setIsAddMode(true)} />
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
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
