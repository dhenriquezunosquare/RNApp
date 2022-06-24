import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {
  const [list, setList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  const AddNewGoal=()=>{
    setShowModal(true);
  }

  const handleCancel = () => {
    setShowModal(false);
  }

  const handlePress = (text) => {
    setList((prev) => {
      return [...prev, { text }];
    });
    handleCancel();
  }

  const deleteGoals =(text)=>{
    setList((prev) => {return  prev.filter(x=>x.text !== text)});
  } 

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#a065ec" onPress={AddNewGoal} />
      <GoalInput handleCancel={handleCancel} showModal={showModal} handlePress={handlePress} />
      <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={false} data={list} renderItem={(item) => (
          <GoalItem item={item} onDeleteItem={deleteGoals} />
        )} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
 
  
  goalsContainer: {
    flex: 4
  },
});
