@import url(https://fonts.googleapis.com/css?family=Lato:400,100,300,700);
@import url('https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,500i,700,700i');
@font-face {
    font-family: 'dunkin';
    src: url('./fonts/Dunkin.otf');
}
@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
  font-family: 'Nunito Sans', sans-serif!important;
  font-weight: 500 !important;
  font-size: 16px;
  height: 100% !important;
  background: #FFF !important;
}
a {
    color: #6e428e;
    text-decoration: none;
}
.flex-row.row {
    display: flex;
    flex-wrap: wrap;
}

.flex-row.row > [class*='col-'] {
    display: flex;
    flex-direction: column;
}

.box {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    -moz-box-shadow: 1px 1px 10px 0px rgba(81, 81, 81, 0.25);
    -webkit-box-shadow: 1px 1px 10px 0px rgba(81, 81, 81, 0.25);
    -o-box-shadow: 1px 1px 10px 0px rgba(81, 81, 81, 0.25);
    box-shadow: 1px 1px 10px 0px rgba(81, 81, 81, 0.25);
    filter:progid:DXImageTransform.Microsoft.Shadow(color=rgba(81, 81, 81, 0.25), Direction=134, Strength=10);
}

.authed ul li a[href^="/user/edit"],
div a[href^="/user/edit"],
.not-authed ul li a[href^="/user/login"],
.not-authed ul li a[href^="/user/register"] {
   display: none ;
}


/* MODIFIERS */

/* BUTTONS */

div.follow_button >  a, div.follow_button >  a:hover {
  background-color: #e41a5b;
  border: none;
}

.page_primary_action > a.btn.btn-primary {
  font-weight: 600;
  margin-left: 0;
}

.btn-primary {
  background-color: #e41a5b !important;
  border: none !important;
  border-radius: 5em !important;
  padding-left: 15px !important;
  padding-right: 15px !important;
}

i.fa.fa-share {
  display: none;
}

span.caret {
  margin-bottom: 9px;
  margin-left: 10px !important;
}

.btn-pink {
  background-color: #e41a5b;
  color: #FFF;
}
.btn{
    border: none;
    outline: inherit;
    border-radius: 4rem;
    line-height: 28px;
    margin-left: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 18px;
    font-weight: 400;
}
/* TABLE */

thead tr {
  color: #e41a5b;
}

.table-striped tbody tr:nth-child(even) td, .table-striped tbody tr:nth-child(even) th {
  background-color: #FFF;
}

.table-striped tbody tr:nth-child(odd) td, .table-striped tbody tr:nth-child(odd) th {
  background-color: #fafafa;
}
.table-condensed>tbody>tr>td, .table-condensed>tbody>tr>th, .table-condensed>tfoot>tr>td, .table-condensed>tfoot>tr>th, .table-condensed>thead>tr>td, .table-condensed>thead>tr>th {
    padding: 10px 15px!important;
}
/* TAG DIV */
blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
    background: #fafafa;
}
section.tags ul {
  background-color: transparent;
  border: none;
  box-shadow: none;
}

section.tags a.tag {
  background-color: #ff9933;
  border: none;
  box-shadow: none;
  -webkit-box-shadow: none;
  color: #ffffff;
}

section.tags a.tag:hover {
  background-color: #ff9933;
  border: none;
  box-shadow: none;
  -webkit-box-shadow: none;
}

.pill.filtered {
  background-color: #e41a5b;
}
@media (max-width: 768px){
  .js .show-filters.btn {
      display: inline-block;
      background: #ff9933;
      color: #fff;
      margin: 0;
  }

  .js [role=main] .secondary .filters {
    z-index: 1000;
  }
}
/* TEXT */

.text-big {
  font-size: 60px;
}

.text-pink {
  color: #e41a5b;
}

.text-orange {
  color: #ff9933;
}

.text-purple {
  color: #6e428e;
}
.text-blue {
  color: #00a6ff;
}
.text-green {
  color: #00ff00;
}

.text-medgrey {
  color: #666;
}

.text-lightgrey {
  color: #999;
}

.titlecase::first-letter {
  text-transform: uppercase;
}
.bg-pink {
  background: #e41a5b;
}

.bg-orange {
  background: #ff9933;
}
.bg-blue {
  background: #00a6ff;
}
.bg-green {
  background: #00cd2a;
}
.bg-yellow {
  background: #e9f352;
}

.bg-purple {
  background: #6e428e;
}

/* LAYOUT ORGANIZATIONS */

.toolbar .breadcrumb a, .toolbar .breadcrumb li:after {
  color: #505050;
  font-size: 14px;
} 
div.wrapper {
  background-image: none;
  background: none;
  border: none;
}
  
div.wrapper.row {
  -webkit-box-shadow: 0 0 0 4px rgba(0,0,0,0.0) !important;
}

body > [role="main"] {
  background-color: #f4f7fa !important;
}

[role=main] .secondary {
  background-color: transparent;
    border-radius: 5px;
    color: #999;
}

[role=main] .primary {
    float: right; 
}

.module .read-more {
    font-weight: 500;
    color: #999999;
}

