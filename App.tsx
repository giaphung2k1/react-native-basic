import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  // string
  const [name, setName] = useState<string>('Hungdz');

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native 1" },
    { id: 2, title: "Learn React Native 2" },
    { id: 3, title: "Learn React Native 3" },
    { id: 4, title: "Learn React Native 4" },
    { id: 5, title: "Learn React Native 5" },
    { id: 6, title: "Learn React Native 6" },
    { id: 7, title: "Learn React Native 6" },
    { id: 8, title: "Learn React Native 6" },
    { id: 9, title: "Learn React Native 6" },
    { id: 10, title: "Learn React Native 6" },
    { id: 11, title: "Learn React Native 6" },
    { id: 12, title: "Learn React Native 6" },
    { id: 13, title: "Learn React Native 6" },
    { id: 14, title: "Learn React Native 6" },
    { id: 15, title: "Learn React Native 6" },
    { id: 16, title: "Learn React Native 6" },
    { id: 17, title: "Learn React Native 6" },
    { id: 18, title: "Learn React Native 6" },
    { id: 19, title: "Learn React Native 6" },
  ])

  return (
    <View style={styles.container}>
      <View>

        <TextInput
          value={name}
          onChangeText={(value) => setName(value)}
          multiline
          autoCorrect
          autoCapitalize='none'
          style={{
            borderColor: 'violet',
            borderWidth: 1,
            padding: 10
          }} />

        <Text>{name}</Text>

        <Button
          title='Add new'
          onPress={() => alert(23213)}
        />

        {/* <ScrollView style={{marginTop:20}}>
            {todoList.map(todo => {
              return (
                <Text 
                key={todo.id}
                style={styles.todo}
                >{todo.title}</Text>
              )
            })}
          </ScrollView> */}

        <FlatList
          data={todoList}
          renderItem={({ item }) => {
            return (
              <Text 
              key={item.id}
              style={styles.todo}
              >{item.title}</Text>
            )
          }}
        />
      </View>

    </View>
  );
}


// css in js 

const styles = StyleSheet.create({

  todo: {
    fontSize: 30,
    backgroundColor: 'pink',
    marginBottom: 10,
    padding: 10
  },
  text: {
    fontSize: 30,
    color: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

    fontSize: 50,
    color: "red",
    paddingTop: 40,
    paddingHorizontal: 20
  },
});




