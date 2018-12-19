'use strict';

import React from 'react';

import {
    View,
    WebView,
    Platform,
    Dimensions
} from 'react-native';

const dimen = Dimensions.get('window');
const deviceWidth = dimen.width;

export default class extends React.Component {
    static defaultProps = {
        value: "",
        size: 100,
        onLoad: () => { },
        onLoadEnd: () => { },
    }
    render() {
        const { size } = this.props;
        return <View style={{ height: size, width: size }}>
            <WebView ref="webview"
                automaticallyAdjustContentInsets={false}
                scalesPageToFit={Platform.OS === 'android'}
                contentInset={{ top: 0, right: 0, bottom: 0, left: 0 }}
                source={{ uri: "https://img.daling.com/st/dalingjia/app/react-native-qrcode-v1.html" }}
                opaque={false}
                underlayColor={'transparent'}
                style={{ height: size, width: size }}
                javaScriptEnabled={true}
                scrollEnabled={false}
                onLoad={this.loaded.bind(this)}
                onLoadEnd={this.props.onLoadEnd}
                originWhitelist={['*']}
            />
        </View>
    }

    loaded() {
        let size = this.props.size;
        size = 750 / deviceWidth * size;
        this.refs.webview.injectJavaScript(`render("${this.props.value}",${size})`);
        this.props.onLoad && this.props.onLoad();
    }
}