.filters .nav-facet {
    padding-left: 15px;
    margin-bottom: 0;
    list-style: none;
    border-left: 1px solid #d6d6d6;
}
.nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color: transparent!important;
}
.nav>li:hover{
    cursor: pointer;
}
.nav-facet .nav-item>a:hover:after, .nav-facet .nav-item.active>a:after{
    background-image: none;
}
.nav-facet .nav-item>a:before, .nav-facet .nav-item.active>a:before {
    font-family: FontAwesome;
    content: "\f10c";
    color: #999;
    font-size: 25px;
    left: -7px;
    position: absolute;
    top: -7px;
}
.module-narrow .nav-item.active a span:before {
  font-family: FontAwesome!important;
    content: "\f058";
    font-size: 25px;
    left: -7px;
    color: #e41a5b;
    position: absolute;
}
.module-narrow .nav-item.active a span:before:hover,
.module-narrow .nav-item.active a span:before {
    color: #ff9b00;
}
.context-info .image img{
    margin-bottom: 10px;
    background: white;
    margin-bottom: 10px;
    overflow: hidden;
    padding: 15px;
    margin: auto;
}
.page-header + .module-content{
    background: white;
    padding: 30px 30px 30px 30px;
    margin-top: -20px;
    border: 1px solid #d6d6d6;
    border-radius: 0 0 5px 5px;
}
.module h1 {
    margin-bottom: 15px;
    color: #6e428e;
    font-size: 30px;
    font-weight: 700;
}
.module-heading {
  background-color: transparent;
  border-bottom: none;
  color: #6e428e;
  text-align: center;
  font-size: 16px;
}

.module-heading i {
  display: none;
}

.module-content {
  padding: 0;
}
.module-shallow .module-content:last-child {
    padding-bottom: 10px;
    padding: 0 0px 30px 0px;
    text-align: justify;
}
.module-narrow .module-heading, .module-narrow .module-content, .module-narrow .module-footer {
    padding-left: 0px;
    padding-right: 0px;
}
.license .module-content,
.context-info .module-content , .dataset-map #dataset-map-container, 
section.social .nav-simple{
    padding: 15px 15px 15px 15px!important;
    background: #fff;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    margin-top: 0px!important;
}
.iframe-map{
    box-shadow: 0 0 1.25rem rgba(108,118,134,.1);
    border: 1px solid #d6d6d6;
    border-radius: 4px;
}
.map{
  padding-bottom: 30px;
}
.module
.module-content:first-child {
  margin-top: 0;
  padding-top: 0;
}

.module-content input.search[type=text] {
  height: 40px;
  margin: auto 0px;
  border-radius: 20px;
  border: 1px solid #999;
}

.module-content .search-input-group input[type=text] {
  height: 40px;
  margin: auto 0px;
  border-radius: 20px;
  border: 1px solid #999;
}

.module-content .pagination {
    margin: 30px auto 0;
    display: block;
}
.pagination ul>li>a, .pagination ul>li>span {
    color: #6e428e;
}
.pagination ul>li>a, .pagination ul>li>span {
     float: left; 
     padding: 4px 8px; 
     line-height: 20px; 
     text-decoration: none; 
     background-color: transparent; 
     border: none; 
     border-left-width: 0;
     font-size: 16px;
     font-weight: 700;
}
.pagination ul>li>a:hover, .pagination ul>li>a:focus, .pagination ul>.active>a, .pagination ul>.active>span {
    background-color: transparent;
}
.pagination ul>.active>a, .pagination ul>.active>span {
     color: #e41a5b; 
    cursor: default;
}
.pagination{
      width: 100%;
}
.module .pagination li a {
    border:none;
}
.media-grid.masonry {
  border:none;
}

.search-form .search-input button span {
  display: none !important;
}

.search-form .search-input button i {
  display: block;
  color:#666!important;
}
.stages{
  margin: 0px 0px 20px;
}
.input-append input, .input-prepend input, .input-append select, .input-prepend select, .input-append .uneditable-input, .input-prepend .uneditable-input {
    height: 40px;
}
.search-form {
    margin-bottom: 30px!important;
    padding-bottom: 15px;
    padding: 0px;
    border-bottom-width: 0;
    margin-bottom: 0;
}
@media (min-width: 768px) {
  .span9 .page-header {
    margin-left: 0;
  }
}

.control-medium input, .control-medium select, .control-medium textarea {
    width: 100%;
    height: 40px;
}
.control-custom input {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    width: 140px;
    height: 40px;
}
.input-prepend .add-on, .input-prepend .btn {
    margin-right: -1px;
    height: 40px;
    line-height: 30px;
}
article.module {
  border-radius: 5px;
  padding-top: 0px;
  padding-bottom: 25px;
  padding-right: 20x;
}

article.module .module-content.page-header {
  background-color: #FFF;
  padding-bottom: 0px;
  border: 1px solid #d6d6d6;
  border-radius:4px 4px 0px 0px;
}

header.module-content.page-header li.active {
  border-bottom: solid #e41a5b 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.nav-tabs>li.active>a, .nav-tabs>li.active>a:hover {
  color: #6e428e !important;
  font-weight: 700;
}

.nav-tabs>.active>a, .nav-tabs>.active>a:hover, .nav-tabs>.active>a:focus {
  color: #6e428e;
  background-color: #eeeeee;
  border: none !important;
  border-bottom-color: transparent;
}

.nav-tabs>li>a {
  color: #ccc;
}

.nav-tabs>li>a:hover, .nav-tabs>li>a:focus {
  border:none !important;
  color: #6e428e;
}

.nav-item.active>a, .nav-aside li.active a,.nav-item.active>a:hover {
    background-color: transparent;
    color: #333333;
}

.nav-item.active>a:hover, .nav-aside li.active a:hover {
  background-color: #ff9933;
  font-weight: 700;
}

@media (min-width: 768px) {
  .nav-item.active>a:before, .nav-aside li.active a:before {
    display: none;
  }
}


/* LAYOUT ORGANIZATIONS END */

