# VideoMaster
一个快速生成 `修改当前页面视频速度代码` 的万能代码

一件扫描当前页面下所有video标签，自动生成修改video标签的javascript代码
如图

![1.png](https://i.loli.net/2020/03/05/bPC3R6JNTmsteDH.png)
playbackRate是倍速
currentTime是视频当前的时间（秒）
在浏览器控制台输入下列代码即可

```javascript
evoAList = []
function getVideo(document,documentStr){
	    
    if (document.getElementsByTagName('video').length === 0) return false
    var len = document.getElementsByTagName('video').length
    for(var i=0;i<len;i++){
                console.log(`${documentStr}.getElementsByTagName('video')[${i}].pause=function(){return false}`)
                console.log(`${documentStr}.getElementsByTagName('video')[${i}].playbackRate=15`)
                console.log(`${documentStr}.getElementsByTagName('video')[${i}].currentTime =600`)
            }
}

function getAllIframe(document,documentStr){
    
    if (document.getElementsByTagName('iframe').length === 0) return false
    var len = document.getElementsByTagName('iframe').length
    for(var i=0;i<len;i++){

        

        if(document.getElementsByTagName('iframe')[i].contentDocument === null) return false
        getAllIframe(document.getElementsByTagName('iframe')[i].contentDocument,`${documentStr}.getElementsByTagName('iframe')[${i}].contentDocument`)

        evoAList.push({document:document.getElementsByTagName('iframe')[i].contentDocument,documentStr:`${documentStr}.getElementsByTagName('iframe')[${i}].contentDocument`})
                

        }
    return evoAList
}

(async function(){
    getVideo(document,"document")
    evoAList = getAllIframe(document,"document")
    var docuStr
    var docu
    for(var i=0;i<evoAList.length;i++){
                docuStr = evoAList[i].documentStr
                docu = evoAList[i].document
                getVideo(docu,docuStr)
                
            }
    
})()

```
![image.png](https://i.loli.net/2020/04/30/aD3CUVlehw2X1IL.png)
三条代码分别是永不暂停，修改倍速，修改进度条（上帝之手）
