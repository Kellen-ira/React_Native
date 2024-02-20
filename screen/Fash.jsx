import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const Fashion = () => {
    const products=[
        {
            id:1,
            image:'https://www.realsimple.com/thmb/-aE0iPFyWB-SG_kYmTlcQ6PGndI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2024-fashion-trends-tout-3bf68866fe13472db2063ed322ae3ead.jpg',
            title:'White T-shirt',
            price: '$45',
        },
        {
            id:2,
            image:'https://m.economictimes.com/thumb/msid-97018652,width-1200,height-900,resizemode-4,imgsize-46746/mens-fashion.jpg',
            title:'Purple T-shirt',
            price: '$47',
        },
        {
            id:3,
            image:'https://www.istitutomarangoni.com/marangoni/entities/course/FS_MASTER.png',
            title:'White T-shirt',
            price: '$45',
        },
        {
            id:4,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlm8KpvJSBtfyK9abXo3xGIr4KaaPtrspCcA&usqp=CAU',
            title:'White T-shirt',
            price: '$45',
        }
    ];

    const renderFashion = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image}/>
            <View style={styles.heartContainer}>
                <View style={styles.heartBackground}>
                    <Icon name="heart-o" size={18} color="black" style={styles.heartIcon} />
                </View>
            </View>
            <View style={styles.overlay}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={products}
            renderItem={renderFashion}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    card: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        position: 'relative',
    },
    image: {
        height: 200,
        borderRadius: 10,
        justifyContent: 'flex-end',
    },
    overlay: {
        padding: 10,
        borderRadius: 10,
    },
    title: {
        color: 'gray',
        fontSize: 14,
    },
    price: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    heartContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    heartBackground: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    heartIcon: {
        color: 'black',
    },
});

export default Fashion;