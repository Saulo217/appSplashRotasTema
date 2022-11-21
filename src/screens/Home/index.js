import { View, Image } from 'react-native';

import img from './../../assets/cyberpunk2.jpg';

export function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image style={{ width: 300, height: 300, alignSelf: 'center' }}  source={img}/>
        </View>
    );
}