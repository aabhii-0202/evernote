import React from 'react';
import {View, Text,StyleSheet } from 'react-native';


const SliderItem = ({t1,t2,t3}) => {


     return (
        <View >
            <Text style={styles.text1}>{t1}</Text>
            <Text style={styles.text2}>{t2}</Text>
            <Text style={styles.text3}>{t3}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    text1:{
        fontSize:24,
        alignSelf:'center',
        textAlign:'center',
        marginHorizontal:28,
        color:'black'
    },
    text2:{
        fontSize:24,
        alignSelf:'center',
        textAlign:'center',
        marginTop:40,
        color:'black'
    },
    text3:{
        fontSize:40,
        alignSelf:'center',
        textAlign:'center',
        marginTop:40,
        color:'black',
        fontWeight:'bold'
    }
});


export default SliderItem;