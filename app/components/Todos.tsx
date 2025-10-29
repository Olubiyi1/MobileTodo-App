// actually created this file to be used in the flatlist to avoid too much codes in the index file

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// creating a type for my item(each todo)
type TodoItems = {
  title: string;
  id: number;
};

// the props for the todo
type TodoProps = {
  item: TodoItems;
  onPress: (id: number) => void;
};

export default function TodoItems({ item, onPress }: TodoProps) {
  return (
    <TouchableOpacity style={styles.contents} onPress={() => onPress(item.id)}>
      <View style={{flexDirection:"row" , justifyContent:"space-between"}}>
        <Text>{item.title}</Text>
        <MaterialIcons name="delete" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contents: {
    padding: 16,
    borderWidth: 1,
    marginTop: 5,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
