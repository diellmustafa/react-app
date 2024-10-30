import React from "react";
import { View, Text, Stylesheet } from 'react-native';
import { Button } from "react-native-web";


const MenuScreen = (props) => {


    
    return(
        <View>
            <Text style={styles.text}>Welcome to Menu Screen!!</Text>
            <Button title="Go to List Screen" 
                    onPress={()=> props.navigation.navigate('List')}
            ></Button>
            <ToucbableOpacity style={styles.btn} onPress={()=> props.navigation.navigate('Box')}>
                <Text style={styles.btnText}>Go to Box Screen</Text>
            </ToucbableOpacity>


            
        </View>
    );
};



const styles = Stylesheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
})


export default MenuScreen;