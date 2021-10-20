# Getting Started

* Make sure you have node.js installed 
* Cd into order-app 
* Run `npm install`
* Run `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### BEM

Use BEM styles for all your components

1. Block: the component, your root-class
2. Element: an item in your component. Basically everything is an element - there are no grandchild elements. Each element is related to its block.
3. Modifier: a modifier goes on a block or element to provide variations on the base style

## Testing

### Unit Testing

Use Jest + Enzyme for unit tests. Follow the file and folder conventions demonstrated in Home Hero:

```
components/
          Landing/
                  __tests__/
                            Landing.spec.js
                  index.jsx
                  style.scss
```

Use snapshot tests for simple display components - this just ensures no unexpected changes. Any complex functionality should have unit tests with appropriate inputs. Whenever possible, test the component, not the internal functions.

## Branching
For branching, use the following naming conventions: 
feature/FB-1-featured-drink 
OR 
bug/FB-102-styling-issues

For development, always branch off of the develop branch and create Pull Requests that merge back into develop. 
## Before you push
1. Run npm run lint or npm run lint:fix and make sure there are no errors
2. Run npm run test and make sure all tests are passing 
3. Run a test in Lighthouse to make sure your new page / component meets accessibility standards
4. Test your application in all in-scope browsers
5. Test your application in all in-scope screen sizes