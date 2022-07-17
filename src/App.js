import React from "react"
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";


class App extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
        items: [
          {
            id:1,
            title: 'Стул',
            img: 'Chair.jpg',
            desc: 'lorem ipsum dolor',
            category: 'chairs',
            price: '49.99'

          },
          {
            id:2,
            title: 'Стол',
            img: 'Table.jpg',
            desc: 'lorem ipsum dolor',
            category: 'tables',
            price: '149.99',

          },
          {
            id:3,
            title: 'Диван',
            img: 'Sofa.jpg',
            desc: 'lorem ipsum dolor',
            category: 'sofa',
            price: '49.99'

          },
          
        ]
      }
   }
  render () {
  return (
    <div className="wrapper"> 
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
   );
   }
}

export default App;
