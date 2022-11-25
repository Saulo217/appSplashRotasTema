import { View, Image, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export function Home() {
    const items = [
        { title: 'Shinobi', img: 'https://i.pinimg.com/originals/b3/e6/c4/b3e6c4e162d5529f2ac47714b76073b5.gif' },
        { title: 'Laundry', img: 'https://www.jbchost.com.br/madeinjapan/wp-content/uploads/2015/09/pixelart_tumblr_1041uuu_laundry.gif' },
        { title: 'Girl', img: 'https://cdn.mos.cms.futurecdn.net/c9EFa7HUU2EoqtFHV7f8A9.gif' },
        { title: 'Mario Lofi', img: 'https://www.themasterpicks.com/wp-content/uploads/2020/04/22b22287602523.5dbd29081561d.gif' },
        { title: 'Mage', img: 'https://gd-hbimg.huaban.com/56f0af9d332d10b8070c06185b62801581d8bbb11491f-SuCpvZ' },

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
        <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center', padding: 50, backgroundColor: '#04a6cf'}}>
            <Text style={{ alignSelf: 'center', fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline'}}>Pixel Art</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '', marginTop: 20}}>
                O pixel art, ou arte pixel,
                é uma forma de arte digital na qual as imagens são criadas 
                ou editadas tendo como elemento básico os pixels.
            </Text>
            <Text style={{ backgroundColor: '#F05740', fontWeight: 'bold', marginTop: 15 }}> Nota: Pixel é a menor unidade em um tela </Text>
            <Image source={{ uri: 'https://w7.pngwing.com/pngs/5/1014/png-transparent-undertale-pixel-art-minecraft-pixel-text-art-game-art.png' }}/>
            <Carousel
               layout={'tinder'}
               layoutCardOffset={10}
               data={items}
               sliderWidth={300}
               itemWidth={300}
               renderItem={render}
               style={{ paddingBottom: 0 }} 
            ></Carousel>
        </View>
    );
}

const stl = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    carouselItemContainer: {
        backgroundColor: '#FF6529',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#000', 
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