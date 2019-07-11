import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import { handleReceiveLanguages } from '../actions/languages';
import Banner from './Banner';
import Nav from './Nav';
import Home from './Home';
import Results from './Results';
import Details from './Details';
import Page from './Page';
import NoMatch from './NoMatch';
import Footer from './Footer';

const StyledApp = styled.div`
  ${tw`font-sans text-gray-900 leading-normal overflow-hidden`}
`;

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleReceiveLanguages());
  }

  render() {
    return (
      <StyledApp>
        <Banner />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/details" component={Details} />
          <Route path="/content/:pageId" component={Page} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </StyledApp>
    );
  }
}

export default connect()(App);
