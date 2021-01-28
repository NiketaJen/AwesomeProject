import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native'
import styles from './styles.js'
import Entypo from 'react-native-vector-icons/Entypo'

import searchResults from '../../../assests/search'

const DestinationSearchScreen = (props) => {
    const [inputText, setInputText] = useState('')
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
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={30}/>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View> 
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;