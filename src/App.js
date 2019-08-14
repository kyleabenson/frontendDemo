import React, { Component } from 'react';
import TagCloud from 'react-tag-cloud';
import CloudItem from './CloudItem';

if (process.env.EXPRESS_URL) {
  var dataEndpoint = process.env.EXPRESS_URL;
}
else {
  dataEndpoint ='https://api.github.com/repos/ansible/ansible/contributors';
};

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
                    <CloudItem text={user.login} />
                  )}  
                </TagCloud>
              </div>
        }     
        </div>
    );
  }
}

export default App;
