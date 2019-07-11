import React from 'react';
import 'styled-components/macro';
import tw from 'tailwind.macro';

const Beta = () => {
  return (
    <div css={tw`bg-yellow-400`}>
      <div className="container" css={tw`py-4 font-bold`}>
        We are testing a new design for our treatment locator. Have feedback?{' '}
        <a css={tw`underline`} href="https://forms.gle/35ZHQCGBkxCsJcs78">
          We want to hear from you.
        </a>
        <div css={tw`font-normal text-sm`}>
          Visit current site at{' '}
          <a css={tw`underline`} href="https://findtreatment.samhsa.gov">
            findtreatment.samhsa.gov
          </a>
        </div>
      </div>
    </div>
  );
};

export default Beta;
