<p align="center">
  <a href="https://github.com/tbaltrushaitis/cv/releases"><img src="https://img.shields.io/github/release/tbaltrushaitis/cv.svg?style=flat" alt="GitHub release" /></a>
  <a href="https://github.com/tbaltrushaitis/cv/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg?style=flat" alt="License" /></a>
  <img src="https://img.shields.io/david/tbaltrushaitis/cv.svg" alt="Dependencies" />
  <img src="https://img.shields.io/david/dev/tbaltrushaitis/cv.svg" alt="Dev Dependencies" />
</p>

<p align="center">
  <h1 align="center">CV, Resume and Portfolio website template</h1>
</p>

<p align="center">
  <a href="http://bit.ly/tomascv?ref=readme">
    <img max-width="640px" max-height="360px" src="assets/img/cv-demo-01.gif" alt="Modern CV, Resume and Portfolio website template" />
  </a>
</p>

<!-- # Best-in-Class modern CV, Resume and Portfolio # -->

:mortar_board: Best-in-Class modern CV, Resume and Portfolio website template. All-in-One-Page site with fully customizable builder.

`modern` `cv` `resume` `template` `portfolio` `portfolio-website` `cv-template` `IT` `resume-template` `resume-website` `cv-website`

---

# :memo: Changelog #

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

<!-- ##### Added: ##### -->
<!-- ##### Changed: ##### -->
<!-- ##### Fixed: ##### -->
<!-- ##### Removed: ##### -->

---

<!-- ## [Unreleased] - Current ## -->

---

## [v0.2.4](Unreleased) - Current ##

### Added ###
- [x] manifest.json

### Changed ###
- [x] bower i --save-dev font-awesome@5.10.1
- [x] Small improvements in biography section
- [x] Small improvemnts in employment history cards when rendering in mobile
- [x] Improved Clean operations in Make
- [x] Timestamp format to just time instead of .toLocaleTimeString() for console messages

