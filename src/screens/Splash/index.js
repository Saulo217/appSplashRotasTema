import { View } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';

export function Splash({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <AnimatedLottieView
                style={{ flex: 1 }}
                source={require('../../assets/splash.json')}
                autoPlay={true}
                loop={false}
                onAnimationFinish={() => { navigation.navigate("Home"); }}
            >
            </AnimatedLottieView>
        </View>
    );
}