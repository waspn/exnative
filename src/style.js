import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    fontSize: 25,
    paddingVertical: 15,
    borderBottomWidth: 2
  },

  input: {
    width: 120, 
    borderColor: 'gray', 
    borderBottomWidth: 1
  },

  detail: {
    fontSize: 10,
    color: 'gray'
  },

  topic: {
    fontSize: 20,
  },
  description: {
    fontSize: 12
  },

  modal: {
    flex:1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center'
  }
})