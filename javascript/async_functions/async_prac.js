

function downloadFile(url,downloaded){
    console.log(`Downloading file from ${url}`)
    let splitArr = url.split("/")
    let file = splitArr[splitArr.length-1]
    let filePath = "c:\\Downloads\\files\\" + file
    console.log(`File fetched from ${url} is ${file}`)
    setTimeout(()=>{
        console.log(`File downloaded at ${filePath}`)    
        downloaded(filePath)
    },3000)
    
}

function resizeFile(filePath, resized) {
    let splitArr = filePath.split("\\")
    let fileName = splitArr[splitArr.length-1]
    let fileExt = fileName.split(".")[1]
    console.log(`Resizing ${fileName}`)
    splitArr.pop();

    let currPath = ""
    for(let i=0;i<splitArr.length;++i){
        currPath+=splitArr[i] + '\\'
    }

    let resizedPath = currPath + "\\resized-"+fileName;
    setTimeout(()=>{
        console.log(`File resized at path ${resizedPath}`)
        resized(resizedPath)

    },3000)

    
}

function uploadFile(uploadUrl, resizedPath,done) {
    console.log(`File fetched from path ${resizedPath}`)
    let splitArr = resizedPath.split("\\")
    let fileName = splitArr[splitArr.length-1]
    
    uploadUrl+="fileName"
    console.log(`Uploading at ${uploadUrl}`)

    setTimeout(()=>{
        console.log(`File successfully uploaded at ${uploadUrl}`)
        done()
    },3000)
}

let url = "https://www.samplesite.com/files/photos/logo.png"

let uploadUrl = "https://www.samplesite.com/uploads/files/"

downloadFile(url,function(filePath){
    resizeFile(filePath,function(resizedPath){
        uploadFile(uploadUrl,resizedPath,function() {
            console.log(`Task done`)
        })
    })
})