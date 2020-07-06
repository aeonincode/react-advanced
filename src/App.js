// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // import Movie from './hoc/Movie';
// //import Counter from './hooks/Counter';
// import Users from './hooks/Users';

// function App() {
//   //return <Movie id={1} />;
//   //return <Counter />;
//   return <Users />;
// }

// export default App;

import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';

class App extends Component {
  state = { currentUser: { name: 'Xerx' } };

  render() {
    return (
      <UserContext.Provider value={this.state.currentUser}>
        <div>
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
