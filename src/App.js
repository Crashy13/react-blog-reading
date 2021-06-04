import { Component } from 'react';
import './App.css';
import BlogList from './BlogList';
import BlogForm from './BlogForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    }
    this.addBlog = this.addBlog.bind(this);
  }

  componentDidMount() {
    const blogs = [
      { title: 'Marvel',
        article: 'A lot of text here',
      },
      { title: 'DC',
        article: 'A lot of text here',
      },
      { title: 'Star Wars',
        article: 'A lot of text here',
      },
    ];

    this.setState({ blogs })
  }

  addBlog(blog) {
    const blogs = [ ...this.state.blogs ];
    blogs.push(blog);
    this.setState({ blogs });
  }

  render() {
    return (
      <>
        <h1>Blog Posts</h1>
        <BlogForm addBlog={this.addBlog}/>
        <BlogList blogs={this.state.blogs} />
      </>
    )
  }

  }


export default App;
