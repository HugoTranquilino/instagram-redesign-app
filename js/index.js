const BASE_API = 'https://graph.instagram.com/me';
const ACCESS_TOKEN = 'IGQVJVcF9nbHludy1FX3ZAMVk9qYlFLVkNyNFZAmQWdjbGwxeVJGSmZAkd1k0eXk4V255RzFPWXEwV0c3UlF1bjdSU0JRcklPMzFfTVhFX3NFU0V0ZAml6d0gzMWhXUzY2OFJTWUowQ29kY3FJRDU5ZAGgzX3FuZAkZANV29Hbzk4';

const username = document.getElementById('username')
const posts = document.getElementById('posts')
const photos = document.getElementById('photos')


async function getUserInfo(){
    const response = await fetch(`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`)
    const userInfo = await response.json()   
    console.log(userInfo) 
    username.innerHTML = userInfo.username
    posts.innerHTML = userInfo.media_count

    return userInfo
}

getUserInfo()

async function getUserMediaInfo(){
    const response = await fetch(`${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`)
    const userMediaInfo = await response.json()    
    console.log(userMediaInfo)
    return userMediaInfo
}

getUserMediaInfo().then(media => {
    media.data.map((mediaInfo) => {
        const img = document.createElement('img')
        img.style.width = '100px'
        img.src = mediaInfo.media_url
        photos.appendChild(img)
    })
})
