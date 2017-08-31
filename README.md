![cf](https://i.imgur.com/7v5ASc8.png) 29: UI Styling
======

## Submission Instructions
* continue working on the fork you created from lab 26
* open a **new branch** for today's assignment
* upon completion, create a **new pull request** in github
* submit a link to your PR in canvas

## Learning Objectives
* students will be able to use SCSS to create component based and modular CSS styles
* students will be able to *generally* conform to the SMACCS principles for creating base, layout, and theme containers for their application styles
* students will be able to create and use global SCSS variables for reusable styles
* students will be able to create meaningful component tests through the use of **jest** and **enzyme**

## Requirements
#### Configuration  
* `README.md`
* `.babelrc`
* `.gitignore`
* `package.json`
* `webpack.config.js`
* `src/**`
* `src/main.js`
* `src/style`
  * *see feature tasks below for style directory requirements*

## Requirements  
#### Feature Tasks
* style your entire budget tracker app!
* all component styling should be contained within a related `.scss` partial
  * ie: `_my-component.scss`, `_dashboard-container.scss`, etc
* all component styles should be imported into the component's `index.js` file
  * ie: `import './_my-component.scss'`
* all generic base, element, and layout styles should be organized as follows:
  * **style**
    * **lib**
      * `_vars.scss`
    * **base**
      * `_reset.scss`
      * `_base.scss`
    * **layout**
      * `_header.scss`
      * `_footer.scss`
      * `_content.scss`
* your `/lib/_vars.scss` partial should include the following variables:
  * `$primary` - primary app color
  * `$secondary` - secondary app color
  * `$btn-primary` - primary button color
  * `$gutter` - generic padding/margin gutter for formatting (ie: 20px)
  * feel free to add any additional vars that you deem necessary for your app

#### Bonus
* **1pt:** - use `@extend` to extend an elements styles and apply to another element
* **1pt:** - create a custom mixin for the handling of vendor prefixes (you may **not** use the example below)
  * ie:
  ```
  @mixin border-radius($radius) {
    -moz-border-radius: $radius;
    -webkit-border-radius: $radius;
    border-radius: $radius;
  }
  ```
