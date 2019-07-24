import React, { Component } from 'react';
import Geosuggest from 'react-geosuggest';
import styled from 'styled-components/macro';
import tw from 'tailwind.macro';
import Label from './Label';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = { noResultsWarning: false };
  }

  handleFocus = () => {
    this.props.input.onChange('');
    this._geoSuggest.clear();
  };

  handleSuggest = suggest => {
    this.props.input.onChange(suggest || '');
  };

  handleNoResults = () => {
    if (this._geoSuggest.state.userInput) {
      this.setState({ noResultsWarning: true });
    }
  };

  onUpdateSuggests = suggests => {
    if (suggests.length) {
      this.setState({ noResultsWarning: false });
    }
  };

  render() {
    const { input, label, placeholder } = this.props;
    const showWarning = this.state.noResultsWarning;

    return (
      <div>
        <Label name={input.name} label={label} />
        <LocationContainer>
          <Geosuggest
            name={input.name}
            ref={el => (this._geoSuggest = el)}
            placeholder={placeholder}
            country={['us', 'pr', 'vi', 'gu', 'mp', 'as']}
            types={['(regions)']}
            placeDetailFields={[]}
            autoActivateFirstSuggest={true}
            queryDelay={100}
            onFocus={this.handleFocus}
            onUpdateSuggests={this.onUpdateSuggests}
            onSuggestSelect={this.handleSuggest}
            onSuggestNoResults={this.handleNoResults}
          />{' '}
          {showWarning && (
            <div css={tw`text-red-500 text-s`}>
              Please enter a city or postal code and select one of the results
              <br />
              If you need help finding treatment, call us 1-800-662-HELP (4357)
            </div>
          )}
        </LocationContainer>
      </div>
    );
  }
}

const LocationContainer = styled.div`
  .geosuggest {
    ${tw`relative`}
  }
  label {
    ${tw`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2`}
  }
  input {
    ${tw`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
  }
  .geosuggest__suggests {
    ${tw`border border-gray-500`}
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 25em;
    padding: 0;
    margin-top: -1px;
    background: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;
    z-index: 5;
    -webkit-transition: max-height 0.2s, border 0.2s;
    transition: max-height 0.2s, border 0.2s;
  }
  .geosuggest__suggests--hidden {
    max-height: 0;
    overflow: hidden;
    border-width: 0;
  }
  .geosuggest__item {
    padding: 0.5em 0.65em;
    cursor: pointer;
  }
  .geosuggest__item:hover,
  .geosuggest__item:focus {
    background: #f5f5f5;
  }
  .geosuggest__item--active {
    background: #267dc0;
    color: #fff;
  }
  .geosuggest__item--active:hover,
  .geosuggest__item--active:focus {
    background: #ccc;
  }
  .geosuggest__item__matched-text {
    font-weight: bold;
  }
`;

export default Location;