/* HEADER START */
.header {
  background: rgb(255,153,51); /* Old browsers */
  background: -moz-linear-gradient(-45deg, rgb(255,153,51) 0%, rgb(228,26,91) 48%, rgb(110,66,142) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgb(255,153,51) 0%,rgb(228,26,91) 48%,rgb(110,66,142) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(-45deg, rgb(255,153,51) 0%,rgb(228,26,91) 48%,rgb(110,66,142) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff9933', endColorstr='#6e428e',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

div.header__logo {
  margin: 0;
  padding-right: 50px;
}

.header__logo > img {
  border-radius: 50%;
}

.header__title {
    background-color: transparent;
    color: #FFF;
    position: relative;
}
.header__title h1{
    margin-bottom: 0px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 55px;
    margin-top: 85px;
}
@media (max-width: 767px) {
  .header__title h1{
    margin-top: 25px;
    font-size: 35px;
    margin-top: 60px;
  }
  .header__title span {
    display: none;
  }
  body > .homepage {
     padding-top: 0px!important; 
  }
}  
@media (min-width: 768px) {
  #content {  
    padding: 60px 30px 30px 30px!important;
  }
}
.header__title span{
  opacity: 0.8;
}
@media (max-width: 1020px) {
  .header__logo.col-md-3 {
    display: none;
  }
  
  .header__title.col-md-9 {
    text-align: center;
    padding-bottom: 10px;
    margin: auto;
  }
}
/* HEADER END */

/* NAVBAR START */

#t3-mainnav.wrap.navbar.navbar-default {
    background-color: #fff;
    padding: 5px 0 0 0;
    border-bottom: 1px solid #d6d6d6;
    border-top: none;
    margin: 0;
    -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, .05);
    box-shadow: 0 3px 10px rgba(0, 0, 0, .05);
}

div#toggle-container {
  position: inherit;
}

.t3-navbar > .container {
  padding-top: 5px;
}

#t3-mainnav ul.nav.navbar-nav {
  font-size: 1.7vw;
  margin: 0 auto;
}

#t3-mainnav div.menu {
  padding: 0px;
}
.dropdown-menu>.active>a, .dropdown-menu>.active>a:focus, .dropdown-menu>.active>a:hover {
  background-color: #e41a5b!important;
  background-image:none;
}
/* NAVBAR END */
.modal{
  margin: 0 auto;
  height: fit-content;
}
/* LANGUAGE SWITCHER */

.connection__block {
  display: inline-flex;
  position: absolute;
  left: 12vw;
  bottom: -7px;
}

ul.language-switcher {
  list-style: none;
  margin-left: 10px;
}

ul.language-switcher ul.dropdown-menu {
  left: -136px;
}
/* LANGUAGE SWITCHER END */

/* ASIDE */

section#dataset-map.module.module-narrow.module-shallow {
  display: none;
}

.module.context-info .module-content h1.heading {
    position: relative;
    color: #6e428e;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 30px;
}
.context-info .nums dl {
    float: left;
    width: 50%;
    margin: 5px 0 0 0;
    color: #444444;
    text-align: center;
    min-height: 80px;
}
.context-info .nums dl:first-child {
    border-right: 1px solid #d6d6d6;
}
.context-info .nums {
  border-top: none;
  margin-top: 0;
  padding-top: 0;
}

.context-info .nums dl dt {
  font-size: 16px;
  color: #6e428e;
  min-height: 45px;
}

section.module-narrow {
    margin: 0 0 15px 0;
}

section.module.module-narrow.module-shallow:last-child {
  margin-bottom: 0px;
}

.module-footer {
  border-top: none;
}

.nav-simple>li, .nav-aside>li {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16666667em;
  padding: 10px 0 5px 34px;
  border-bottom: none;
  background: transparent!important;
}

.module-narrow .nav-item>a, .module-narrow .nav-aside li a {
  top: -2px;
  padding-left: 23px;
  padding-right: 0;
  margin: 0px 0 0 -25px;
  padding: 2px 0 0 25px;
  transition: .15s;
}
.social .nav-item>a {
  top: -2px;
  padding-left: 23px;
  padding-right: 0;
  margin: 0px 0 0 -25px;
  padding: 2px 0 0 80px;
  transition: .15s;
  color:#fff;
}

.secondary .module-heading {
  border-top: none;
}

section.social ul.nav.nav-simple {
  display: block;
  text-align: center;
  padding: 0;
}
section.social ul.nav li {
  padding: 10px 0 0px 0px;
  text-align: left;
  margin-bottom: 5px;
  overflow: hidden;;
}
section.social ul.nav li:nth-child(1) {
  background:#1da1f2;
}
section.social ul.nav li:nth-child(2) {
  background:#3b5998;
} 
.module-narrow .nav-item>a{
  margin-bottom: 5px;
}
.social .nav-item a i{
    position: absolute;
    height: 40px;
    opacity: 0.8;
    color: #fff;
    top: -5px;
    font-size: 35px!important;
    offset-rotate: 10deg;
    transform: rotate(-23deg);
    left:35px
}
section.social ul.nav li a i {
  font-size: 16px;
  margin-right: 5px;
} 

section.social ul.nav.nav-simple li a:hover {
  color: #e41a5b;
} 


/* ASIDE END */

/* BACKGROUND HOME SUB HEADER */

div.background {
  background-image: url('/images/ui/Fotolia_900.jpg');
  background-position: 0% 60%;
  background-size: cover;
  height: 900px;
  width: 100%;
  position: absolute;
  z-index: -1;
}

/* BACKGROUND HOME SUB HEADER END */


/* SEARCH CONTAINER  */

div.searchbar {
  height: 0px;
}

input.searchbar__input[type=text] {
  display: inline-block;
  height: 40px;
  padding-left: 20px;
  margin: auto 0;
  border: none;
  border-radius: 20px;
  opacity: 0.9;
}

input.searchbar__input::placeholder {
  font-size: 16px;
  color: #666;
}


