import React from 'react';
import {View, Text,StyleSheet,Image } from 'react-native';
import Button1 from './Button1';


const Card = ({title,amount,subtitle,list,btn}) => {


     return (
        <View style={styles.view}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.amount}>{amount}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Button1>{btn}</Button1>
            <Image
                source={require('../../../assets/dropgreen.png')}
                style={styles.contentimg}/>
        </View>
    );
};


const styles = StyleSheet.create({
    view:{
        borderRadius:8,
        backgroundColor:'#F5F5F5',
        padding:16,
        marginTop:40,
        paddingBottom:16
    },
    title:{
        fontSize:32,
        color:'black',
        fontWeight:'300',
    },
    amount:{
        fontSize:40,
        color:'black',
        fontWeight:'600'
    },
    subtitle:{
        fontSize:20,
        color:'black',
        fontWeight:'400'
    },
    contentimg:{
        position:'absolute',
        alignSelf:'flex-end',
        margin:16,
        right:0
    }
});


export default Card;