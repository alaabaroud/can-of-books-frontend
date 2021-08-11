import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem"


class Books extends React.Component {
  render() {
    return (
    <>
<CardColumns>{
this.props.arr.map((item,index)=>{
  return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
         
          <Card.Text>
          {item.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> {item.status}</ListGroupItem>
        
        </ListGroup>
        
      </Card>
  )
})
  }
</CardColumns>

</>
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
