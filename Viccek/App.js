import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, Pressable, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [vicc, setVicc] = useState("")
  const [adatok, setAdatok] = useState([])
  const [szoveg, setSzoveg] = useState("")

  const tomb = [
    {
      "szoveg":"Three SQL Database Admins walked into a NoSQL bar. A little while later they walked out because they couldn’t find a table.",
      "tipus":"coding jokes"
    },
    {
      "szoveg":"Want a meowtini? Shaken, not purred, of course.",
      "tipus":"cat puns"
    },
    {
      "szoveg":"What has five toes and isn't your foot? My foot.",
      "tipus":"dad jokes"
    },
    {
      "szoveg":"C and C++ went to a five star bar, C was stopped by the gate guards because C got no class.",
      "tipus":"coding jokes"
    },
    {
      "szoveg":"There are only 10 kinds of people in this world: those who know binary and those who don’t.",
      "tipus":"coding jokes"
    }
  ]

  const sorsol = () =>
  {
    let veletlen = Math.floor(Math.random() * tomb.length)
    setVicc(tomb[veletlen].szoveg)
  }

  const letoltes = async() =>
  {
    let x = await fetch("https://api.chucknorris.io/jokes/random")
    let y = await x.json()
    setAdatok(y)
  }

  useEffect(()=>
  {
    sorsol()
    letoltes()
  }, [])

  function gombNyomas()
  {
    Alert.alert("Üdvözlet", "Helló " + szoveg + "!!!")
  }

  return (
    <ImageBackground source={require("./hatter.jpg")} style={styles.hatterkep}>
      <View style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
        <View style={[
          styles.container,
          {
            flex: 2,
            //backgroundColor: 'green',
          },
        ]}>
          <Text style={{
              fontSize:20,
              color: 'lightgreen',
              marginHorizontal: 20,
            }}>{vicc}

            </Text>

            <TouchableOpacity 
                title='Új vicc'
                onPress={()=>sorsol()}
                style={styles.gomb1}
              >
                <Text style={styles.gomb_szoveg}>Új vicc</Text>
            </TouchableOpacity>
        </View>


    

        <View style={[
          styles.container,
          {
            flex: 2,
            //backgroundColor: 'blue'
          },
        ]}>
          <Text style={[
            styles.kek,
            {
              marginHorizontal: 20,
            }
          ]
          }>{adatok.value}</Text>
      
          <TouchableOpacity 
                title='Új vicc'
                onPress={()=>letoltes()}
                style={styles.gomb2}
          >
            <Text style={styles.gomb_szoveg}>Új Chuck Norris vicc</Text>
          </TouchableOpacity>
        </View>

        <View style={[
          styles.container,
          {
            flex: 1,
          },
        ]}>
          <TextInput
            style={styles.input}
            onChangeText={setSzoveg}
            value={szoveg}
            placeholder='Neved...'
          />

          <TouchableOpacity 
            onPress={gombNyomas}
            style={styles.gomb3}
          >
            <Text style={styles.gomb_szoveg}>Helló</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 384
  },
  kek:
  {
    color: '#9ed7ff',
    fontSize: 20
  },
  gomb1:
  {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'lightgreen',
    marginTop: 20,
  },
  gomb2:
  {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#5ebdff',
    marginTop: 20,
  },
  gomb_szoveg:
  {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  hatterkep:
  {
    resizeMode: 'cover',
    justifyContent: 'center',
    flex: 1
  },
  input:{
    borderWidth: 1,
    height: 40,
    backgroundColor: 'white',
    margin: 12,
    padding: 10,
    width: 300,
    borderRadius: 4,
  },
  gomb3:
  {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#5ebdff',
    marginBottom: 20,
  },
});