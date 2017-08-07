import React, {Component} from 'react'
import { Text, View, Button, TouchableOpacity, TouchableHighlight, Alert, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { styles } from '../../style'

//const imgurl = 'https://camo.mybb.com/e01de90be6012adc1b1701dba899491a9348ae79/687474703a2f2f7777772e6a71756572797363726970742e6e65742f696d616765732f53696d706c6573742d526573706f6e736976652d6a51756572792d496d6167652d4c69676874626f782d506c7567696e2d73696d706c652d6c69676874626f782e6a7067'

class NewsItem extends Component {
    
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
        this.actionNewsedit = this.actionNewsedit.bind(this)
    }
    
    deleteFeed() {
        let {remove,content} = this.props
        remove(content.newsid)
    }

    actionNewsedit(content) {
        Actions.newsedit({content:content})
    }

    activatePopupMenu(content) {
       Alert.alert(
            '',
            content.topic,
            [
                {text: 'Delete', onPress: this.deleteFeed()},
                {text: 'Edit', onPress: this.actionNewsedit(content) },
                {text: 'Cancel', style: 'cancel'}
            ]
        )
    }

    render() {
        let {content} = this.props
        //console.log(content)
        return(
            <View style={{flex:1, backgroundColor:'wheat',margin:5,alignItems:'flex-start'}}>
                <TouchableOpacity id="touchable" style={styles.modal}
                    //onPress={() => alert(`ID: ${content.newsid}  \n${content.topic}`)} 
                    onLongPress={()=>{this.activatePopupMenu(content)}} >
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

export default NewsItem