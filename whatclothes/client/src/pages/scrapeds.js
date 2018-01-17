import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";





class Scrapeds extends Component {

    state = {
      scrapeds: [],
      photo: "",
      author: "",
      synopsis: ""
    };

    componentDidMount() {
        this.loadscrapeds();
      }
    
      loadscrapeds = () => {
        API.getScrapeds()
          .then(res =>
            this.setState({ scrapeds: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };

//have a scraped page



render() {
return (

<Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.scrapeds.length ? (
<List>
{this.state.scrapeds.map(scraped => (
  <ListItem key={scrapeds._id}>
    <Link to={"/scraped/" + scraped._id}>
      <strong>
        {scraped.photo} by {scraped.author}
      </strong>
    </Link>
    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
  </ListItem>
))}
</List>
            ) : (
                <h3>No Results to Display</h3>
              )}
</Col>
);
}      
}    
//scrapeds = schema

export default Scrapeds;