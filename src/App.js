import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component'

import SearchBox from './components/search-box/search-box.component'

import EnlargedPicture from './components/enlarged-picture/enlarged-picture.component'

import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
      searchField: "",
      enlargedPicture:
      {
        show: false,
        url: ""
      }
    }
  }


  async componentDidMount() {
    const API_KEY = "17858990-0d6c088ba5028789850f3a8af";

    const url = `https://pixabay.com/api/?key=${API_KEY}&safesearch=true&per_page=200&image_type=photo`;

    const request = await fetch(url)

    const response = await request.json();
    this.setState({ pictures: response.hits })

    console.log(this.state.pictures, this.state.enlargedPicture);

  }

  // componentDidMount() {
  //   const API_KEY = "17858990-0d6c088ba5028789850f3a8af";

  //   const url = `https://pixabay.com/api/?key=${API_KEY}&safesearch=true&per_page=200&image_type=photo`;

  //   fetch(url)
  //     .then(request => request.json())
  //     .then(response => this.setState({ pictures: response.hits }))
  //     .then(console.log(this.state.pictures, this.state.enlargedPicture));

  // }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })

  }


  showPicture = (url) => {

    const { show } = this.state.enlargedPicture;
    if (!show) {
      this.setState(
        {
          enlargedPicture:
          {
            show: !show,
            url: url
          }
        }
      )
    }
    else {
      this.setState(
        {
          enlargedPicture:
          {
            show: !show,
            url: ""
          }
        }
      )

    }
  };



  render() {
    const { pictures, searchField, enlargedPicture: { show, url } } = this.state;

    const filteredPictures = pictures.filter(picture => picture.tags.toLowerCase().includes(searchField.toLowerCase())
    );


    return (

      <div className="App">
        <h1>Search Pictures</h1>
        <SearchBox
          placeholder="search pictures by tags"
          handleChange={this.handleChange}
        />
        <CardList pictures={filteredPictures} showPicture={this.showPicture} />

        {show && <EnlargedPicture url={url} show={show} hidePicture={this.showPicture} />}


      </div>
    )
  }
}



export default App;
