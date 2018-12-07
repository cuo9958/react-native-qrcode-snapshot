'use strict';

import React from 'react';

import RN, {
    View,
    CameraRoll
} from 'react-native';

export default class extends React.PureComponent {

    render() {
        return <View ref="vi" style={this.props.style} onLayout={this.layout.bind(this)}>
            {this.props.children}
        </View>
    }
    async takeSnapshot(opts = {}) {
        const img = await RN.takeSnapshot(this.refs.vi, opts);
        return CameraRoll.saveToCameraRoll(img, "photo");
    }
    setNativeProps(obj) {
        if (this.refs.vi) this.refs.vi.setNativeProps(obj);
    }
    layout(e){
        if (this.props.onLayout) this.props.onLayout(e);
    }
}