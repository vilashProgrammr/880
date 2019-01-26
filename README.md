# House Targareact

A simple ongoing project to prepare us all for winter and to allow me to practise my new React knowledge. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Goals

To build my first React project without a tutorial. I'm not going to take on learning Jest for testing yet, one thing at a time. 

## Features 

There are characters and an arsenal. 
  
## Architecture 

- There's one source of truth - the App component, which holds all the states. 
- The App component renders the Character components, which, in turn, renders the Description components
- The App also renders the Arsenal components. 

## Future Improvements

- Perhaps change Arsenal class to a stateless functional component
- The weapon buttons should probably be a component, as there's a lot of repetition of them. 
- Implement some sort of game
- Learn Jest and test it

## To run

In the project directory, run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
