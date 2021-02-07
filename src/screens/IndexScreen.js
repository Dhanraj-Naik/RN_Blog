import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BlogContext from '../context/BlogContext';

const IndexScreen = ({
    params,
}) => {


    const { data, addBlogPost } = useContext(BlogContext);
    console.log('blogPosts: ', data);

    return (
        <View>

            <Button
                title={'Add Blog Post'}
                // onPress={() => {
                //     addBlogPost();
                // }}
                onPress={addBlogPost}
            />
            <FlatList
                data={data}
                keyExtractor={it => it.title}
                renderItem={({ index, item }) => {
                    console.log('renderItem', item);
                    return (<Text>{item.title}</Text>);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default IndexScreen;
