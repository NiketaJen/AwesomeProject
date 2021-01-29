import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js'

const GuestsScreen = (props) => {
    return (
        <View>
            {/* Row 1: Adults */}
            <View style={styles.row}/>
                {/* Titles */}
                <View>
                    <Text>Adults</Text>
                    <Text>Age 13 or above</Text>
                </View>
                {/* Buttons */}
                <View>
                    <Pressable
                        onPress={()=> console.warn('- clicked')}
                        style={styles.button}
                    >
                        <Text>-</Text>
                    </Pressable>
                

                <Text>0</Text>

                <Pressable
                        onPress={()=> console.warn('+ clicked')}
                        style={styles.button}
                    >
                        <Text>+</Text>
                    </Pressable>
            {/* Row 1: Adults */}
                </View>
            
        </View>
    );
};

export default GuestsScreen;

