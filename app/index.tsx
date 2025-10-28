import { FlatList, Text, View } from "react-native";
import Header from "./components/header";
import { Todo } from "../constants/todo";
import TodoItems from "./components/Todos";
import { useState } from "react";
import AddTodo from "./components/addTodo";

export default function Index() {
  const [todo, setTodo] = useState(Todo);

  const handlePress = (id: number) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const submitHandler = (title: string) => {
    if (title.trim().length > 0) {
      setTodo((prevTodo) => {
        return [{ title: title, id: Math.random()}, ...prevTodo];
      });
    }
  };

  return (
    <View>
      <Header />
      <AddTodo submitHandler={submitHandler} />
      <FlatList
        data={todo}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <TodoItems item={item} onPress={handlePress} />;
        }}
      />
    </View>
  );
}
