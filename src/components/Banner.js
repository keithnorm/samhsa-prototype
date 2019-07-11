import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';
import flag from '../images/us_flag_small.png';
import Beta from './Beta';
import HelpLine from './HelpLine';

const Banner = () => {
  return (
    <>
      <Beta />
      <div css={tw`bg-gray-200`}>
        <div
          css={tw`lg:relative lg:mx-auto max-w-full lg:max-w-5xl xl:max-w-7xl`}
        >
          <div
            className="container"
            css={tw`mx-auto flex items-center py-1 text-xs sm:text-sm leading-tight`}
          >
            <img src={flag} alt="U.S. Flag" css={tw`mr-2`} />
            An official website of the United States government
          </div>
          <HelpLine />
        </div>
      </div>
    </>
  );
};

export default Banner;
