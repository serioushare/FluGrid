# FluGrid (Fluid Columns and Grids)

### About FluGrid

FluGrid aims to offer a simple JavaScript library to build fluid column and grid layouts, without the need of any JavaScript knowledge. All the designer/developer of the site has to use are a simple set of custom html tags.

The first feature that will be implemented is the column layout. This layout will create a series of columns and fill them with the given content (<hn>, <p>, <div> tags for instance). It will first create a hidden test column with the exact same styling and, most importantly, the max dimentions of a single column. It than fills the column word after word, till the actual size of the test column reaches the max-height. Once that point is reached it copies the content to the first column, clears itself and starts where it left of, filling the test column for the second run. And so on till it finished. The result should look somewhat like the picture below.

![readme-image-1](https://cloud.githubusercontent.com/assets/3801567/7186072/79ca665a-e467-11e4-8eb7-c9add87c6d7f.png)

### Current State

There is currently a working prototype version, altho it parses line by line (puntion based, not code based). It's not Object Oriënted yet, has some minor height interpertation issues (margin/padding not included yet) so keep some distance. The prototype only parses <p> tags and copies other tags directly.

A demonstration of the setup of a simple column layout can be found at these links.
* Hosted: http://flugrid.serioushare.com/Demos/demo_flugrid_proto.html
* Source: https://github.com/serioushare/FluGrid/blob/master/FluGrid%20Webdomain/Demos/demo_flugrid_proto.html

