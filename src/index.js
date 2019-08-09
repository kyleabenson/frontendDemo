import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// eslint-disable-next-line no-unused-vars
import AwsSliderStyles from 'react-awesome-slider/src/core/styles.scss';



const style = {
  backgroundColor: '#ff5850',
  color: 'white',
  fontFamily: 'Red Hat Display'
}
// const style2 = {
//   backgroundColor: '#0c98a0',
// }


// const ourNames = [
//   {"id": 1, "name": "Kyle Benson"},
//   {"id": 2, "name": "Colin McNaughton"},
//   {"id": 3, "name": "Brian Coursen"},
//   {"id": 4, "name": "Peter Sprygada"}
// ]


class NameDiv extends React.Component {
  state = {
      loading: false,
      data: []
  }
  
  componentDidMount() {
    this.setState({loading: true})
    fetch('https://api.github.com/repos/ansible/ansible/contributors')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
  }
  
  render (){
    const { names } = this.props
    return (
        <section>
            {this.state.loading
            ? <div style={style}>"Hang tight, we're loading..."</div>
            : <AwesomeSlider bullets= {false} fillParent= {true}>
            {this.state.data.map(
             (user) =>
               <div style={style} >
                 <h1>{user.login}</h1>
                 <img src={user.avatar_url} height={100} width={100}/>
               </div>
           )}
       </AwesomeSlider>
        }
        </section>
      
    )  
  }
}




// ReactDOM.render( <NameDiv names={ourNames}/>, document.getElementById('root'));
ReactDOM.render( <NameDiv />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();