### Fixed ###
- [x] lodash.template [CVE-2019-10744](https://github.com/lodash/lodash/pull/4336) vulnerability

---

## [v0.2.3](https://github.com/tbaltrushaitis/cv/tree/v0.2.3) - 2019-08-02 ##

### Added ###
- [x] hue animation for current job position
- [x] brand color for "Digital Ocean" font-awesome icon
- [x] npm i dotenv@8.0.0 --save-dev

### Changed ###
- [x] bower i jquery@3.4.1 --save
- [x] npm i yargs@13.2.4 --save-dev
- [x] npm i merge-stream@2.0.0 --save-dev
- [x] npm i lodash@4.17.14 --save
- [x] bower i shufflejs@5.2.2 --save
- [x] bower i font-awesome@5.9.0 --save
- [x] bower i animate.css@3.7.2 --save

##### Fixed: #####
- [x] `js-yaml` Denial of Service vulnerability [WS-2019-0032](https://github.com/nodeca/js-yaml/issues/475)
- [x] Padding of document sections

---

## [Mason](https://github.com/tbaltrushaitis/cv/releases/tag/v0.2.2) - 2019-05-07 ##

## [Released] ##
- [x] Include all latest updates and fixes from **v0.2.2**

---

## [v0.2.2](https://github.com/tbaltrushaitis/cv/tree/v0.2.2) - 2019-05-07 ##

### Added ###
- [x] Several tweaks for apache server caching and compressing in `.htaccess` file
- [x] Colors for several skills icons
- [x] Implemented Gulp and Make tasks for preparation of archive with project distro
- [x] Tooltips for skill icons in employment history cards
- [x] Category keys for npm scripts in package.json - from [Jason Yu](https://dev.to/ycmjason/how-to-organise-npm-scripts-4d2m)
- [x] Implemented FOUC (flash of unstyled content) workaround
- [x] One global function to show date and time in console logs

### Changed ###
- [x] Bower packages updated to latest versions: `modernizr`, `smoothscroll`, `font-awesome` and `jquery`
- [x] NPM packages updated to latest versions: `jimp`, `jshint` and `yargs`
- [x] Improved styles building gulp task
- [x] Shorter color names for console logs

### Fixed ###
- [x] Bug with responsive styling

---

## v0.2.1 - 2019-04-05 ##

### Added ###
- [x] Tooltips for links to profiles in social media at "home" section

### Changed ###
- [x] For each item in the portfolio section buttons with links to live demos now goes before "zoom" and "github repo" buttons

---

## [v0.2.0](https://github.com/tbaltrushaitis/cv/tree/dev-0.2.0) - 2019-04-05 ##

### Added ###
- [x] Attribute `rel="noopener"` for several links for higher security

### Changed ###
- [x] Many major improvements for gulp tasks

---

## [v0.1.6](https://github.com/tbaltrushaitis/cv/commit/1510802b77f3b57430ee129613a5178b506e351f) - 2018-11-07 ##

### Added ###
- [x] Using [jimp](https://github.com/oliver-moran/jimp) from now to automatically create thumbnails for portfolio images
- [x] Animated primary repository image
- [x] Use of `read-config` for reading and merging configuration files
- [x] Implemented `live reload` feature for easier development
- [x] `html minifier` now used to reduce page size

### Changed ###
- [x] Replaced outdated javascripts minifier `gulp-uglify` within one with es6 support - [Terser](https://github.com/terser-js/terser)
- [x] Updated `gulp watch` function

### Fixed ###
- [x] Facts section counters animation bug with value

---

## [Copna](https://github.com/tbaltrushaitis/cv/releases/tag/v0.1.5) - 2018-11-07 ##
This one is the last release before start implementing JSON-configurable site generation process.

---

## [v0.1.5](https://github.com/tbaltrushaitis/cv/tree/v0.1.5) - 2018-10-10 ##

### Added ###
- [x] Company logo in employment history
- [x] Icons in skillset list
- [x] FontAwesome icons color tweaks
- [x] Reduced page load time by implementing image compression for portfolio items

### Changed ###
- [x] Animations settings moved from javascript code to JSON config
- [x] Moved rc-files to `config/` directory
- [x] :arrow_up: Dependencies version upgrade

---

## [v0.1.4](https://github.com/tbaltrushaitis/cv/releases/tag/v0.1.4) - 2018-06-01 ##

### Added ###
- [x] More Font-Awesome icons in decoration

### Changed ###
- [x] Upgrade Font-Awesome to v5.0.13 and correct html code accordingly
- [x] Improved text for introduction, career and education sections

---

## [v0.1.3](https://github.com/tbaltrushaitis/cv/releases/tag/v0.1.3) - 2018-06-01 ##

### Changed ###
- [x] Updated list of skills
- [x] Use of short links for third-party resources urls

---

## [v0.1.2](https://github.com/tbaltrushaitis/cv/releases/tag/v0.1.2) - 2018-02-01 ##

### Changed ###
- [x] Updated jQuery to v3.3.1 due to critical vulnerability
- [x] Updated versions of few packages

---

## [v0.1.1](https://github.com/tbaltrushaitis/cv/releases/tag/v0.1.1) - 2018-01-10 ##

### Added ###
- [x] Makefile
- [x] gulp tasks to build and update **webroot** directory

### Changed ###
- [x] Small improvement of `contacts` section

---

## [v0.1.0](https://github.com/tbaltrushaitis/cv/commit/2a4e83e8259cd96325848adf3638add5965849b3) - 2017-12-15 ##

### Added ###
- [x] More animations

### Changed ###
- [x] Improved frontend javascripts
- [x] Dependencies update

---

## [v0.0.0](https://github.com/tbaltrushaitis/cv/commit/bdf93f1e81fb75d6f884f92f407e4adcb90c66ef) - 2017-05-12 ##

### Added ###
- [x] Initial commit

---

:scorpius:
