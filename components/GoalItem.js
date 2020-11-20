import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constants/colors'

const GoalItem = (props) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={props.onDelete.bind(this,props.id)}
        >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,        
        backgroundColor:colors.WHITE,
        borderColor: colors.BLACK,
        marginTop: 18,
        zIndex:999
    }
})
export default GoalItem