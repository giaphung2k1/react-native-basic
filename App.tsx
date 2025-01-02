import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  // string
  const [name,setName] = useState<string>('Hungdz');

 

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
          borderColor:'violet',
          borderWidth: 1,
          padding:10
          }}/>

          <Text>{name}</Text>

          <Button title='Add new'/>
      </View>

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




