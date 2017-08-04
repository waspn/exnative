jest.mock('react-native', () => {
  const { View } = require.requireActual('react-native')
  return { 
    View: 'View', 
    Text: 'Text', 
    Button: View,
    TextInput: 'TextInput',
    StyleSheet: {
      create: jest.fn(({}) => {
        return {

        }
      }) 
    }
  }
})

//const { View, Text, Button, TextInput, StyleSheet } = require.requireActual('react-native')
//export const View = require.requireActual('react-native')
