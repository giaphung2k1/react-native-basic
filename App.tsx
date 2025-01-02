import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  // string
  const [name,setName] = useState<string>('helllo');

  // Number
  const [age,setAge] = useState<number>(0)

  //

  const [person,setPerson] =  useState<
    {
      name: string;
      age: number;
    }
  >({
      name: 'hung',
      age: 25
      
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{person.name}</Text>
      </View>

      <Text>{person.age}</Text>

    </View>
  );
}


// css in js 

const styles = StyleSheet.create({
  text: {
    fontSize:30,
    color:"red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

    fontSize:50,
    color:"red",
    paddingTop:40,
    paddingHorizontal: 20
  },
});




