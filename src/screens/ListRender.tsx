import {Text, View} from 'react-native';

export interface ListRenderProps {
  name: string;
  age: number;
  id: string;
}

const ListRender = ({item}: {item: ListRenderProps}) => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 15,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderRadius: 12,
        borderWidth: 1.3,
        elevation: 6,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 20}}>{item.name}</Text>
        <Text style={{fontSize: 20}}>{item.id}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'grey',
          marginVertical: 10,
          height: 2,
        }}></View>
      <Text style={{fontSize: 20}}>{item.age}</Text>
    </View>
  );
};

export default ListRender;
