const BASE_API = 'https://graph.instagram.com/me';
const ACCESS_TOKEN = 'IGQVJXejBtbF9xb2hHYXJVSm9rcWxzTzd4QjZAOUllhZAXdNcUw5V3R6SS1SNGNzdU5nSEF2NW16WC1WSDZA0ZA0RZAZAWJUX2NoNWpEYUlmRDJza29lak84Mkl1S05zel8zTndiUnM0SExvYm5OSW91dWh1a2szdGVwZAHVidUZAV';

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
