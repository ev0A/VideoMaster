function getVideo(document,documentStr){
    
    if (document.getElementsByTagName('video').length === 0) return false
    var len = document.getElementsByTagName('video').length
    for(var i=0;i<len;i++){
        console.log(`${documentStr}.getElementsByTagName('video')[${i}].playbackRate=15`)
        console.log(`${documentStr}.getElementsByTagName('video')[${i}].currentTime =600`)
    }
}

function getAllIframe(document,documentStr){
    evoAList = []
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
