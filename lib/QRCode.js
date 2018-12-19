'use strict';

import React from 'react';

import {
    View,
    WebView,
    Platform,
    Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

function getPX(size){
    return 750 / deviceWidth * size
}
export default class extends React.Component {
    static defaultProps = {
        value: "",
        size: 100,
        bgColor: "#fff",
        fgColor: "#000",
        engine: "http://img.daling.com/st/topic/qrcode.min.js",
        onLoad: () => { },
        onLoadEnd: () => { },
    }
    html() {
        return `<!DOCTYPE html><html lang="en"><head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>qrcode</title>
        <style>* { margin: 0; padding: 0 } img,svg { width: 100%; }</style></head>
      <body> <div id="qrcode"></div><script src="${this.props.engine}"></script>
        <script>
          new QRCode(document.getElementById('qrcode'), {
            text: '${this.props.value}',
            width: ${getPX(this.props.size)},
            height: ${getPX(this.props.size)},
            colorDark: '${this.props.fgColor}',
            colorLight: '${this.props.bgColor}',
            correctLevel: QRCode.CorrectLevel.M
          });</script>
      </body></html>`
    }
    render() {
        const { size } = this.props;
        return <View style={{ height: size, width: size }}>
            <WebView
                automaticallyAdjustContentInsets={false}
                scalesPageToFit={Platform.OS === 'android'}
                contentInset={{ top: 0, right: 0, bottom: 0, left: 0 }}
                source={{ html: this.html() }}
                opaque={false}
                underlayColor={'transparent'}
                style={{ height: size, width: size }}
                javaScriptEnabled={true}
                scrollEnabled={false}
                onLoad={this.props.onLoad}
                onLoadEnd={this.props.onLoadEnd}
                originWhitelist={['*']}
            />
        </View>
    }
}