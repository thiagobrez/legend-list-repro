import React, {useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import { LegendList } from "@legendapp/list";


export default function App() {
  const [items, setItems] = useState([1, 2, 3])

  const renderItem = ({ item }: any) => {
		return (
			<View style={styles.item}>
        <Text>
          {item}
        </Text>
      </View>
		);
	};


  const onAddItem = () => {
    setItems([
      ...items,
      items.length + 1,
    ])
  }

  return (
    <SafeAreaView>
      <LegendList
				data={items}
				renderItem={renderItem}
        estimatedItemSize={80}
			/>
      <Button title="+" onPress={onAddItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  }
});
