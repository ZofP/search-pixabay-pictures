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
        url: "",
        id: null
      }
    }
  }


  async componentDidMount() {
    const API_KEY = "17858990-0d6c088ba5028789850f3a8af";

    const url = `https://pixabay.com/api/?key=${API_KEY}&safesearch=true&per_page=200&image_type=photo`;

    const request = await fetch(url)

    const response = await request.json();
    this.setState({ pictures: response.hits })


  }



  handleChange = (e) => {
    this.setState({ searchField: e.target.value })

  }


  handleClick = (direction, url, id, arrow, event) => {
    const { pictures, enlargedPicture: { show } } = this.state;
    const indexArray = pictures.map((picture) => picture.id);
    const currentPicture = pictures[indexArray.indexOf(id)];


    if (!show) {
      console.log("this is showPicture method: ", show);
      this.setState(
        {
          enlargedPicture:
          {
            show: !show,
            url: url,
            id: id
          }
        }
        , () => console.log("this is showPicture method: ", this.state.enlargedPicture.show))
    }
    else if (event.target.id != id) {
      console.log(event.target.id, id);

      console.log("this is hidePicture method - arrow was: ", arrow)
      // event.stopPropagation();
      this.setState(
        {
          enlargedPicture:
          {
            show: !show,
            url: "",
            id: null
          }
        }
      )

    }


    else {
      console.log(arrow);
      switch (direction) {
        case "left":
          const previousPicture = (indexArray.indexOf(id) !== 0) ? pictures[indexArray.indexOf(id) - 1] : currentPicture;
          this.setState(
            {

              enlargedPicture:
              {
                show: true,
                url: previousPicture.webformatURL,
                id: previousPicture.id
              }

            })
          break;

        case "right":
          const nextPicture = (indexArray.indexOf(id) <= indexArray.length) ? pictures[indexArray.indexOf(id) + 1] : currentPicture
          this.setState(
            {
              enlargedPicture:
              {
                show: true,
                url: nextPicture.webformatURL,
                id: nextPicture.id
              }

            })
          break;
        default: return
      }
    }
  }


  render() {
    const { pictures, searchField, enlargedPicture: { show, url, id } } = this.state;

    const filteredPictures = pictures.filter(picture => picture.tags.toLowerCase().includes(searchField.toLowerCase())
    );


    return (

      <div className="App">
        <h1>Search Pictures</h1>
        <SearchBox
          placeholder="search pictures by tags"
          handleChange={this.handleChange}
        />
        <CardList pictures={filteredPictures} showPicture={this.handleClick} />

        {show && <EnlargedPicture id={id} url={url} show={show} hidePicture={this.handleClick} handleClickArrow={this.handleClick} />}


      </div>
    )
  }
}



export default App;
