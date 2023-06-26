import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import WebView from "react-native-webview";

const WebContent = (props) => {
    const url = props.route.params.link;
    return (
        <SafeAreaView style={{flex: 1}}>
            <WebView style={styles.content} source={{uri: url}} mediaPlaybackRequiresUserAction={true} allowsInlineMediaPlayback={true}/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    content: {
        top:0
    }
})

export default WebContent;