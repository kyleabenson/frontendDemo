import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem';

var dataEndpoint = process.env.REACT_APP_EXPRESS_URL;

class App extends Component {
  state = {
    loading: false,
    data: []
  } 

  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
    this.setState({loading: true})
    fetch(dataEndpoint)
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
  }
  
  render() {
    return (
      <div className='app-outer'>
        {this.state.loading
            ? <div>"Hang tight, we're loading..."</div>
            : <div className='app-inner'>
                <h1>Thanks for attending</h1>
                <TagCloud 
                  className='tag-cloud'
                  style={{
                    fontFamily: 'Red Hat Display',
                    // fontSize: () => Math.round(Math.random() * 50) + 16,
                    color: 'white',
                    padding: 5,
                  }}>
                  {this.state.data.map(
                    user =>
                    <CloudItem text={user.first_name + " " + user.last_name} />
                  )}  
                </TagCloud>
              </div>
        }     
        </div>
    );
  }
}

export default App;
