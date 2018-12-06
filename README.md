# react-native-qrcode-snapshot
react-native中产生二维码和保存快照到相册中

## QRCode 

`./lib/QRCode`

通过使用qrcode.js的方式在webview中产生合适的二维码图片。

使用示例
```javascript
import { QRCode } from "react-native-qrcode-snapshot"

<QRCode value="二维码内容" size={100} />

```

参数：
```javascript
    const props={
        value: "",  //二维码要显示的内容
        size: 100,  //二维码组件要展示的大小
        bgColor: "#fff",    //背景色
        fgColor: "#000",    //前景色，像素块的颜色
        engine: "http://img.daling.com/st/topic/qrcode.min.js", //产生二维码使用的引擎地址，可以替换成自己的地址
        onLoad: () => { },  //浏览器加载回调
        onLoadEnd: () => { },   //浏览器加载回调
    }
```

## Snapshot

通过使用快照的方式产生组件的图片，并保存在手机的相册中。

使用示例
```javascript
import {Snapshot} from "react-native-qrcode-snapshot"

<Snapshot ref="snapshot" style={{width:100}}>
    {/*自定义内容*/}
    <View>
        <Text>显示自定义内容</Text>
    </View>
</Snapshot>

//点击按钮等触发
onclick(){
    this.refs.snapshot.takeSnapshot();
}
```

参数：
```javascript
snapshot.takeSnapshot({
    format: 'png', //后缀，支持主流图片后缀
    quality: 1  //质量，0-1
});

```