button.searchbar__button[type=submit] {
    border: none;
    outline: inherit;
    background-color: #6e428e;
    color: #FFF;
    border-radius: 4rem;
    line-height: 28px;
    margin-left: 0px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 18px;
    transition: .15s;
}
button.searchbar__button:hover{
    background: #ff9933;
}
.search__block {
  position:relative;
}
@media (max-width: 990px) {
.search__block__input{
  margin-bottom: 15px
}
.searchbar__form{
  border-radius: 4px!important;
  margin-top: -60px;
  width: 100%!important;
}
}
.justify-content-center {
    -ms-flex-pack: center!important;
    justify-content: center!important;
}


.search-form h2 {
   font-size: 12px;
    line-height: 1.3;
    color: #000000;
    margin-top: 30px;
    font-weight: 900;
}
/* SEARCH CONTAINER END */
#about h2{
    color: #6e428e;
    max-width: 410px;
    padding: 0px 0px 0 0;
    margin: 0px 0 10px 0;
    border-radius: 4px;
    font-size: 28px;
    line-height: 30px;
    font-weight: 700;
}
#about h3{
    color: #e41a5b;
    font-size: 14px;
    margin: 15px 0 0px 0;
    font-weight: 700;
}
#about p{
    line-height: 25px;
    text-align: justify;
    margin-bottom: 25px;
}
/* CATEGORIES CONTAINER */

div.categories__row {
  background-color: #fff;
  border: 1px solid #d6d6d6;
  padding: 30px 0 30px 0;
}

.categories__card {
  height: 130px;
  display: block;
  padding-top: 20px;
  padding-bottom: 25px;
  transition: 0.4s;
  margin-bottom: 25px;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
}

.categories__card-img {
  display: block;
  margin-top: auto;
  margin-right: auto;
  margin-left:auto;
  margin-bottom: 4px;
  height: 90%;
  width: 47%;
}

.categories__card-title {
    display: block;
    text-align: center;
    height: 40%;
    font-weight: 700;
    line-height: 16px;
}

.categories__card:hover {
  text-decoration: none;
  -webkit-transform: scale(1.06);
  -moz-transform: scale(1.1);
}

/* CATEGORIES CONTAINER END */

/* STATS CONTAINER */

.stats__card{
    margin: auto;
    padding: 30px;
    color: white!important;
    border-radius: 3px;
    padding: 30px;
    color: white!important;
    border: 5px solid white;
    border-radius: 50%;
    display: block;
    width: 200px;
    height: 190px;
    box-shadow: 0 0 16px #ccc;
}
div.stats__row {
  padding:60px 0;
}

.numbers__title {
    font-size: 17px;
    color: white!important;
    margin-top: -5px;
    margin-bottom: 20px;
}

/* STATS CONTAINER END */

/* DATASETS BLOCK */

.content-bloc {
  position: relative;
}

.section__title {
  text-transform: uppercase;
  font-weight: 800;
  padding-top: 50px;
  padding-bottom: 50px;
  margin: 0;
}

div.resource-blocs {
  padding-left: 6vw;
  padding-right: 6vw;
}
.dataset-content{
  overflow-wrap: break-word;
}
.dataset__block {
    border-radius: 4px;
    margin-bottom: 30px;
    padding: 30px;
    background-color: #fff;
    flex: 1;
    min-height: 210px;
}
.dataset-list .col-md-6:nth-child(3n+1) .dataset-resources a,
.dataset-list .col-md-6:nth-child(3n+1) .dataset-item .dataset-resources a{
    border: 2px solid #6e428e;
    color: #6e428e;
}
.dataset-list .col-md-6:nth-child(3n+1) .dataset-resources a:hover,
.dataset-list .col-md-6:nth-child(3n+1) .dataset-item .dataset-resources a:hover{
    background: #6e428e;    
    color: #fff;
}
.dataset-list .col-md-6:nth-child(3n+2) .dataset-resources a,
.dataset-list .col-md-6:nth-child(3n+2) .dataset-item .dataset-resources a{
    background: transparent;
    border: 2px solid #e41a5b;
    color: #e41a5b;
}
.dataset-list .col-md-6:nth-child(3n+2) .dataset-resources a:hover,
.dataset-list .col-md-6:nth-child(3n+2) .dataset-item .dataset-resources a:hover{
    background: #e41a5b;    
    color: #fff;
}
.dataset-list .col-md-6:nth-child(3n+3) .dataset-resources a,
.dataset-list .col-md-6:nth-child(3n+3) .dataset-item .dataset-resources a{
    border: 2px solid #ff9933;
    color: #ff9933;
}
.dataset-list .col-md-6:nth-child(3n+3) .dataset-resources a:hover,
.dataset-list .col-md-6:nth-child(3n+3) .dataset-item .dataset-resources a:hover{
    background: #ff9933;    
    color: #fff;
}
.dataset-list .col-md-6:nth-child(3n+1)  .dataset-item .dataset__block-header h4 a,
.dataset-list .col-md-6:nth-child(3n+1) .dataset-item .dataset-heading a,
#group_list .col-md-4:nth-child(3n+1) .media-item h3{
    color: #6e428e;
}
.dataset-list .col-md-6:nth-child(3n+2)  .dataset-item .dataset__block-header h4 a,
.dataset-list .col-md-6:nth-child(3n+2) .dataset-item .dataset-heading a,
#group_list .col-md-4:nth-child(3n+2) .media-item h3{
    color: #e41a5b;
}
.dataset-list .col-md-6:nth-child(3n+3)  .dataset-item .dataset__block-header h4 a,
.dataset-list .col-md-6:nth-child(3n+3) .dataset-item .dataset-heading a,
#group_list .col-md-4:nth-child(3n+3) .media-item h3{
    color: #ff9933;
}
.dataset__block-header {
  list-style: none;
  display: block;
  margin-left: 0;
}
.wide .media-item{
  width: 100%!important;
}
.dataset__block-header h4,
.dataset-heading a{
  text-transform: uppercase;
  font-weight: 700;
}
.dataset__block-header-item {
  display: inline-block;
}

