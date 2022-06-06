import React,{useState,useEffect} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
    Image ,
    SafeAreaView,
    ScrollView
} from 'react-native';
import Button1 from './components/Button1';
import Card from './components/Card';
import Card2 from './components/Card2';


const HomeScreen = ({navigation}) => {


     return (
        <SafeAreaView style={styles.parent}>
                <View style={{
                    flexDirection:'row',
                    alignSelf:'stretch',
                    backgroundColor:'white',
                    elevation:16,
                    padding:8
                    }}>
                <Image
                    source={require('../../assets/header.png')}
                    style={styles.headImg}/>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Sidebar')}
                    >
                <Image
                    source={require('../../assets/menu.png')}
                    style={{
                        height:30,
                        width:25,
                        marginLeft:200
                        
                        
                    }}/>
            </TouchableOpacity>
            </View>
            
            {/* <View style={{
                    width:'100%',
                    height:1,
                    backgroundColor:'black',
                    marginTop:8
                    }}/> */}

            <ScrollView>
                <Text style={styles.head}>Tame your work, organize your life</Text>
                <Text style={styles.subhead}>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</Text>
                <Button1> Sign up for free</Button1>
                <Text style={styles.underlinde}>Already have an account? Log in</Text>
                <Image
                    source={require('../../assets/img1.png')}
                    style={styles.contentimg}/>
                <View>


                </View>

                <Text style={styles.head}>Find your productivity happy place</Text>
                <Text style={styles.subhead}>See what’s possible with Evernote</Text>
                <Image
                    source={require('../../assets/img1.png')}
                    style={styles.contentimg}/>
                <View>

                </View>
                <Image
                    source={require('../../assets/img2.png')}
                    style={styles.contentimg}/>
                <Text style={styles.head2}>Hit every deadline</Text>
                <Text style={styles.subhead2}>Create and assign tasks inside your notes with due dates, flags, and reminders so nothing falls through the cracks.</Text>
                <Text style={styles.link}>LEARN MORE</Text>
                <Image
                    source={require('../../assets/img3.png')}
                    style={styles.contentimg}/>

                <Text style={styles.head2}>Go paperless</Text>
                <Text style={styles.subhead2}>Scan important documents and keep them handy on all your devices. Save the information—not the clutter.</Text>
                <Text style={styles.link}>LEARN MORE</Text>
                <Image
                    source={require('../../assets/img4.png')}
                    style={styles.contentimg}/>
                <Text style={styles.head2}>Clip the web</Text>
                <Text style={styles.subhead2}>Save web pages (without the ads) and mark them up with arrows, highlights, and text to make them more useful.</Text>
                <Text style={styles.link}>LEARN MORE</Text>
                <Image
                    source={require('../../assets/img5.png')}
                    style={styles.contentimg}/>
                <Text style={styles.head2}>Connect your Google Calendar</Text>
                <Text style={styles.subhead2}>Make your schedule work for you. Your meetings and notes have context so nothing gets lost in the shuffle.</Text>
                <Text style={styles.link}>LEARN MORE</Text>

                <Text style={styles.head}>Find your Evernote</Text>
                <Text style={styles.subhead}>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</Text>
                
                <Card
                    title='Free'
                    amount='₹ 0'
                    subtitle='Capture ideas and find them quickly'
                    btn='Get Started'
                    />
                 <Card
                    title='Personal'
                    amount='₹ 249.00 / month'
                    subtitle='Keep home and family on track'
                    btn='Choose Personal'
                    />
                 <Card
                    title='Professional'
                    amount='₹ 319.00 / month'
                    subtitle='Tackle any project, at work or at home'
                    btn='Choose Professional'
                    />
                <Card2
                    title='EVERNOTE TEAMS'
                    amount=''
                    subtitle='Collaborate and share knowledge to keep your team on the same page.'
                    btn='Sign Up'
                    />
                <Image
                    source={require('../../assets/header.png')}
                    style={styles.bottom}/>
                <View style={{
                    width:'100%',
                    height:1,
                    backgroundColor:'black',
                    marginTop:50,
                    }}/>
                <Text style={styles.footertytle}>Product</Text>
                <Text style={styles.footersubtytle}>Why evernote</Text>
                <Text style={styles.footersubtytle}>Evernote Free</Text>
                <Text style={styles.footersubtytle}>Evernote Personal</Text>
                <Text style={styles.footersubtytle}>Evernote Professional</Text>
                <Text style={styles.footersubtytle}>Evernote Teams</Text>
                <Text style={styles.footersubtytle}>Compare Plans</Text>
                <Text style={styles.footersubtytle}>Student Discount</Text>
                <Text style={styles.footersubtytle}>Download App</Text>

                <Text style={styles.footertytle}>Product</Text>
                <Text style={styles.footersubtytle}>Why evernote</Text>
                <Text style={styles.footersubtytle}>Evernote Free</Text>
                <Text style={styles.footersubtytle}>Evernote Personal</Text>
                <Text style={styles.footersubtytle}>Evernote Professional</Text>
                <Text style={styles.footersubtytle}>Evernote Teams</Text>
                <Text style={styles.footersubtytle}>Compare Plans</Text>
                <Text style={styles.footersubtytle}>Student Discount</Text>
                <Text style={styles.footersubtytle}>Download App</Text>

                <Text style={styles.footertytle}>Product</Text>
                <Text style={styles.footersubtytle}>Why evernote</Text>
                <Text style={styles.footersubtytle}>Evernote Free</Text>
                <Text style={styles.footersubtytle}>Evernote Personal</Text>
                <Text style={styles.footersubtytle}>Evernote Professional</Text>
                <Text style={styles.footersubtytle}>Evernote Teams</Text>
                <Text style={styles.footersubtytle}>Compare Plans</Text>
                <Text style={styles.footersubtytle}>Student Discount</Text>
                <Text style={styles.footersubtytle}>Download App</Text>

                <View style={{
                    width:'100%',
                    height:1,
                    backgroundColor:'black',
                    marginTop:50,
                    }}/>

                <View
                style={{
                    flexDirection:'row',
                    alignSelf:'stretch',
                    justifyContent:'space-around',
                    marginTop:40
                }}
                >
                    <Text style={styles.bottomt}>Choose a language:</Text>
                    <Text style={styles.bottomt}>English</Text>
                </View>

                <View style={{
                    width:'100%',
                    height:1,
                    backgroundColor:'black',
                    marginTop:40,
                    }}/>

                <Image
                    source={require('../../assets/img6.png')}
                    style={{
                        marginTop:100,
                        width:'100%',
                        height:300
                    }}/>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    bottomt:{
        color:'green',
    },
    footertytle:{
        color:'black',
        marginTop:52,
        fontWeight:'500',
        fontSize:16,
        marginHorizontal:16
    },
    footersubtytle:{
        marginTop:32,
        fontSize:16,
        color:'grey',
        marginHorizontal:16
    },
    headImg:{
        height:30,
        width:150,
    },
    bottom:{
        height:30,
        width:150,
        marginTop:50,
        marginHorizontal:16
    },
    parent:{
        backgroundColor:'white',
        marginBottom:32
    },
    head:{
        alignSelf:'center',
        color:'black',
        fontSize: 32,
        marginTop:48,
        fontWeight:'bold',
        textAlign:'center',
        marginHorizontal:32
    },
    subhead:{
        alignSelf:'center',
        color:'black',
        fontSize: 20,
        marginTop:8,
        textAlign:'center',
        marginHorizontal:32
    },
    underlinde:{
        textDecorationLine: 'underline',
        alignSelf:'center',
        color:'black',
        fontSize: 18,
        marginTop:8
    },
    contentimg:{
        marginHorizontal:16,
        height:300,
        width:'100%',
        marginTop:20
    },
    head2:{
        alignSelf:'flex-start',
        color:'black',
        textAlign:'left',
        fontSize: 28,
        marginTop:48,
        fontWeight:'bold',
        marginHorizontal:16
    },
    subhead2:{
        alignSelf:'flex-start',
        color:'black',
        fontSize: 20,
        marginTop:8,
        marginHorizontal:16
    },
    link:{
        alignSelf:'flex-start',
        color:'green',
        fontSize: 16,
        marginTop:16,
        marginBottom:32,
        marginHorizontal:16
    }
});


export default HomeScreen;