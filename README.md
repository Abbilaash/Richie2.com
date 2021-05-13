# 2021 Design specs
Rebuilding/rebranding personal website: http://RichieBartlett.com/ 

I tend to favor dark backgrounds. Needs to be contrasted with the soft-white sections.  
This will be a multi-page site to direct users about me. Must be a responsive design that looks great on PC, iPad, and iPhones.
Project is to design 14 pages as defined below.

**Awarded freelancer will likely be hired for ongoing work at market rate for this site.**




## NAVIGATION
### Header Menu: 
- About
- Work
- Play
- Projects
- Tips [for donations and work payments via Crypto or PayPal]


### Footer sections
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
|   |   +-- photos.jgp
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
+-- LEGAL.html
+-- play.html
+-- projects.html
+-- robots.txt
+-- sitemap.xml
+-- tips.html
+-- work.html
```

## NOTES:  

- [ ] A simple one-page layout is a good start. As long as the general layout is easy to replicate across pages.
- [ ] Should have clearly defined header & footer sections. 
- [ ] Unless user scrolls down, footer can be hidden.
- [ ] Page should load without requiring JavaScript to display. Please use CSS features instead of JavaScript. 
      (Good idea to design with JavaScript disabled in your browser.)
- [ ] Site should look the same on Safari, Chrome, and Firefox. (Don't care about Microsoft IE/Edge.) 
- [ ] The FB/GitHub/external-link buttons should target a new tab for loading the page.
- [ ] IF you use javascript, please consolidate all code into a single JS file.
      The production version must be a signle file whereas the dev version can be human readible/editable.
- [ ] Please consolidate all CSS into a single CSS file.
      The production version must be a signle file whereas the dev version can be human readible/editable.
- [ ] Please don't use copyrighted images. Free/open/pubic-domain images please. 

``` 
I will upload my personal images to GitHub for design use. 
See https://github.com/lorezyra/Richie2.com/tree/Dev/img folder.

```
- [ ] Please push all files directly to GitHub via a pull-request against the "dev" branch. 
      [GitHub Dev branch](https://github.com/lorezyra/Richie2.com/tree/Dev)
- [ ] All images MUST be embedded into a single CSS file. [base64](https://www.base64-image.de/) 
- [ ] Any QR codes should use images generated by https://www.QRcode-monkey.com
- [ ] Font-Awesome is cool to use, but not required.
- [ ] Each page should not load more than 5 files total. 
      I will look at the network tab in Chrome to see what loads and how long it takes to load.
- [ ] Each page must load within 1500 milliseconds. (Assumes hosted on a CDN like AWS CloudFront.)
- [ ] Try to keep the number of files to a minimum. 100 x 1k files is far slower than 1 x 100K file. 
- [ ] I _like_ this site design: https://linusbohman.se/ . However, I'm open to other interesting designs.
- [ ] Will keep contest open for at least 40 hours. (June 23rd)


## index.html:
- [ ] This landing page will feature my photo covering a good portion of the viewable space (on PC & iPad) with animations that invite the user to select work or play. 
- [ ] Should only animate if user changes mouse selection between either side of the screen (work / play).


## tips.html:
- [ ] Should model this page: [Money page](https://raw.githubusercontent.com/lorezyra/www.technocracy.works/Production/donate.html)
- [ ] Will share the Bitcoin and Ethereum addresses later. I won't be using the old addresses for my personal site.


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
- [ ] Here I will highlight my own personal projects such as LoreZyra.TV and Linspira (currently in redesign). I may also include LEGO projects.


## LEGAL.html:
- [ ] Here I will list all the standard disclaimers (copyrights, privacy, ToS, cookies, etc) for users of my site.


## error.html (400, 403, 404, 500, 502, 503):
- [ ] Need a clever set of error pages complete with cute/cool images to explain what went wrong.
- [ ] See great examples here: https://github.com/HttpErrorPages/HttpErrorPages