.dataset__block-header-item > a > img {
    height: 60px;
    width: 60px;
}
.dataset__block-header-icon{
    left: 10px;
    padding: 0!important;
}
.dataset__block-header h5{
    margin-bottom: 0;
}
.logo-mobile{
    height: 30px;
    margin: -2px 0 0px 40%;
}
.logo img{
    height: 200px;
    width: 300px;
    margin: -12px 0 -2px 0px;
}

ul.dataset-list.unstyled > li {
  height: 200px;
  position: relative;
}

.dataset-resources .label {
    display: inline;
    padding: 5px 10px;
    font-size: 100%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 25px;
    margin: 0 0 5px 5px;
    background: transparent;
    transition: .1s;
    background: #fff;
}
/* DATASET BLOCK END */


/* FOOTER #C14531*/

footer.footer {
  #background-color: #c14531;
  background-color: #500404;
  color: #FFF;
  width: 100%;
  line-height: 40px;
  display: block;
  text-align: center;
  position: relative;
  bottom: 0;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer a{
  color: #FFF;
  text-decoration: none;
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 5px;
}
.footer-links,  .footer-link{
  margin-top:3px;
}
footer a:hover {
  transition: 0.3s;
  color: #FFF;
  opacity: 0.8;
  text-decoration: none;
}
.footer-links {
  font-weight: 100;
}


footer.footer > a {
  color: #FFF;
  text-decoration: none;
  margin-left: 10px; 
     margin-right: 10px; 
}

.footer-brand {
  height: 60px;    
  width: 100px;
  display: block;
  background-image: url('/img/P01_Artwork.jpg') no-repeat;
  margin: 0px!important;
}

.social-media-box {
  display: inline-flex;
  margin: 0 auto!important;
}

.social-media-logo {
  height: 40px;
  width: 40px;
  margin-left: 18px;
}

.bottom {
    display: block;
    position: absolute;
    bottom: 0px;
    right: 15px;
    width: 100%;
}
.dataset-resources {
    margin-top: 8px;
    position: absolute;
    bottom: 15px;
    right: 15px;
}
.dataset-heading .label {
    position: relative;
    top: -1px;
    float: right;
}
.linkedin-logo {
  background: url('/images/ui/Social_Media/linkedin.svg') no-repeat;
  background-position: 0% 100%;
}

.youtube-logo {
  background: url('/images/ui/Social_Media/youtube.svg') no-repeat;
  background-position: 0% 100%;
}

.twitter-logo {
  background: url('/images/ui/Social_Media/twitter.svg') no-repeat;
  background-position: 0% 100%;
}
.instagram-logo {
  background: url('/images/ui/Social_Media/instagram.svg') no-repeat;
  background-position: 0% 100%;
}

.facebook-logo {
  background: url('/images/ui/Social_Media/facebook.svg') no-repeat;
  background-position: 0% 100%;
}
.social-media-box a{
    background-position: 50% 50%;
    background-size: 40%;
    width: 35px;
    margin: 5px;
    display: block;
    height: 35px;
    border-radius: 50%;
  }
/* FOOTER END */

#t3-mainnav {
  border-bottom: 1px solid #ddd;
}

#t3-mainnav a.logo {
  box-shadow: none;
}

.navbar .nav .btn, #toggle-container a.btn {
  background: transparent;
    border: 2px solid #e41a5b;
    border-radius: 30px;
    color: #e41a5b;
}
@media (max-width: 767px) {
  #toggle-container a.btn {
      background: transparent;
       border: none; 
      border-radius: 30px;
      color: #e41a5b;
      font-size: 20px;
      padding: 0;
      margin: 0 10px 0 0;
  }
}
.navbar .nav .btn:hover, #toggle-container a.btn:hover {
    transition: .15s;
    background: #e41a5b!important;
    color: #fff!important;
}

.navbar .nav > li > .navbar-btn {
  padding-top: 5px;
  padding-bottom: 5px;
}

.navbar .nav>li>a {
    font-size: 18px;
    font-weight: 600;
    float: none;
    padding: 15px 15px 15px;
    color: #777777;
    text-decoration: none;
    text-shadow: none;
}
.navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
    color: #e41a5b!important;    
}
@media (min-width: 992px) {
  #t3-mainnav .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  #t3-mainnav .container {
    width: 1170px;
  }
}

.homepage [role="main"] {
  padding-top: 100px;
  padding-bottom: 100px;
}

body [role="main"].second {
  padding-top: 40px;
}

.toolbar .breadcrumb > li + li:before {
  content: none;
}

h2.module-heading, h3.module-heading {
    text-align: left;
    color: #6e428e;
    font-size: 22px;
    font-weight: 700;
}

header .content_action a.btn {
  color: #6e428e;
  text-shadow: 0 1px 1px rgba(255,255,255,0.75);
  background: none;
  box-shadow: none;
}

.icon-chevron-right {
    background: none;
}

[class^="icon-"],
[class*=" icon-"] {
  vertical-align: middle;
}

.module-resource {
    padding: 30px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 4px;
}
.module-resource + .primary {
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-top: 0;
    border-radius: 0 0 4px 4px;
    margin-top: -1px;
}
.resources{
  margin-top: 15px;
}
.resources .module-heading{
  margin-top:15px;
}
.resources li.active{
    background: #fff!important;
    border: 1px solid #dddddd;
    border-right: 0;
    margin-right: -17px;
}
.resources .nav-item.active a span:before {
    content: '';
}

