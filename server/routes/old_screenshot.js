const router = require('express').Router();
const shot = require('../middleware/shot');
const puppeteer = require('puppeteer');
const fetch=require('node-fetch');
const details = require('../middleware/details');
const fs = require('fs');
const path = require('path');


router.post('/',async(req,res)=>{
    try {
      const {twtUrl}=req.body

      let relvHtml='';

      const name=String(twtUrl.split('/').slice(-1))
      console.log(name,typeof name);

      const tweet=await details.tweet(name)
      console.log(tweet);

      //Get embedding code
      try {
        fetch(`https://publish.twitter.com/oembed?url=${twtUrl}`,{
          method:'GET',
        }).then(async response=>{
          const resp=await response.json()
          relvHtml=await resp.html
          console.log('Html code retrived')

          fetch("http://localhost:5000/makeTweet",{
            method:"POST",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify({
              html:relvHtml,
              name:name
            })
          }).then(async response=>{
              const resp=await response.json()
              res.json(resp)
          })
        })
      }catch (e) {
        res.status(401).send(e.message)
      }
    } catch (e) {
      res.status(401).send(e.message)
    }
})

function encodeImageFileAsURL(file) {
  var reader = new FileReader();
  reader.onloadend = function() {
    console.log('RESULT', reader.result)
  }
  return reader.readAsDataURL(file);
}

router.post('/shot',async(req,res)=>{

  const {name}=req.body
  console.log(name);
  const browser=await puppeteer.launch({headless:true})
  const page=await browser.newPage()
  await page.goto(`http://localhost:5000/render/${name}`)
  const img=await page.screenshot({path:`${name}.png`})
  // console.log(encodeImageFileAsURL(img));
  await browser.close()
  const dts=fs.readFileSync(path.join(__dirname+'/1535547400881848320.png'),{encoding:'base64'})
  console.log('Screenshot taken');
  res.json({dts})
})


module.exports = router;
