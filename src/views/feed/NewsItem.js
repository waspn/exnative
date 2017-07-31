import React, {Component} from 'react'
import { Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, Alert, Modal, Dimensions } from 'react-native'
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
        this.handleChange = this.handleChange.bind(this)
        this.toggleEditFeed = this.toggleEditFeed.bind(this)
        this.editFeed = this.editFeed.bind(this)
        this.deleteFeed = this.deleteFeed.bind(this)
    }
    
    
    toggleEditFeed()  {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange = (propertyName, e) => {
        const {modified} = this.state
        modified[propertyName] = e.target.value
        
        this.setState({
            modified: modified
        })
    }

    editFeed() {
        let {edit} = this.props
        edit(this.state.modified)
        this.setState({
            isEditing: false
        })
    }

    deleteFeed() {
        let {remove,content} = this.props
        remove(content.newsid)
    }
    

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible
        })
    }

    actionSheet(id) {
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
    }

    activatePopupMenu(content) {
        // Alert.alert(
        //     'MENU',
        //     [
        //         {text: 'Edit', onPress: () => alert(options[buttonIndex])},
        //         {text: 'Cancel' , style: 'cancel'},
        //         {text: 'Delete', onPress: this.deleteFeed(id)}
        //     ]
        // )
       Alert.alert(
            '',
            content.topic,
            [
                {text: 'Edit', onPress: () => alert('Ask me later pressed')},
                {text: 'Cancel', style: 'cancel'},
                {text: 'Delete', onPress: () => this.deleteFeed(content.id)},
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

                {/* <Modal 
                    animationType={'slide'} 
                    transparent={false} 
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={styles.modal}>
                    <NewsDetail detail={content} />
                    <Button 
                        onPress={() => {this.setModalVisible(!this.state.modalVisible)}} 
                        title="Hide Modal" 
                    />
                    </View>
                </Modal> */}


                {/*
                    <View className='well col-xs-12 space'>
                    {
                        this.state.isEditing ? 
                        <View className='col-xs-9'>
                            <input className='form-control' onChange={this.handleChange.bind(this,'topic')} defaultValue={content.topic} type='text' />
                            <textarea className='form-control' onChange={this.handleChange.bind(this,'description')} defaultValue={content.description} type='text' rows='4'></textarea>
                        </View>
                        :
                        <View className='col-xs-9'>
                            <h4>{content.topic}</h4>
                            <p>{content.description}</p>
                        </View>
                    }
                        <View className='thumbnail col-xs-3'>
                            <img src={imgurl} alt='sample' width='100%' height='100%' />
                        </View>
                    {
                        this.state.isEditing ?
                        <View className='col-xs-3'>
                            <button onClick={this.toggleEditFeed} className='btn btn-default'><span className='glyphicon glyphicon-repeat'></span></button>
                            <button onClick={this.editFeed} className='btn btn-success'><span className='glyphicon glyphicon-ok'></span></button>
                        </View>
                        :
                        <View className='col-xs-3'>
                            <button onClick={this.toggleEditFeed} className='btn btn-warning'><span className='glyphicon glyphicon-wrench'></span></button>
                            <button onClick={this.deleteFeed} className='btn btn-danger'><span className='glyphicon glyphicon-remove'></span></button>
                        </View>
                    }
                    </View>
                    */}

            </View>   
            
        )
    }
}

export default NewsList