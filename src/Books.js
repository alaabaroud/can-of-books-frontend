// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// class Books extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       books: [],
//       showbooksComponent: false,
//       server: process.env.REACT_APP_SERVER_URL
//     }
//   }

//   getBooks = async (event) => {
//     event.preventDefault();
//     try {
//       const paramsObj = {
//         name: event.target.ownerName.value
//       }
//       const cats = await axios.get(`${this.state.server}/cat`, { params: paramsObj });
//       this.setState({
//         cats: cats.data,
//         showCatsComponent: true
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }




//   render() {
//     return(
//       <>

//       </>
//     )
//   }
// }

// export default Books;