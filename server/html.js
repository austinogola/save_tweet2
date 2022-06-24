

const starterHtml=`<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Tweet page</title>
  </head>
  <body>`

const enclosingHtml=`</body>
</html>`



const templateStart=`<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Tweet page</title>
    <script src="https://unpkg.com/feather-icons"></script>
    <style media="screen">
      blockquote.twitter-tweet {
        display: inline-block;
        font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
        font-size: 12px;
        font-weight: bold;
        line-height: 16px;
        border-color: #eee #ddd #bbb;
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
        margin: 10px 5px;
        padding: 0 16px 16px 16px;
        max-width: 468px;
      }

      blockquote.twitter-tweet p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #0F1419;
      }

      blockquote.twitter-tweet a {
        color: #717F8A;
        font-weight: normal;
        text-decoration: none;
        outline: 0 none;
      }

      blockquote.twitter-tweet a:hover,blockquote.twitter-tweet a:focus {
        text-decoration: underline;
      }
      .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .profile{
        display: flex;
        margin-bottom: 16px;
      }
      #username{
        position: relative;
        top: 3px;
        font-size: 16px;
        line-height: 20px;
      }
      .mets{
        position: relative;
        bottom: 5px;
        border-bottom: 1px solid #CFD9DE;
        padding-bottom: 10px;
      }
      .mets a{
        color: #717F8A;
        font-weight: normal;
        font-size: 16px;
        text-decoration: none;
        outline: 0 none;
      }
      .stats{
        display: flex;
        justify-content: space-between;
        width: 50%;
      }
      .stats a{
        color: #717F8A;
        font-weight: normal;
        font-size: 16px;
        text-decoration: none;
        outline: 0 none;
        margin: 3px;
        margin-right: 2px;
      }
      i{
        position: relative;
        top: 10px;
      }
    </style>
  </head>
  <body>
    </div>
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">
      <div class="profile">`

  


module.exports = {starterHtml,enclosingHtml};
