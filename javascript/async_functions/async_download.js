function downloadFile(url, downloaded) {
    console.log(`Downloading file from ${url}`)
    setTimeout(function() {
        let filePath = "c:\\Downloads\\" + url.split("/").pop()
        console.log(`File was downloaded to - ${filePath}`)
        downloaded(filePath)
    },3000);   
}

function resizeFile(filePath, resized) {
    // resizing file with 2 second delay;
    console.log(`Resizing file - ${filePath}`)
    setTimeout(function(){
        let newPath = filePath.split(".")[0] + "-resized."  +filePath.split(".")[1];
        resized(newPath)
    },3000)
}

function uploadFile(diskPath,uploaded) {
    //fake upload will take 3 seconds;
    console.log(`Uploading file - ${diskPath}`)
    setTimeout(function(){
        let uploadedPath = "https://uploadhere.com/uploads" + diskPath.split("\\").pop();
        console.log(`Uploaded to ${uploadedPath}`)
        uploaded(uploadedPath)
    },3000)
}


// sample urls
downloadFile("https://google.com/logo.png",function(downloadedPath) {
    console.log(`We got the file at - ${downloadedPath}`)
    resizeFile(downloadedPath,function(resizedPath) {
        console.log(`Resized file is at : ${resizedPath}`)
        uploadFile(resizedPath,function(uploadedURL){
            console.log(`File successfully uploaded at ${uploadedURL}`)
        })
    })

})

