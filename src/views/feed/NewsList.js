import React, {Component} from 'react'
import { View } from 'react-native'
import { styles } from '../../style'

import NewsItem from './NewsItem'

class NewsList extends Component {
    /*
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            modified: {
                topic: '',
                description: ''
            }
        }
    }
    */
    render() {
        let {items, onEdit, onDelete} = this.props

        return(
            <View>
                {/* <NewsItem /> */}
                {items.map((newsfeed,i) => 
                    <Views key={i}>
                        <NewsItem content={newsfeed} edit={onEdit} remove={onDelete} />
                    </Views>
                    )
                }
            </View>
        )
    }
}

export default NewsList