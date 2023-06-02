import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GoalItems = (props) => {
  const deleteGoalHandler = (goalIndex) => {
    props.setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((_, index) => index !== goalIndex);
    });
  };

  return (
    <View key={props.index} style={styles.goalItem}>
      <Text style={styles.goalText}>{props.goal}</Text>
      <Button title="Delete" onPress={() => deleteGoalHandler(props.index)} />
    </View>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#B799FF",
    borderWidth: 1,
    borderColor: "#A459D1",
  },
  goalText: {
    color: "#7149C6",
    width: "75%",
  },
});