.dataset-list .dataset-item {
    font-size: 12px;
    color: #999;
    border-radius: 4px;
    box-shadow: 0 0 1.25rem rgba(108,118,134,.1);
    overflow: hidden;
    background-color: #fff;
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid #d6d6d6!important;
    overflow:hidden;
    height: 200px;
    position: relative;
}

.media-grid.masonry .media-item.masonry-brick {
    background-color: #FFF;
    position: relative!important;
    border-radius: 4px;
    top: initial!important;
    left: initial!important;
}

.media-grid.masonry .media-item.masonry-brick h3 {
  color: #666;
}

.media-view:hover, .media-view.hovered {
  border:0;
  box-shadow: none;
}

#t3-mainnav .nav>li>.dropdown-menu:before,
#t3-mainnav .nav>li>.dropdown-menu:after {
  display: none;
}
.hero {
  background-image: none;
}

.homepage .hero {
  padding-top: 100px;
}

.homepage .hero .container {
  padding: 0;
}

h1, h2, h3,
.h1, .h2, .h3 {
  margin-top: 20px;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-weight: 500;
  line-height: 1.1;
}

.homepage h3 {
  font-size: 24px;
  color: #6e428e;
}

.homepage h4 {
  font-size: 17px;
}

.homepage hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}

.homepage p.published {
  color: #8c54b5;

}

.homepage p.published small {
  font-size: 70%;
}

.homepage .hero .container {
  border: 1px solid #c1c1c1;
  background-color: white;
}

.homepage .module-search {
  background-color: rgba(255, 255, 255, 0.5);
  color: #626580;
  margin-top: 3em;
  margin-bottom: 2em;
  padding-bottom: 0;
  text-align: center;
}

.homepage .module-search .module-content {
  background: transparent;
  padding-top: 2em;
  padding-bottom: 0;
}
#particles-js{
  height: 340px;
   background: rgb(255,153,51); /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgb(156,186,172) 0%, rgb(145,176,199) 48%, rgb(25,11,107) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgb(156,186,172) 0%,rgb(145,176,199) 48%,rgb(25,11,107) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(-45deg, rgb(156,186,172) 0%,rgb(145,176,199) 48%,rgb(25,11,107) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#190b6b', endColorstr='#9cbaac',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
.searchbar__form{
    background: #00000033;
    padding: 30px 40px;
    border-radius: 90px;
    width: 100%;
    margin-top: -155px;
}
.homepage .content-bloc {
    position: relative;
    padding-bottom: 30px;
    background: #fafafa;
    padding-left: 0;
    border: 1px solid #d6d6d6;
    padding-right: 0;
}

.homepage .content-bloc.blocs {
  padding: 0;
}

.homepage h3 {
  color: #6e428e;
}

.homepage .content-bloc .bloc.first {
  margin-left: 30px;
}

.homepage .content-bloc .bloc {
  margin-left: 29px;
  background-color: #f1eff0;
  padding-left: 1em;
  padding-right: 1em;
  height: 20em;
}

.homepage .content-bloc .bloc h3 {
  margin-bottom: 1em;
}

.homepage .content-bloc .bloc ul,
.homepage .content-bloc .bloc li {
  list-style-type: none;
}
.homepage .content-bloc .bloc table.some-numbers {
  width: 100%;
  height: 75%;
  text-align: center;
  font-size: 150%;
}

.homepage .content-bloc .resource-blocs {
  display: flex;
}

.homepage .content-bloc .resource-blocs .resource-bloc {
  border: 1px solid #c1c1c1;
  margin-left: 20px;
  margin-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;
  background-color: #fbfbfb;
  flex: 1;
}

.homepage .content-bloc .resource-blocs .resource-bloc:first-of-type {
  margin-left: 26px;
}

.homepage .content-bloc .resource-blocs .resource-bloc:last-of-type {
  margin-right: 10px;
}

.homepage .content-bloc .resource-blocs .resource-bloc .bottom {
  border-top: 1px solid #c1c1c1;
}

.homepage .content-bloc .resource-blocs .resource-bloc .resource-type {
  margin-bottom: 10px;
}

.homepage .content-bloc .resource-blocs .resource-bloc .description {
  display: flex;
  align-self: flex-end;
}

.module-search .submit {
  color: #ffffff;
  background-color: #8f56b7;
  -moz-border-radius: 9px 9px 0px 0px;
  -webkit-border-radius: 9px 9px 0px 0px;
  border-radius: 9px 9px 0px 0px;
  text-decoration: none;
  padding: 3px 20px 3px 20px;
  border: none;
}

.homepage .stats ul li {
  width: 33%;
  font-weight: 300;
}

.homepage p.step {
  padding-left: 12px;
}
.homepage h5 {
  font-size: 1.1em;
}

.form-row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
}

.module-content .input-group.search-input-group {
  width:100%;
}
.search-form .search-input-group .input-group-btn button, .search-form .search-input-group button {
    margin: 0;
    top: 1px;
    right: 7px;
    height: 32px;
    padding: 0 0.75em;
    background: transparent;
    color: #505050;
    font-weight: 800;
    border-radius: 0 4rem 4rem 0;
    padding: 5px 15px;
    z-index: 99;
    position: absolute;
}


.search-form .search-input-group input {
  padding: 0.5em 1em;
}

.search-form .search-input button i {
  color: white;
  font-size: 20px !important;
  width: 20px !important;
}
.control-custom .checkbox.btn {
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    position: relative;
    top: 0;
    left: 5px;
    height: 1px;
    width: 28px;
    padding: 2px 7px;
    line-height: 18px;
}
.navbar-lang li a {
    text-transform: capitalize;
}

