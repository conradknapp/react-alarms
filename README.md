# React Alarms

## Client Details

### Structure

* Bootstrapped with _create-react-app_
* Routing with React Router v4 (via react-router-dom)
* Separates components into two folders: _components_ (components visible in the UI) and _containers_ (components that simply hold the presentational components/state)
* Tests located in \_tests\_ folder

### Styling

* Replaces original index.css content with Normalize.css

## Server Details

### Structure

* Uses express.Router() for routes contained in _routes_ folder; routes connected to controllers in _controllers_ folder
* Names of router files correspond to names of controller files (i.e. logs.js in routes folder is hooked up to controller named logs.js in controllers folder)
* Comments for the function of each route in API (namely, the API endpoint, a description of what it does, and whether it is public or private)
