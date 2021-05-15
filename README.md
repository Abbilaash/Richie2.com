# 2021 Design specs
Rebuilding/rebranding personal website: http://RichieBartlett.com/ 

I tend to favor dark backgrounds. (Is it possible to support both dark/light themes like the smartphones do? IF it's daytime then light, else use dark...) Needs to be contrasted with the paragraph sections.  
This will be a multi-page site to direct users about me. Must be a *responsive design* that looks great on PC, iPad, and iPhones.
Project is to design 14 pages as defined below. (Half of them are error pages with similar designs...)

**Awarded freelancer will likely be hired for ongoing work at market rate for this site.**
Contest is just for the overall design of the site and not the full completion of the project. Candidate should be comfortable with Adobe Photoshop/Illustrator to make the cutouts/masks of my image to fit the site theme.


# https://dev.RichieBartlett.com
I will host the development server on AWS. All you need to do is commit code to GitHub. AWS will automatically push all changes to this DEV branch directly to the web server. Once I approve your changes, they will be pushed to the production website.


## NAVIGATION
### Header Menu: 
- About
- Work
- Play
- Projects
- Tips [for donations and work payments via Crypto or PayPal]


### Footer:
- About
  - work
  - play
- Projects
  - Personal
  - Work
- Social (use icons at least 48px x 48px)
  - GitHub
  - LinkedIn
  - Facebook
  - Twitter
  - Reddit
  - Pinterest
- Legal
  - Privacy
  - ToS
  - Cookies

## SITE FOLDER STRUCTURE
```
.
+-- assets
|   +-- css
|   |   +-- dev1.css
|   |   +-- images.repo.css
|   |   +-- style.prod.css
|   +-- img
|   |   +-- photos.gif
|   |   +-- photos.heic
|   |   +-- photos.ico
|   |   +-- photos.jpg
|   |   +-- photos.png
|   |   +-- photos.svg
|   +-- js
|       +-- dev.framework.js
|       +-- main.prod.js
|       +-- custom.js
+-- _config.yml
+-- 400.html
+-- 403.html
+-- 404.html
+-- 500.html
+-- 502.html
+-- 503.html
+-- index.html
+-- about.html
+-- error.html
+-- favicon.ico
+-- LEGAL.html
+-- play.html
+-- projects.html
+-- robots.txt
+-- sitemap.xml
+-- tips.html
+-- work.html
```

## NOTES:  

- [ ] A simple one-page layout is a good place to start. As long as the general layout is easy to replicate across similar pages.
- [ ] Please push all files directly to GitHub via a pull-request against the "dev" branch. 
      [GitHub Dev branch](https://github.com/lorezyra/Richie2.com/tree/Dev)
- [ ] Should have clearly defined header & footer sections. 
- [ ] Unless user scrolls down, footer can be hidden.
- [ ] Page should load without requiring JavaScript to display. Please use CSS features instead of JavaScript. 
      (Good idea to design with JavaScript disabled in your browser.)
- [ ] Site should look the same on Safari, Chrome, and Firefox. (Don't care about Microsoft IE/Edge.) 
- [ ] The FB/GitHub/external-link buttons should target a new tab for loading the page.
- [ ] IF you use javascript, please consolidate all code into a single JS file for production.
      The production version must be a single file whereas the dev version can be human readible/editable across many files.
- [ ] Please consolidate all CSS into a single CSS file.
      The production version must be a single file whereas the dev version can be human readible/editable across many files.
- [ ] Please don't use copyrighted images. Free/open/pubic-domain images please. 

``` 
I will upload my personal images to GitHub for design use. 
See https://github.com/lorezyra/Richie2.com/tree/Dev/img folder.

I can upload more photos upon designer request.

```
- [ ] All images MUST be embedded into a single CSS file. Checkout [image conversion tool to base64](https://www.base64-image.de/) to do this.
- [ ] Any QR codes should use images generated by https://www.QRcode-monkey.com
- [ ] Font-Awesome is cool to use, but not required.
- [ ] Each page should not load more than 5 files total. 
      I will look at the network tab in Chrome to see what loads and how long it takes to load.
- [ ] Each page must load within 1500 milliseconds. (Assumes hosted on a CDN like AWS CloudFront.)
- [ ] Please keep the number of download files to a minimum. 100 x 1k files is far slower than a single 100K file. 
- [ ] I _really like_ this site design: https://linusbohman.se/ . However, I'm open to other interesting designs.
- [ ] Will keep contest open for at least 40 hours. (~ May 28th)
- [ ] favicon.ico should use my face as the logo. Use a PNG format file with high resolution.


## Javascript disabled detected:
- [ ] Except for the error pages, there should be a JS check on the browser. It should not prevent the main site from loading as the non-JS version should still allow the user to experience my site. This is important as I deal with security experts that refuse to enable JS on their browsers.
- [ ] Use a ```<div>``` block with the ```<noscript>``` tag that is hidden if JS is enabled.
- [ ] An *example* for disabled JS detection:
![Screen Shot 2021-05-15 at 0 20 27](https://user-images.githubusercontent.com/1673222/118345872-7b08b700-b572-11eb-8847-56f298dec7ec.png)
Use this text
```
Looks like your Javascript is disabled.
You can still browse around, but know that JS makes this site more lively. Some features may not work without JS enabled.
```
Feel free to get creative on how/where to display this message.



## index.html:
- [ ] This landing page will prominently feature my photo covering a good portion of the viewable space (on PC & iPad) with animations that invite the user to select work or play. Will need mobile version as well.
- [ ] Should only animate if user changes mouse selection between either side of the screen (work / play).
- [ ] There should be three main sections on the home page of the main body: Work, (my static photo), & Play... 
If user keeps the mouse in the center, then they see the inital photo. Otherwise moving between work & play will display a different photo for each.
- Example: https://linusbohman.se/ 


## tips.html:
- [ ] Should model this page: [https://Technocracy.Works/donate.html](https://raw.githubusercontent.com/lorezyra/www.technocracy.works/Production/donate.html)
- [x] Will share the Bitcoin & Ethereum addresses later. I won't be using the old addresses for my personal site.
- [ ] Bitcoin details:
```
Payment information
URI: bitcoin:BC1QCR5LFGEZ89E04XL89XAYG34CMJEQ4NZ0WGL464?label=RichieBartlett.com
Address: bc1qcr5lfgez89e04xl89xayg34cmjeq4nz0wgl464
Label: RichieBartlett.com
```
- [ ] Ethereum details:
```
Payment information
URI: ethereum:0xC83107B60f42B5211727c7d7D1F9135ada395Ad0?label=RichieBartlett.com
Address: 0xC83107B60f42B5211727c7d7D1F9135ada395Ad0
Label: RichieBartlett.com
```

## about.html:
- [ ] Basic contents can be directly copied from the existing site @ RichieBartlett.com
- [ ] There should be a subtle section to sign-up for a newsletter. Users can volunteer their email.


## work.html:
- [ ] This page will represent my professional past... a CV/resume of sorts, but focused on highlighted companies and projects I've participated/lead.
- [ ] This page's background should be a little brighter than the index page.
- [ ] Add section for "We should work together!" with a link to open an email and the basic "mailto:" href prefilled.


## play.html:
- [ ] Display time I have with my twin sons, playing lego, writting fun code projects, & online games (e.g. World of Warcraft).
- [ ] Perhaps shift background hue to a slightly different, but subtle color?


## projects.html:
- [ ] Here I will highlight my own personal projects such as LoreZyra.TV and Linspira (currently in redesign). 
- [ ] I may also include LEGO projects from [Rebrickable](https://rebrickable.com/users/LoreZyra/profile/).


## LEGAL.html:
- [ ] Here I will list all the standard disclaimers (copyrights, privacy, ToS, cookies, GDPR, etc) for users of my site.


## error.html (400, 403, 404, 500, 502, 503):
- [ ] Need a clever set of error pages complete with cute/cool images to explain what went wrong.
- [ ] See great examples here: 
- https://github.com/404
- https://github.com/HttpErrorPages/HttpErrorPages
- https://www.searchenginejournal.com/404-page-examples/211154/

![Screen Shot 2021-05-15 at 11 42 36](https://user-images.githubusercontent.com/1673222/118345892-af7c7300-b572-11eb-82a5-221afb993cdd.png)

![Screen Shot 2021-05-15 at 11 46 56](https://user-images.githubusercontent.com/1673222/118345991-58c36900-b573-11eb-8b10-4b333b5b12b0.png)




## Expected Meta data in the header:
```html
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <META charset="UTF-8">
    <META name="Content-Language" content="english" />
    <META http-equiv="imagetoolbar" content="no" />
    <META http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <META http-equiv="content-script-type" content="text/javascript" />
    <META http-equiv="content-style-type" content="text/css" />
    <META http-equiv="CACHE-CONTROL" content="Public" />
    <META http-equiv="PRAGMA" content="Cache-Control" />
    <!-- META http-equiv="EXPIRES" content="Sun, 01 Jul 2012 00:00:01 GMT" / -->
    <META name="DC.creator" content="Richie Bartlett Jr. - http://RichieBartlett.com/" />
    <META name="DC.language" content="en" />
    <META name="copyright" content="Copyright 2021" />
    <META name="keywords"
        content="Richie Bartlett, Technologist, Entreprenuer, LEGO, AFOL, Solutions Architect, Cloud Architect, IT Manager" />
    <META name="description"
        content="Richie is an Entreprenuer, a Technologist and Cloud Architect. Loves how technologies brings the promise of an easier life, but enjoys the challenge to make it work. Work achievements, play, & fatherhood are the things that drive Richie.">
    <META name="Author" content="Richie Bartlett, Jr." />
    <META name="revisit-after" content="7 days" />
    <META name="distribution" content="global" />
    <META name="rating" content="general" />
    <META name="robots" content="ALL" /> <!-- (Robot commands: All, None, Index, No Index, Follow, No Follow) -->
    <META name="GOOGLEBOT" content="FOLLOW" />

    <LINK rel="shortcut icon" href="/favicon.ico" type="image/vnd.microsoft.icon" />
    <LINK rel="shortcut icon" href="/favicon.ico" type="image/ico" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <LINK rel="icon" href="/favicon.ico" type="image/ico" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <LINK rel="apple-touch-icon" href="/favicon.ico" />
    <LINK rel="apple-touch-icon-precomposed" href="/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <!-- used https://www.base64-image.de/ to create the Base64 images -->
    <!-- QR code generator for URL/Bitcoin/etc https://www.qrcode-monkey.com/#bitcoin -->

    <title>Richie Bartlett, Jr.</title>
    <link rel="stylesheet" href="/assets/css/main.prod.css" type="text/css">
    <script src="/assets/js/main.prod.js"></script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123456789-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-123456789-1');
    </script>

</head>

<body>
</body>
</HTML>
```
