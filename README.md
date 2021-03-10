# Code Test Instructions

Use JavaScript, React, and CSS to complete the following prompt.

DO NOT use other libraries or packages. This includes state management (redux), styling, routing, etc.
<!-- - DO NOT use the codesandbox upload feature. Complete the entire exercise using codesandbox. -->

## Prompt

You run a restaurant selling sandwiches and need some way of keeping track orders.

Create a React app that allows your employees to create new orders and show when they've been picked up.

1. Create a form where a user can create orders.
   - [ ] A user should be able to see each sandwich and how much they cost.
   - [ ] A user should be able to add sandwiches to the order using a button.
   - [ ] A user should not be able to add a sandwich we don't have ingredients for (see data.json).
   - [ ] A user should be able to see all items in an order.
   - [ ] A user should be able to see the total cost of the order.
   - [ ] A user should be able to complete the order using a button.
2. Create a component that display all active orders.
   - [ ] A user should be able to see all "open" orders.
   - [ ] A user should be able to uniquely identify orders from one another.
   - [ ] A user should be able to see all items in an order.
   - [ ] A user should be able to see the total cost of the order.
   - [ ] A user should be able to mark the order as "picked-up" by clicking a button.
   - [ ] A user should be able to clearly distinguish "open" and "picked-up" orders.

<hr />

# README

**⚠️ Note:** The following is written as if I was on a team.

## General Naming Conventions

### DAMP (Descriptive And Meaningful Phrases).

Prefer readability for other developers over less typing for yourself. Abbreviations that have become standalone words like `param` and `config` are OK, as are counters like `i` and `j`. But otherwise, aim to decrease the cognitive load for reading your code, e.g. `event` over `e`, `error` over `err`, `populationData` over `data`.

#### Examples

##### HTML/CSS:

```html
<h2 class="sh">Section Header</h2>
<!-- Bad -->
<h2 class="section-header">Section Header</h2>
<!-- Good -->
```

##### JavaScript:

```js
const newElCmpShrtNm = "Header"; // Bad
const newElementComponentShortName = "Header"; // Good
```

## Programming Conventions

**⚠️ Note:** This is not true since I can’t load external libraries, but it’s what I would write normally.

Consistent and readable JavaScript formatting is enforced by [`eslint-config-hughx`](https://github.com/hguiney/eslint-config-hughx) + an ESLint auto-formatter of your choice, such as [ESLint for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Functional Programming

Use Functional Programming principals as often as possible to aid maintainability and predictability. The basic idea is for every function to produce the same output for a given set of inputs regardless of when/where/how often they are called. This means a preference for functions taking their values from explicit parameters as opposed to reading variables from the surrounding scope. Additionally, a function should not produce side-effects by e.g. changing the value of a variable in the surrounding scope.

### Directory Layout

- `public/`: Static files such as images, favicon, etc. that are copied to the server root on deploy.
- `src/`: React source.
  - `components/`: React components.
  - `data/`: Flat-file JSON database.
  - `util/`: Utility functions.
  - `index.js`: React entrypoint.
- `README.md`: Project documentation (this file).
  - `package.json`: Project metadata/NPM dependencies.

### Component Layout

Every React component consists of the following structure:

- `Component/`
  - `__tests__`: Integration tests (optional)
  - `Component.css`: CSS styling
  - `Component.test.js`: Unit test
  - `index.js`: React component
  - `methods.js`: Any methods that don’t need to go in the render function, for tidiness. (optional)

## CSS Conventions

### BEM Methodology

Vanilla BEM (Block-Element-Modifier):

- Blocks: Lowercase name (`block`)
- Elements: two underscores appended to block (`block__element`)
- Modifiers: two dashes appended to block or element (`block--modifier`, `block__element--modifier`).

When writing modifiers, ensure the base class is also present; modifiers should not mean anything on their own. This also gives modifiers higher specificity than regular classes, which helps ensure that they actually get applied.

```scss
.block--modifier {
} // Bad
.block.block--modifier {
} // Good
```

An exception to this would be for mixin classes that are intended to be used broadly. For example, responsive utilities to show/hide elements at different breakpoints:

```scss
.--hide-until-large {
  display: none;
}
@media screen and (min-width: $large) {
  .--hide-until-large {
    display: inline-block; // IE/Edge compat
    display: unset;
  }
}
```

Don’t reflect the expected DOM structure in class names, as this expectation is likely to break as projects evolve. Only indicate which block owns the element. This allows components to be transposable and avoids extremely long class names.

```scss
.block__element__subelement {
} // Bad
.block__subelement {
} // Good
```
