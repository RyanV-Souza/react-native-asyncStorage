import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { AsyncStorage, Text, View, TextInput, StyleSheet} from 'react-native'

class MobileII  extends Component {
    state = {
        'name': ''
    }

    componente = () => AsyncStorage.getItem('name').then((value) => this.setState({'name': value}))

    setName = (value) => {
        AsyncStorage.setItem('name', value)
        this.setState({'name': value})
    }

    render () {
        return (
            <View style = {styles.container}> 
                <Text style = {styles.chamada}> Insira aqui seu nome. </Text>
                <TextInput style = {styles.textInput} autoCapitalize = 'none' onChangeText = {this.setName} /> 
                <Text style = {styles.textShadow}>
                    {
                        this.state.name
                    }
                </Text>

            </View>
        )
    }
}

export default MobileII

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40
    },

    textInput: {
        height: 50,
        width: '90%',
        padding: 15,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 15,
        margin: 15,
    },

    chamada: {
        fontSize: 23,
        alignItems: 'center'
    },

    textShadow: {
           textAlign: 'center',
           fontSize: 30,
           textShadowColor: '#65a7f7',
           textShadowOffset: { width: 1, height: 4 },
           textShadowRadius: 6
    }

})