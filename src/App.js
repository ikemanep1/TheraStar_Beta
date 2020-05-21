import React from 'react';
import Map from './components/Map';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleList from './components/ArticleList';
import CoronaArticleList from './components/CoronaArticleList';
import MhpList from './components/MhpList';
import ReviewList from './components/ReviewList';
import NewArticleControl from './components/NewArticleControl';
import NewReviewControl from './components/NewReviewControl';
import NewMhpControl from './components/NewMhpControl';
import Error404 from './components/Error404';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state1Items: [],
      state2Items: [],
      state3Items: [],
      state4Items: [],
      isLoaded: false,
    }
  };

  componentDidMount() {
    fetch('https://shrouded-stream-63622.herokuapp.com/mhps')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        state1Items: json,
      })
      console.log(this.state.state1Items[0])
    });
    fetch('https://shrouded-stream-63622.herokuapp.com/articles')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        state2Items: json,
      })
    });
    fetch('https://shrouded-stream-63622.herokuapp.com/reviews')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        state3Items: json,
      })
    });
    // fetch('http://localhost:3000/coronalinks')
    // .then(res => res.json())
    // .then(json => {
    //   this.setState({
    //     isLoaded: true,
    //     state4Items: json,
    //   })
    // });
  }

  render() {

    const mhpSingular = {
      margin: '40px',
      textAlign: 'center',
      backgroundColor: '#7a387a',
      padding: '20px',
      borderRadius: '100px',
      border: '3px solid #ddb0dd',
      fontFamily: 'luminari, fantasy',
      color: '#fdfdff'
    }
    const { isLoaded } = this.state;
    if (!isLoaded) {
      return <div style={mhpSingular}>Loading</div>;
    }

    else {
      return (
        <div className="App">
        <div className="HomeStretch">
        <Header />
        <header className="TheraStar">
        </header>
        <div>
        <Switch>
        <Route exact path='/' render={() =>< Map mhpTotal= {this.state.state1Items} />}/>
        <Route exact path='/mhplist' render={() =>< MhpList mhpTotal = {this.state.state1Items} />}/>
        <Route exact path='/articlelist' render={() =>< ArticleList articleTotal = {this.state.state2Items} />}/>
        <Route exact path='/reviewlist' render={() =>< ReviewList reviewTotal = {this.state.state3Items} />}/>
        {/* <Route exact path='/coronaarticlelist' render={() =>< CoronaArticleList coronaArticleTotal = {this.state.state4Items} />}/> */}
        <Route path='/mhpadd' render={()=>< NewMhpControl />} />
        <Route path='/articleadd' render={()=>< NewArticleControl />} />
        <Route path='/reviewadd' render={()=>< NewReviewControl />} />
        <Route component={Error404} />
        </Switch>
        <Footer />
        </div>
        </div>
        </div>
      );
    }
  }
}

export default App;
