const runScript = () => {
    const holder = document.querySelector('div[style="padding-bottom: 177.778%;"]')
    
    if (!holder) {
        console.log('could not find video holder')
    return
    }

    try{
        const video = holder.querySelector('video')
        const nextSib = video.nextSibling

        nextSib.remove()
        video.controls = true

    }catch(e){
        console.log('error from extension', e)
    }
}

runScript()
