import { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      selection: null,
    }

    this.selectBlog = this.selectBlog.bind(this)

  }

  componentDidMount() {
    const blogs = [
      { title: 'Dogs',
        article: 'A lot of text here that just keeps going to fill up the area to make it a more substatial field of text for testing purposes.',
      },
      { title: 'Cats',
        article: 'A lot of text here',
      },
      { title: 'Weasels',
        article: 'A lot of text here',
      },
    ];


    this.setState({ blogs })
  }


  selectBlog(event) {
    const index = Number(event.currentTarget.dataset.index);
    this.setState({ selection: this.state.blogs[index] })
  }


  render() {
    const blogs = this.state.blogs.map((blog, index) => (
      <li key={index} onClick={this.selectBlog} data-index={index}>
        <h2>{blog.title}</h2>
      </li>
    ));
    return (
      <>
        <ul>{ blogs }</ul>
        <aside>
          <h2>{this.state.selection?.title}</h2>
          <p>{this.state.selection?.article}</p>
        </aside>
      </>
    )
  }

  }


export default App;
