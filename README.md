# React Alarms

Running at https://react-alarms.herokuapp.com

## Client Details

### Structure

* Bootstrapped with _create-react-app_
* Routing with React Router v4 (via react-router-dom)
* Separates components into two folders: _components_ (components visible in the UI) and _containers_ (components that simply hold the presentational components/state)
* Tests located in \_tests\_ folder

* Redux files located in actions/reducers folders
* Uses the combineReducers function to map the result of the individual reducers to props and to combine those to a single state object

* Contains a small helpers folder/file for doing things like formatting dates

### Styling

* Replaces original index.css content with Normalize.css
* Uses BEM syntax for styles (everything that needs to be styled assigned one descriptive class)

## Server Details

### Structure

* Uses express.Router() for routes contained in _routes_ folder; routes connected to controllers in _controllers_ folder
* Names of router files correspond to names of controller files (i.e. logs.js in routes folder is hooked up to controller named logs.js in controllers folder)
* Comments for the function of each route in API (namely, the API endpoint, a description of what it does, and whether it is public or private)
