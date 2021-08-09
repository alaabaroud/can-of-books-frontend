import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem"
// import axios from 'axios';

class Books extends React.Component {
  render() {
    return (

this.props.arr && this.props.arr.map((item,index)=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{item.book[index].title}</Card.Title>
          <Card.Text>
          {item.book[index].description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> {item.book[index].status}</ListGroupItem>
        
        </ListGroup>
        
      </Card>
    )
})
    );
  }
}

export default Books;

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
