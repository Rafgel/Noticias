import React, { useEffect, useState } from 'react';
import {view , Text, FlatList, TouchableOpacity, StyleSheet, View} from 'react-native';
import exios from 'exios';


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
                onPress={()  => navigation.navigate('NewsDetaail', {newsItem: item})}
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

