import React, { Component } from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components/macro';
import { PropTypes } from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from '@fortawesome/free-solid-svg-icons';

import ScreenContext from '../ScreenContext';
import HeaderHelpLine from './HeaderHelpLine';

const StyledLink = styled(NavLink)`
  ${tw`text-gray-dark pb-2 px-2 mr-2 border-b-4 border-transparent hover:border-blue hover:text-gray-dark`}

  &.active {
    ${tw`font-bold text-blue border-blue`}
  }
`;

const StyledMenu = styled.div`
  ${tw`relative`}

  .active {
    ${tw`font-bold text-blue`}
  }

  .bm-burger-button {
    ${tw`h-5 w-5 absolute right-0 top-0 mt-px`}
  }

  .bm-burger-bars {
    ${tw`bg-gray-dark`}

    &-hover {
      ${tw`bg-gray-dark`}
    }
  }

  .bm-cross-button {
    ${tw`h-4 w-4`}
  }

  .bm-cross {
    ${tw`bg-gray`}
  }

  .bm-menu-wrap {
    ${tw`top-0`}
  }

  .bm-menu {
    ${tw`bg-white`}
  }

  .bm-item-list {
    ${tw`pt-10`}
  }

  .bm-item {
    ${tw`h-full`}
  }

  .bm-overlay {
    ${tw`inset-0`}
    background: 'rgba(0, 0, 0, 0.3)';
  }
`;

const desktopLinks = [
  { name: 'Search for treatment', path: '/results' },
  { name: 'Understanding addiction', path: '/content/understanding-addiction' },
  { name: 'Treatment options', path: '/content/treatment-options' },
  { name: 'Paying for treatment', path: '/content/paying-for-treatment' }
];

const mobileLinks = [
  { name: 'Home', path: '/', exact: true },
  { name: 'Search for treatment', path: '/results' },
  { name: 'Understanding addiction', path: '/content/understanding-addiction' },
  {
    name: 'Understanding mental health',
    path: '/content/understanding-mental-health'
  },
  { name: 'Treatment options', path: '/content/treatment-options' },
  { name: 'Paying for treatment', path: '/content/paying-for-treatment' }
];

export class HeaderNav extends Component {
  state = {
    menuOpen: false
  };

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  renderDesktopLink = link => (
    <StyledLink to={link.path} css={tw`flex-none`}>
      {link.name}
    </StyledLink>
  );

  renderMobileLink = link => (
    <NavLink
      exact={link.exact}
      to={link.path}
      onClick={() => this.closeMenu()}
      css={tw`block mb-4 font-heading`}
    >
      {link.name}
    </NavLink>
  );

  render() {
    const isDesktop = this.context;
    const { location } = this.props;

    return (
      <>
        {isDesktop ? (
          <nav css={tw`w-full text-sm flex mt-4`}>
            {desktopLinks.map(this.renderDesktopLink)}
            {location.pathname !== '/' && (
              <div css={tw`hidden lg:block w-full flex-grow text-right`}>
                <button
                  onClick={() => window.print()}
                  css={tw`text-gray text-sm pb-2`}
                >
                  <FontAwesomeIcon
                    icon={faPrint}
                    css={tw`fill-current w-4 h-4 mr-1`}
                  />
                  Print
                </button>
              </div>
            )}
          </nav>
        ) : (
          <StyledMenu>
            <Menu
              right
              disableAutoFocus
              isOpen={this.state.menuOpen}
              onStateChange={state => this.handleStateChange(state)}
            >
              <div>
                <div css={tw`h-full flex flex-col justify-between`}>
                  <div css={tw`p-4`}>
                    {mobileLinks.map(this.renderMobileLink)}
                  </div>
                  <div>
                    <HeaderHelpLine />
                  </div>
                </div>
              </div>
            </Menu>
          </StyledMenu>
        )}
      </>
    );
  }
}
HeaderNav.contextType = ScreenContext;

HeaderNav.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(HeaderNav);
