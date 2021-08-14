import React, { Component } from 'react'

class DeletBooks extends Component {
    render() {
        return (
            <>
                { this.props.showBooks &&
                    this.props.book.map((books, idx) => {
                        return (
                            <div key={idx}>
                                <div>
                                    
                                   
                                    <button onClick={() => this.props.deleteBook(idx)}>X</button>
                                
                                </div>
                                
                                {/* <p>cat breed: {cat.breed}</p> */}
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default DeletBooks;