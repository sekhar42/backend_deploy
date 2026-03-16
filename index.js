require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port

let user = {
login: "sumanshekhar",
id: 12826015,
node_id: "MDQ6VXNlcjEyODI2MDE1",
avatar_url: "https://avatars.githubusercontent.com/u/12826015?v=4",
gravatar_id: "",
url: "https://api.github.com/users/sumanshekhar",
html_url: "https://github.com/sumanshekhar",
followers_url: "https://api.github.com/users/sumanshekhar/followers",
following_url: "https://api.github.com/users/sumanshekhar/following{/other_user}",
gists_url: "https://api.github.com/users/sumanshekhar/gists{/gist_id}",
starred_url: "https://api.github.com/users/sumanshekhar/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/sumanshekhar/subscriptions",
organizations_url: "https://api.github.com/users/sumanshekhar/orgs",
repos_url: "https://api.github.com/users/sumanshekhar/repos",
events_url: "https://api.github.com/users/sumanshekhar/events{/privacy}",
received_events_url: "https://api.github.com/users/sumanshekhar/received_events",
type: "User",
user_view_type: "public",
site_admin: false,
name: null,
company: null,
blog: "",
location: null,
email: null,
hireable: null,
bio: null,
twitter_username: null,
public_repos: 0,
public_gists: 0,
followers: 0,
following: 0,
created_at: "2015-06-10T07:28:23Z",
updated_at: "2018-09-09T15:29:24Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res)=>{
  res.send(user)
})

app.get('/suman',(req,res)=>{
  res.send("suman.....")
})
app.get('/insta',(req,res)=>{
    res.send("welcome to my insta :_suman_sekhar")
})
app.get('/heading',(req,res)=>{
    res.send('<h1>This is Heading</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(process.env.port)