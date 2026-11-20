import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert,Text, View ,SectionList,TouchableOpacity,Image, Button} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
const datasource = [
    {
        title: 'Water',
        icon: 'water',
        bgColor: 'blue',
        textColor: 'white',
        data: [
            { key: 'Squirtle', card: 7 },
            { key: 'Wartortle', card: 8 },
        ],
    },
    {
        title: 'Fire',
        icon: 'flame',
        bgColor: 'orange',
        textColor: 'white',
        data: [
            { key: 'Charmander', card: 4 },
            { key: 'Charmeleon', card: 5 },
        ],
    },
    {
        title: 'Air',
        icon: 'leaf',
        bgColor: 'green',
        textColor: 'white',
        data: [
             { key: 'Ivysaur', card: 2 },
             { key: 'Butterfree', card: 12 },
        ],
    },
];
const renderItem = ({ item }) => {
    const cardUrl = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.card}-2x.png`;

    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => Alert.alert(`${item.key} is selected!`)}
        >
            <Text style={styles.textStyle}>{item.key}</Text>
            <Image
                source={{ uri: cardUrl }}
                style={styles.cardImage}
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
};
export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Pokemon Card</Text>
            <Button title="Add Pokemon"
                    onPress={()=>Alert.alert('I will add pokemon card later!')}/>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                renderSectionHeader={({ section }) => (
                    <View
                        style={[
                            styles.sectionHeader,
                            { backgroundColor: section.bgColor },
                        ]}
                    >
                        <Ionicons
                            name={section.icon}
                            size={22}
                            color={section.textColor}
                        />
                        <Text style={[styles.headerText, { color: section.textColor }]}>
                            {section.title}
                        </Text>
                    </View>
                )}
            />

            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'khaki',
     paddingTop: 48,
     paddingHorizontal: 16,
   },
   title: {
     fontSize: 26,
     fontWeight: 'bold',
     marginBottom: 12,
   },
   listContent: {
     paddingTop: 12,
     paddingBottom: 24,
   },
   sectionHeader: {
     flexDirection: 'row',
     alignItems: 'center',
     padding: 12,
     borderRadius: 8,
     marginBottom: 8,
   },
   headerText: {
     fontSize: 20,
     fontWeight: 'bold',
     marginLeft: 8,
   },
   opacityStyle: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     backgroundColor: 'white',
     borderRadius: 8,
     padding: 12,
     marginBottom: 8,
   },
   textStyle: {
     flex: 1,
     fontSize: 16,
     fontWeight: '600',
     marginRight: 12,
   },
   cardImage: {
     width: 180,
     height: 216,
   },
 });