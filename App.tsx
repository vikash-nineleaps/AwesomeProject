import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello World!!!</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={{
            uri: 'https://picsum.photos/seed/picsum/200/300',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
