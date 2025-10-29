
import {useState} from "react";
import { View, StyleSheet,TextInput, Button} from "react-native";

type Submit={
    submitHandler: (title:string) => void
}

export default function AddTodo({submitHandler} : Submit) {
    const [newTodo, setNewTodo] = useState("")

    const handleChange = (value : string)=>{
        setNewTodo(value)
    }

    const hadnlePress = ()=>{
        submitHandler(newTodo)
        setNewTodo("")
    }
  
  return (
    <View style={styles.input}>
     <TextInput 
     placeholder="add todo...."
     onChangeText={handleChange}
     value={newTodo}
     />
     <Button title= "add to do " color="coral" onPress={hadnlePress}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
       borderBottomColor: "lightgray",
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:8,
        borderBottomWidth:1
    }
})