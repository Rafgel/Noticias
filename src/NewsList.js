import React, { useEffect, useState } from 'react';
import {View , Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';


const NewsList = ({ navigation }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, [] );


    const fetchNews = async () => {
        try {
            const responce = await axios.get('https://newsapi.org/v2/top-headlines', {
                params:{
                    country: 'us',
                    apiKey: 'f37ef7060f8c43b4b80eb6412f79fbe6'
                }
            });
            setNews(responce.data.article);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <View style={styles.container}>
            <FlatList
            data={news}
            renderItem={({ item }) => (
                <TouchableOpacity
                styles={styles.newsItem}
                key={item.id}
                onPress={()  => navigation.navigate('NewsDetail', {newsItem: item})}
                >
                    <Text styles={styles.title}>{item.title}</Text>
                    <Text styles={styles.description}>{item.description}</Text>

                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id?.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:16,
    },
    newsItem: {
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
    },
});

export default NewsList;