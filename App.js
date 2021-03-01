import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
export default class App extends React.Component {
    render() {
        return (
            
            <WebView
                source={{ uri: 'https://lawquiz.netlify.app/' }}
                style={{ marginTop: 50 }}
                javaScriptEnabled={true}
                allowUniversalAccessFromFileURL={true}
                allowFileAccess={true}
            />
            
        );
    }
}