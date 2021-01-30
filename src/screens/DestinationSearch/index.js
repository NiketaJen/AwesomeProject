import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, Pressable} from 'react-native'
import styles from './styles.js'
import Entypo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

import searchResults from '../../../assests/search'

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState('')
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Input Component */}
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* List of destionations */}
            <FlatList
                data={searchResults}
                renderItem={({item})=> (
                    <Pressable style={styles.row} onPress={() => navigation.navigate('Guests')}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </Pressable> 
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;