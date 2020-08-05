import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, View, Button, FlatList, ActivityIndicator } from 'react-native'
import axios from 'axios'
import { CaloriesDetailItem } from '../pages/DETAILS/CaloriesDetailItem'

const CaloriesDetail = props => {
    const [detailList, setDetail] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let {data} = await axios.get(`https://draltaynihatacar.com/api/besinler.php?id=` + props.route.params.data,)
        setDetail(data)
        console.log(data.besin);
    }

    const renderItems = ({ item }) => {
        return (
            <CaloriesDetailItem propsData={item} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={detailList}
                        // renderItem={renderItems}
                        renderItem={renderItems}
                    />
            }
        </SafeAreaView>
    )
}

export { CaloriesDetail }


