import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    fontSize: 25,
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
    flex:2,
    alignContent: 'flex-end',
    color: 'white'
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
    fontSize: 12
  },

  modal: {
    flex:1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center'
  }
})