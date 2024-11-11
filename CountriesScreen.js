import React from 'react';
import { Text, View, FlatList, StyleSheet} from 'react-native';
import data from './data/countries.json'

class CountriesScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            countries:[]
        }
    }
    componentDidMount(){
        this.setState({
            countries: data
        })
    }


    render(){
        return(
        <View>
            <Text style={StyleSheet.screenTitle}>Countries Screen</Text>
            <FlatList data={this.state.countries}
                      keyExtractor={countries => countries.id}
                      renderItem={({item}) => (
                        <View style={styles.cardWrapper}>
                            <Text>City name: {item.name}</Text>
                            <Text>Country name: {item.country}</Text>
                            <Text>Ciyt description: {item.description}</Text>
                        </View>
                      )}
            ></FlatList>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
});

export default CountriesScreen;