.navbar .nav .dropdown-toggle .caret {
  margin-top: 0;
}

.navbar .btn, .navbar .btn-group {
  margin-top: 7px;
}
.navbar .navbar-lang {
  margin-right: 0;
}
.dropdown-menu .divider {
    height: 2px;
  }
.navbar li.item-112:hover .dropdown-menu,
.navbar-lang li.dropdown:hover .dropdown-menu,
.navbar-nav li.item-119:hover .dropdown-menu {
    display: block;
}
.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
    background-color: transparent!important;
    box-shadow: none;
}
.navbar .dropdown-menu .divider {
  margin: 5px 0;
  border-bottom: 1px solid #e5e5e5;
}

.navbar .nav li.dropdown.active>.dropdown-toggle {
  background-color: #eeeeee;
  box-shadow: none;
  text-shadow: none;
}

.navbar .dropdown-menu a:hover, .navbar .dropdown-menu a:focus {
  background: #eeeeee;
}

.navbar .dropdown-menu > .active > a, .navbar .dropdown-menu > .active > a:hover, .navbar .dropdown-menu > .active > a:focus {
  background: #6e418e;
}

.navbar .nav li.dropdown:hover, .navbar .nav li.dropdown.open>.dropdown-toggle {
  background-color: #f4f7fa;
}
.wrapper.no-nav {
    background-image: none;
    padding: 0 15px;
}
.dropdown-menu>li>a {
    padding: 10px 20px!important;
}
img.gravatar{
  display: none!important;
}
span.facet {
    display: none!important;
}
.activity .item p {
    margin: 5px 0 0 40px;
}
.nav .open>a, .nav .open>a:focus, .nav .open>a:hover {
    background-color: inherit!important;
}
/* footer */

#content {
  margin-bottom: 40px;
  padding: 0 30px 30px 30px;
}

footer {
  position: relative;
}

html, body {
  height: 100%;  
}

body > .homepage {
  padding-top: 25px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: inherit;
    background-color: #f4f7fa;
    background-size: cover;
}

body > [role="main"] {
    min-height: 100%;
    height: auto;
    background-color: #f8f8f8;
    background-image: none;
}
i{
  font-style: initial;
}
.nav-facet .nav-item.active>a:after {
    width: 17px;
    height: 17px;
    background-position: 0px -16px;
    right: 10px;
}
.media-grid {
  background: none;
}
.m-top {
    margin-top: 15px;
    -moz-box-shadow: inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow: inset 0 0 24px #00000025;
    padding: 25px;
    background: #fafafa;
}
li.media-item {
    box-shadow: 0 0 1.25rem rgba(108,118,134,.1);
    border: 1px solid #ccc;
}
.media-view {
  border: none;
}
.media-grid.masonry .media-item.masonry-brick {
    background-color: #FFF;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: none!important;
}
.btn-danger {
    color: #fff;
    background-color: #e41a5b;
    border-color: #e41a5b;
}
.control-group.error input, .control-group.error select, .control-group.error textarea, .control-group.error .input-prepend .add-on, .control-group.error .input-append .add-on {
    border-color: #e41a5b;
}
.error-block {
    background: #e41a5b;
    margin: -3px 0 0;
    color: #ffffff;
    width: 208px;
}
.control-group.error .input-prepend .add-on, .control-group.error .input-append .add-on {
    color: #e41a5b;
    background-color: #f8dfeb;
    border-color: #e41a5b;
}
.page-header .content_action {
    float: right;
}
.stages li.active .highlight {
    color: #ffffff;
    background: #18ac90;
}
.particles-js-canvas-el{
      margin-top: -165px;
}

/* Bugfixes */
.wrapper:before {
  border:0 !important;
  z-index: 0;
}

[role=main] .secondary {
  padding-right:15px;
}
.toolbar .breadcrumb li:after {
  content: " / " !important;
}

.dataset-list {
  padding:0;
}

.media-custom-item {
  background-color: rgb(255, 255, 255);
  border-radius:2px;
  height:300px;
  padding:10px 15px;
  border: 1px solid #ccc;
  margin-bottom:40px;
  border-radius: 5px;
  box-shadow: none!important;
}


.media-custom-item .media-image{
  width: auto;
  max-width: 100%;
  height: 104px;
}

.media-custom-item .media-heading {
  font-size: 16px;
}

.media-custom-item p{
  font-size:12px;
}

.group-items:nth-child(3n+1) .media-heading{
    color: #6e428e;
}
.group-items:nth-child(3n+2) .media-heading{
    color: #e41a5b;
}
.group-items:nth-child(3n+3) .media-heading {
    color: #ff9933;
}
.media-grid_ {
  list-style: none;
  padding-left:0;
}

@media (max-width: 767px) {
  .particles-js-canvas-el {
    margin-top: -185px;
  }
}

