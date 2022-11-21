import { View, Text } from 'react-native';

export function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 30}}>Home</Text>
        </View>
    );
}