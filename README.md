# Open Style
A starter kit for website styling, enjoy it!

## CSS
* normalize.css makes browsers render all elements more consistently and in line with modern standards
* style.css is a ready to use (all-in-one) version, if you want to use specific helpers, please use sass version

## SASS
(comment out the one you do not need in main.scss)
* variables.scss - customize variables such as color, font size, etc.
* helpers.scss - helper classes
* grids.scss - a grid system
* elements.scss - small components such as button, form inputs, etc.
* components.scss - larger components such as navigation bar and dropdown, etc.

## Customization
Change variables in variables.scss and run
```
sass --watch sass/main.scss:css/style.css
```