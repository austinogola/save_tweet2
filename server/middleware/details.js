const fetch = require('node-fetch');

const token=`AAAAAAAAAAAAAAAAAAAAAHFEaAEAAAAAGjp9k2Bk1FEHdhDjby8asY85zYU%3Dpy32SMbLnB2YOw55aUl9ogRqGTqei1g5yni7fag4n0RQpmPO64`


const tweet=async (id)=>{
  const url=`https://api.twitter.com/2/tweets/${id}?tweet.fields=created_at,attachments,author_id,public_metrics`
  try {
    const response=await fetch(url,{
      method:'GET',
      headers:{
        "Authorization": `Bearer ${token}`
      }
    })
    const resp=await response.json()

    return resp.data;
  } catch (e) {
    console.log(e.message);
  }

}

const user=async (id)=>{
  const url= `https://api.twitter.com/2/users/${id}?user.fields=name,username,location,profile_image_url`
  try {
    const response=await fetch(url,{
      method:'GET',
      headers:{
        "Authorization": `Bearer ${token}`
      }
    })

    const resp=await response.json()
    return resp.data
  } catch (e) {
    console.log(e.message);
  }

}




module.exports = {tweet,user};
