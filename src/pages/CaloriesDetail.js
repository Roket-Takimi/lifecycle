import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, Button, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { CaloriesDetailItem } from '../pages/DETAILS/CaloriesDetailItem'

const CaloriesDetail = props => {
    const [commentList, setComments] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchComments()
    }, [])

    const fetchComments = async () => {
        let {data} = await axios.get(`https://draltaynihatacar.com/api/besinler.php?id=2`)
        setComments(data.besin)
        console.log(data.besin);
        setLoading(false)
    }

    const renderComment = ({ item }) => {
        console.log("deneme");
        return (
            <CaloriesDetailItem data={item} />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            {
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={commentList}
                        renderItem={renderComment}
                    />
            }
        </View>
    )
}

export { CaloriesDetail }