import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { ref, push, onValue } from 'firebase/database';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [product, setProduct] = useState({
    title: "",
    amount: "",
  });
  const [items, setItems] = useState([]);

  useEffect(() => {
    onValue(ref(db, "/items"), (snapshot) => {
      const data = snapshot.val();
      setItems(Object.values(data));
    });
  }, [])

  const handleSave = () => {
    if (product.title) {
      push(ref(db, 'items/'), product);
    }
  }

  //remove(ref(db, "items/id"))

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder="Enter title..."
          value={product.title}
          onChangeText={text => setProduct({ ...product, title: text })}
        />
        <TextInput
          placeholder="Enter amount..."
          value={product.amount}
          onChangeText={text => setProduct({ ...product, amount: text })}
        />
        <Button
          title="Save"
          onPress={handleSave}
        />

        <FlatList
          data={items}
          renderItem={({ item }) =>
            <View style={{ flexDirection: 'row' }}>
              <Text>{item.title}, </Text>
              <Text>{item.amount}  </Text>
              <Text style={{ color: '#1f3f97ff' }} onPress={() => deleteItem(item.id)}>delete</Text>
            </View>
          }
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
