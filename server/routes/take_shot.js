const router = require('express').Router();
const details = require('../middleware/details');



router.post('/',async(req,res)=>{
    try {
      const {twtUrl}=req.body


      const tweetId=String(twtUrl.split('/').slice(-1))



      const tweet=await details.tweet(tweetId)

      const user=await details.user(tweet['author_id'])

      console.log(tweet);

      res.status(200).json({'tweet':tweet,'user':user})

    } catch (e) {
      res.status(401).send(e.message)
    }
})



module.exports = router;