.media-item {
    margin-bottom:10px;
    font-size: 12px;
    border-radius: 4px;
    box-shadow: 0 0 1.25rem rgba(108,118,134,.1);
    overflow: hidden;
    background-color: #fff;
    height: 300px;
        padding-bottom: 25px;
    width: 100%;
    margin: 10px 0;
    border: 1px solid #d6d6d6!important;
}
.media-item img{
  width: auto;
  margin: auto;
  display: block;
  max-height:100px;
}
.organization-img{
  margin-bottom: 15px;
  width: 175px;
  height: 104px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.media-view{
  border: none;
}
.media-grid {
     margin: 0; 
    zoom: 1;
    background: none;
    border: none;
}
.media-item span.count, .count {
  color: #e61f82;
  font-weight: 800;
  position: absolute;
  bottom: 60px;
  left: 10%;
}
.media-heading {
    margin-top: 15px;
    margin-bottom: 0px;
    font-size: 14px;
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 5px;
    font-size: 20px;
    min-height: 25px;
}
@media screen and (max-width: 767px) {
    .form-horizontal .control-group .control-label {
        display: block;
        width: auto;
    }
    .form-actions .btn {
        float: right;
        margin-top: 5px;
    }

    .stages li .highlight {
        text-indent: 0;
    }
    .navbar .container {
        padding: 0 15px;
        margin-left: 20px;
    }
    #t3-mainnav ul.nav li, #t3-mainnav ul.nav li .dropdown-menu {
        display: block;
        float: none;
    }
    #t3-mainnav ul.navbar-right {
        display: none;
    }
}
.page-header .content_action {
    float: right;
    margin-top: 5px;
    margin-right: 0px;
}
.tagline {
    height: 70px;
    margin: 25px;
}
/* reponsive menu */

#toggle-toc {
  z-index: 10;
  position: absolute;
  margin-top: -10px;
  border-radius: 0;
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  line-height: 50px;
  margin-left: 0px;
  background: transparent;
  color: #e41a5b;
  font-size: 20px;
  box-shadow: none;
}
#toggle-toc:focus {
  outline: none;
}
.dropdown-menu {
    position: absolute;
    top: 50px!important;
}
@media (max-width: 767px) {
  .container > .navbar-header {
    margin: 0 !important;
  }
  .page-header .nav-tabs {
    margin: 5px 10px 10px 0px;
  }
}

#toggle-container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 50px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  transition: left 0.2s ease-out;
  padding: 10px;
}

#off-nav {
  display: none;
  margin-bottom: 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  bottom: 0;
  margin-left: -230px;
  width: 230px;
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  border-right: 1px solid #aaa;
  background: #fff;
  transition: left 0.2s ease-out;
}

#off-nav i {
  margin: 0 15px 0 8px;
}

#off-nav a.logo {
  padding-bottom: 12px;
}

#off-nav ul ul.nav a {
  padding: 4px 4px 4px 56px;
}

#off-nav li.divider {
  margin: 12px 0;
  border-bottom: 2px solid #eee;
}

#off-nav li.divider.first {
  margin-top: 0;
}

@media (min-width: 980px) and (max-width: 1199px) {
  .homepage .content-bloc .bloc {
    margin-left: 34px;
  }
  .homepage .content-bloc .bloc.first {
    margin-left: 15px;
  }
  .homepage .content-bloc .resource-blocs .resource-bloc:first-of-type {
    margin-left: 13px;
  }
}

@media (min-width: 768px) and (max-width: 979px) {
  .homepage .content-bloc .bloc {
    margin-left: 19px;
    height: 25em;
  }
  .homepage .content-bloc .bloc.first {
    margin-left: 20px;
  }
  .homepage .content-bloc .resource-blocs .resource-bloc:first-of-type {
    margin-left: 20px;
  }
  .homepage .content-bloc .resource-blocs .resource-bloc {
    margin-left: 9px;
  }
  [role=main] .primary {
    float: initial;
}
}

body.toc-open #toggle-container, body.toc-open #off-nav {
  left: 230px;
}
@media (max-width: 767px) {
  [role=main] .primary {
    float: initial;
  }
  #t3-mainnav {
    display: none;
  }
  #toggle-container, #off-nav {
    display: block;
  }
  .homepage .content-bloc .bloc {
    margin-left: 0px;
    height: auto;
    padding-bottom: 1em;
  }
  .homepage .content-bloc .bloc.first {
    margin-left: 0px;
  }
  .homepage .content-bloc .resource-blocs .resource-bloc:first-of-type {
    margin-left: 0px;
  }
  .homepage .content-bloc .resource-blocs .resource-bloc {
    margin-left: 0px;
  }
  .homepage .content-bloc .resource-blocs {
    display: flex;
    flex-direction: column;
  }
  .header{
    display: none;
  }
  .stats__card {
    padding: 14px;
    width: 130px;
    height: 130px;
    margin-bottom: 30px;
  }
  .stats__card .text-big {
    font-size: 40px;
  }
  .numbers__title {
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 0px;
  }
}

/* fix CKAN responsive issues */

@media (max-width: 767px) {
  body {
    padding-left: 0;
    padding-right: 0;
  }
  .toolbar .breadcrumb, .toolbar .breadcrumb a {
    color: #505050;
    text-shadow: 0 1px 0 #ffffff;
  }
  .toolbar .breadcrumb .home {
    display: inline-block;
  }

}

.homepage.layout-1 .row1 .col2, .homepage.layout-1 .row2 .col2 {
  position: relative;
}

@media (max-width: 767px) {
  .homepage.layout-1 .row1 .col1 {
    margin-top: 16px;
  }
}

@media (max-width: 830px) {
  .hidden-menu-table {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .row1 .col1, .row2 .col1  {
    margin-bottom: 20px;
  }
}

@media (min-width: 980px) and (min-width: 1199px) {
  .primary.span12 {
    width: 940px;
  }
}

@media (min-width: 768px) and (max-width: 979px) {
  .primary.span12 {
    width: 724px;
  }
}

@media (max-width: 767px) {
  .primary.span12 {
    width: 100%;
  }
}

.wrapper {
  border-radius: 0;
  -webkit-border-radius: 0;
  border: none;
}

@media (min-width: 1199px) {
  .row.wrapper {
    background-position: 50px top;
  }
}

@media (max-width: 768px){
  .js [role=main] .secondary .filters>div {
    padding: 15px 20px;
  }
}
