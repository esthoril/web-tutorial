# thruhiking.eu

## Image sizing
* thumbnail 960 x 640
* cover 1600 x 640
* gear item 480 x 480
* carousel 1200 x 583 (1600 x 739)

## Video styling

Font: Gentium Basic Book (bold)
Colors: `#404040` `#F8F8FB`

Youtube thumbnail
* Font: Deja Vu Sans (Bold) | 136 size
  - main title 136 size `#FFFFFF`, with `#000000` back at 4,4 offset
  - date 64 size `#FFFFFF`

## Framework

We use _gulp_ to build our website

* `npm install` to install all packages from the _package.json_ file
* `gulp` Running website locally
* `gulp build` Build website

## Json config files

* `blog.json` Non-trail posts
* `trails.json`
* `trail-cover.json`
* `pct.json` Day by day pct
* `gearlist.json`
* _custom gear list_

### Trail post json
File: __src/res/trails.json__

* type
  - none : thru-hike, simply omit the field altogether
  - 1 : section hike
  - 2 : short (< 1 week or just a random short trip)
  - __-1__ : don't render

Example trail
```json
{
  "id": 13,
  "caption": "Traumpfad",
  "desc": "Munich to Venice across the Austrian Alps and Dolomites in Northern Italy",
  "author": "sander",
  "url": "",
  "date": "August 2022",
  "distance": 550,
  "elevation": 24.380,
  "thumb": "t_dreampath.jpg",
  "flags": ["germany", "austria", "italy"]
}
```

### Trail cover json
File: __src/res/trail-cover.json__

```json
{
  "id": 13,
  "title": "Dream Path",
  "subtitle": "Munich to Venice",
  "date": "August 2022",
  "cover": "c_dreampath.jpg"
}
```


### Gearlist json
File: __src/res/gearlist.json__

```json
{
  "id": 43,
  "name": "Revelation Sleeping Quilt",
  "note": "Enlightened Equipment -6&deg;C",
  "img": "revelation-quilt.png",
  "url": "https://enlightenedequipment.com/revelation-custom",
  "weight": 670
}
```

### Trail gear json
File: __src/res/\<filename\>.json__ \
Ex: __trampfad.json__ see below

- `gear` Gear categories with list of indices from the above gearlist json (see _gear.txt_ for easy reference)
- `consumable` List of indices of all consumable gear
- `wearable` List of indices of all wearable gear

Gear quantity is by default set to 1. \
In case another quantity is needed, write the index as a float with the decimal part being the quantity. \
Ex __7.2__ in _Clothes - worn_ in the below example means item at index 7 with quantity 2.

```json
{
  "title": "Traumpfad 2022",
  "gear": {
    "Big 3": [1, 2, 3, 4],
    "Clothes - worn": [6, 7.2, 37, 38],
    "Clothes - in pack": [32, 34, 37],
    "Cookware": [8, 9, 10, 13, 11, 12, 14.2, 15, 16],
    "Electronics": [31, 39, 17, 18, 30, 20, 22, 5, 23, 21.2],
    "Misc": [24, 25, 26]
  },
  "consumable": [10],
  "wearable": [6, 7, 37, 38, 17]
}
```

---

### Repo structure

src
-  `_subpages` dynamic loaded HTML header and footer
- `css`
  * `author` author images
  * `flags` flag images
  * `icon` small icons
  * css files and custom fonts
- `fonts` fontawesome fonts
- `img`
  * `cover` post cover image 1600 x 640 px
  * `thumb` tile thumbnails 960 x 640 px
  * `gear` gear images 480 x 480 px
  * `hike` subfolders for hike blog html pages
  * `pct` pct images
  * `thumb-pct` tile thumbnails for pct days
  * html icon
- `js` javascript
- `pct` pct daily blog html files
- `res` .json configuration files


- __index.html__ Main page
- __trails.html__ Trails main page
- __gear.html__ Gear main page
- __about.html__ About page

ROOT
- `gear.py` script to get list of all gear in _src/res/gearlist.json_
- `gear.txt` output of gear.py
- `gulpfile.js` gulp script _gulp_ and _gulp build_
- `package.json` _npm install_ to install all needed node.js packages for this repo
- `README.md`
