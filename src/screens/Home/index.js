import { View, Image, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export function Home() {
    const items = [
        { title: 'img', img: 'https://i.pinimg.com/originals/b3/e6/c4/b3e6c4e162d5529f2ac47714b76073b5.gif' }
    ];

    function render({ item }) {
        return (
            <View style={stl.carouselItemContainer}>
                <Text style={stl.carouselItemTitle}>{item.title}</Text>
                <Image style={stl.carouselItemImage} source={{ uri: `${item.img}`}}></Image>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Pixel Art</Text>
            <Carousel
               layout={'tinder'}
               layoutCardOffset={10}
               data={items}
               sliderWidth={300}
               itemWidth={600}
               renderItem={render}
               style={{ paddingBottom: 0}} 
            ></Carousel>
        </View>
    );
}

const stl = StyleSheet.create({
    carouselItemContainer: {
        backgroundColor: '#9e9e9d',
        borderRadius: 4,
        height: 300,
        padding: 10,
        marginTop: 20
    },
    carouselItemTitle: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#FFF'
    },
    carouselItemImage: {
        width: '100%',
        height: 200,
        borderRadius: 4
    }
});