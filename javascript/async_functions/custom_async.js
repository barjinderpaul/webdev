
function getUserLatestPost(username,postUrl){
    console.log(`Fetching latest post of username - ${username}`)
    setTimeout(function(){
        let latestPostUrl = "https://www.socialmedia.com/"+username+"/post=latest"
        console.log(`Fetched latest post url = ${latestPostUrl}`)
        postUrl(latestPostUrl);
    },3000)
}

function likePost(latestPostUrl, likedPost){
    console.log(`Going to like post on url ${latestPostUrl}`)
    setTimeout(function(){
        console.log(`Post liked on url ${latestPostUrl}`)
        likedPost()
    },2000)
}

function commentPost(latestPostUrl,comment,done){
    console.log(`Going to comment at post url ${latestPostUrl}`)
    setTimeout(function(){
        console.log(`Commented '${comment}' on post at ${latestPostUrl}`)
        done()
    },3000)
}

getUserLatestPost('random_guy',function(latestPostUrl){
    likePost(latestPostUrl,function(){
        commentPost(latestPostUrl,"Awesome Post",function(){
            console.log(`Task of like and comment done.`)
        })
    })
})