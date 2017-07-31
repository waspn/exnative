import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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