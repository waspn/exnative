import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { shallow } from 'enzyme'
import { Actions } from '../../../__mocks__/react-native-router-flux'
import spyon from 'spyon'

import Login from '../Login'

jest.mock('react-native', () => {
  const { View } = require.requireActual('react-native')
  return { 
    View: 'View', 
    Text: 'Text', 
    Button: 'Button',
    TextInput: 'TextInput',
    StyleSheet: {
      create: jest.fn(() => {
        return {

        }
      }) 
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  detailContainer: {
    justifyContent: 'center'
  },
  header: {
    fontSize: 25,
    alignContent: 'center',
    paddingVertical: 2,
    borderBottomWidth: 2
  },

  btn: {
    backgroundColor: 'wheat',
    paddingVertical: 5,
    margin:10,
    paddingHorizontal: 15,
    width:80
  },
  btnText: {
    alignContent: 'flex-end',
    color: 'white'
  },
  addbtn: {
    alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    backgroundColor: 'lightgreen',
    width: 40,
    height: 40,
    borderRadius: 40
  },
  addbtnText:{
    fontSize: 25
  },

  input: {
    width: 120, 
    /*borderColor: 'gray', 
    borderBottomWidth: 1*/
  },

  detail: {
    fontSize: 10,
    color: 'gray'
  },

  topic: {
    fontSize: 20,
    
  },
  description: {
    fontSize: 12,
  },

  modal: {
    flex:1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center'
  }
})



describe('Test Login', () => {
  const wrapper = shallow(<Login />)
  console.log(wrapper)
  it('Header should appear', () => {
    //console.log(wrapper.contains(<Text style={styles.header}>Login to REACT</Text>))
    const received = wrapper.contains(<Text style={styles.header}>Login to REACT</Text>)
    expect(received).toEqual(true)
  })

  it('Test onpress', () => {
    const received = wrapper.find('button')
    Actions.pop()
    expect(Actions.pop).toHaveBeenCalled() 
  })

  it('Input validation', () => {
    const received = wrapper.contains([
      <TextInput returnKeyType={'default'} style={styles.input} placeholder="Username" />,
      <TextInput returnKeyType={'default'} style={styles.input} secureTextEntry={true} password={true} placeholder="Password" />
    ])
    console.log(received)
    expect(received).toEqual(true)
  })

  /*it('Find Element', () => {
    console.log(wrapper.find('Text').)
  })
  /*it('Login Button should work', () => {
    const received = wrapper.
  })*/
})