import React, {Component} from 'react'
import { Text, View, Button, TouchableOpacity, TouchableHighlight, Alert, Modal, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { styles } from '../../style'
import NewsDetail from './NewsDetail'

//const imgurl = 'https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067'

class NewsList extends Component {
    
    constructor(props) {
        super(props)
        let {content} = this.props
        this.state = {
            modalVisible: false,
            isEditing: false,
            modified: {
                newsid: content.newsid,
                topic: '',
                description: ''
            }
        }
        this.deleteFeed = this.deleteFeed.bind(this)
    }
    

    handleChange = (propertyName, e) => {
        const {modified} = this.state
        modified[propertyName] = e.target.value
        
        this.setState({
            modified: modified
        })
    }

    deleteFeed() {
        let {remove,content} = this.props
        remove(content.newsid)
    }
    

    /*actionSheet(id) {
        const options = ['Edit', 'Delete', 'Cancel']
        ActionSheetIOS.showActionSheetWithOptions({
            options,
            cancelButtonIndex: 2
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 0 : 
                    return alert(options[buttonIndex])
                    case 1 : 
                    return this.deleteFeed(id)
                }
            }
        )
    }*/

    activatePopupMenu(content) {
       Alert.alert(
            '',
            content.topic,
            [
                {text: 'Delete', onPress: () => this.deleteFeed()},
                {text: 'Edit', onPress: () => Actions.newsedit({content:content})},
                {text: 'Cancel', style: 'cancel'}
            ]
        )
    }

    render() {
        let {height, width} = Dimensions.get('window')
        let {content} = this.props
        console.log(content)
        return(
            <View style={{flex:1, backgroundColor:'wheat',margin:5, width,alignItems:'flex-start'}}>
                <TouchableOpacity style={styles.modal}
                    onPress={() => alert(`ID: ${content.newsid}  \n${content.topic}`)} 
                    onLongPress={()=>{this.activatePopupMenu(content)}}
                >
                    <View style={styles.button}>
                        <Text style={styles.topic}> 
                            {content.topic}
                        </Text>
                        <Text style={styles.description}> 
                            {content.description}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>   
            
        )
    }
}

export default NewsList