const puppeteer = require('puppeteer');
const express=require("express")
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const app=express()


app.use(cors())
app.use(express.json())

app.set('view engine','ejs')


// app.get('/',async(req,res)=>{
//   res.send("Homepage")
// })
app.post("/tweet",async(req,res)=>{
  const {html}=req.headers
  res.render("tweet",{code:html})

  const browser=await puppeteer.launch()
  const page=await browser.newPage()

  await page.goto('http://localhost:5000/tweet')

  await page.setViewport({width:600,height:500})
  await page.screenshot({path:'scrn.png'})
  req.img=img
  await browser.close()
  console.log('Image Created');
})

app.get('/download',async(req,res)=>{
  const file=__dirname+'/15355474008818483200.png'
  const filename=path.basename(file)

  res.setHeader('Content-disposition', 'attachment; filename=scrn.png');

  const filestream=fs.createReadStream(file)
  filestream.pipe(res)

  // res.download('/Coding/Proper/chrome/twt/server/scrn.png')
})

app.get('/show',async(req,res)=>{
  const response=await fetch("http://localhost:5000/download")
  const resp=await response
  fs.readFile(resp,(err,data)=>{
    if (err) {
      console.log(err);
    }else{
      console.log(data);
    }
  })
  res.send("Thanks")
})

app.use('/save_tweet',require('./routes/save_tweet'))
app.use('/screenshot',require('./routes/screenshot'))
app.use('/take_shot',require('./routes/take_shot'))
app.use('/makeTweet',require('./routes/makeTweet'))
app.use('/createTweet',require('./routes/createTweet'))
app.use('/render',require('./routes/render'))


app.listen(5000,()=>{
  console.log('Server runnign on port 5000');
})
