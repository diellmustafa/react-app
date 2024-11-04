import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


class PostScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.setState({posts: jsonData});
    }




    render(){
        const {posts} = this.state;
        return(
            <View>
                <Text>Posts</Text>
                <Flatlist keyExtractor={posts => post.id}
                    data={posts} renderItem={({item}) => {
                        <View>
                            <Text>{item.id}</Text>
                            <Text>{item.title}</Text>
                        </View>
                    }}
                    ></Flatlist>
            </View>
        )
    }
}

const styles = StyleSheet.create({});

export default PostScreen;