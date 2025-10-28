// actually created this file to be used in the flatlist to avoid too much codes in the index file

import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

// creating a type for my item
type TodoItems = {
  title: string;
  id: number;
};

// the props for the todo
type TodoProps = {
  item: TodoItems;
  onPress:(id:number) => void
};

export default function TodoItems({ item, onPress }: TodoProps) {
  return (
    <TouchableOpacity style={styles.contents} onPress={()=>onPress(item.id)}>
        <Text>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contents: {
    padding: 16,
    borderWidth: 1,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
