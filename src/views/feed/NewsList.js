import React, {Component} from 'react'
import { View, ListView } from 'react-native'
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

    renderRow(rowData, sectionID, rowID) {
        let {onRemove} = this.props
        return(
            <NewsItem key={rowID} remove={onRemove} content={rowData} />
        )
    }

    render() {
        let {items} = this.props
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        const dataSource = ds.cloneWithRows(items.data)

        return(
            <View>
                {/* <NewsItem /> */}
                <ListView
                    dataSource={dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
                    
            </View>
        )
    }
}

export default NewsList