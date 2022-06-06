import React,{useState,useEffect} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
    Image ,
    SafeAreaView,
    ScrollView,
    LayoutAnimation
} from 'react-native';
import Button from './components/Button';


const CONTENT = [
    {
        isExpanded: false,
        cat_name: 'WHY EVERYONE',
        subCat: [
            
        ]
    },
    {
        isExpanded: false,
        cat_name: 'FEATURES',
        subCat: [
            {id:1,title: 'SYNC AND ORGANIZE', val: 'Keep your notes handy',image:''},
            {id:2,title: 'WEB CLIPPER', val: 'A save button for web',image:''},
            {id:3,title: 'TASKS', val: 'Bring notes & to-do together',image:''},
            {id:4,title: 'CALENDAR', val: 'Connect schedules and notes',image:''},
            {id:5,title: 'TEMPLATES', val: 'Create better notes, faster',image:''},
            {id:6,title: 'DOCUMENT SCANNING', val: 'Go paperless with Evernote',image:''},
            {id:7,title: 'SEARCH', val: '',image:'Find exactly what you need'},
            {id:8,title: 'HOME', val: 'See your Evernote, your way',image:''},
        ]
    },
    {
        isExpanded: false,
        cat_name: 'PLANS',
        subCat: [
            {id:9,title: 'EVERNOTE FREE', val: 'Capture ideas and find them quickly',image:''},
            {id:10,title: 'EVERNOTE PERSONAL', val: 'Keep home and famaly on track',image:''},
            {id:11,title: 'EVERNOTE PRFESSIONAL', val: 'Tackel any project, at work or home',image:''},
            {id:12,title: 'EVERNOTE TEAMS', val: 'Collaborate in one convenient place',image:''},
        ]
    },
    {
        isExpanded: false,
        cat_name: 'HELP',
        subCat: [
           
        ]
    },
    {
        isExpanded: false,
        cat_name: 'LOG IN',
        subCat: [ 
           
        ]
    },
]



const ExpandableComponent = ({item,onCLickFunction})=> {
    const [layoutHeight, setlayoutHeight] = useState(0);

    useEffect(()=>{
        if(item.isExpanded){
            setlayoutHeight(null);
        }else{
            setlayoutHeight(0);
        }
    },[item.isExpanded])
    return (
        <View>
            <View style={styles.separator}/>
            <TouchableOpacity
                style={styles.item}
                onPress={onCLickFunction}
            >
                <Text style={styles.itemText}>
                    {item.cat_name}
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    height:layoutHeight,
                    overflow: 'hidden'
                }}
            >
                {
                    item.subCat.map((item,key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.content}
                            >
                                <View>
                                <Text style={styles.text}>
                                    {item.title}
                                </Text>
                                <Text style={styles.text}>
                                    {item.value}
                                </Text>
                                </View>
                            </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}



const Sidebar = ({navigation}) => {

    const [listDataSource,setlistDataSource] = useState(CONTENT);
    const updateLayout = (index)=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        array[index]['isExpanded'] = !array[index]['isExpanded'];
        setlistDataSource(array)
    }

     return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor:'white'
        }}>
            
            <View style={styles.container}>
                <View style={styles.header}>
                <Image
                    source={require('../../assets/header.png')}
                    style={{
                        height:30,
                        width:150,
                    }}/>
                <TouchableOpacity
                    
                >
                <Image
                    source={require('../../assets/cross.png')}
                    style={{
                        height:25,
                        width:25,
                        alignSelf:'center',
                        marginLeft:200
                        
                    }}
                />
                </TouchableOpacity>
                </View>
                <ScrollView>
                    {
                        listDataSource.map((item,key)=>(
                            <ExpandableComponent
                                item={item}
                                key={item.cat_name}
                                onCLickFunction={()=>{
                                    updateLayout(key);
                                }}
                            />
                        ))
                    }
                    <View style={{margin:80}}>
                    <Button>
                        Download
                    </Button>
                    </View>
                </ScrollView>
            </View>

        
        
        
        </SafeAreaView>
        
    );
};


const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    header:{
        flexDirection: 'row',
        padding:10,
        alignSelf:'stretch',
    },
    item:{
        backgroundColor: 'white',
        padding: 20
    },
    itemText:{
        fontSize: 16,
        fontWeight: '500',
        color:'green'
    },
    content:{
        marginLeft:10,
        paddingHorizontal:10,
        backgroundColor: '#fff',
        flexDirection:'row'
    },
    text:{
        fontSize:16,
        padding:10,
        color:'black'
    },
    value:{
        fontSize:12,
        color:'grey'
    },
    separator:{
        height:0.5,
        backgroundColor:'#c8c8c8',
        width:'100%',
    },
});


export default Sidebar;