import { StyleSheet, View, Image } from 'react-native';
import Deck from './src/Deck';
import { Card, Button, Text } from '@rneui/themed';

// https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10
const DATA = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952'
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796'
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355'
  },
  {
    albumId: 1,
    id: 4,
    title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776'
  }
];

export default function App() {
  const renderCard = ({ id, title, url }) => {
    return (
      <Card key={id} title={title}>
        <Text>hello</Text>
        <Image
          resizeMode="cover"
          style={{ height: 100, width: '100%' }}
          source={{ uri: url + '.png' }}
        />
        <Button title="click me" />
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Deck data={DATA} renderCard={renderCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
