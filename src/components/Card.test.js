import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import { facilityProps } from './test.constants';

describe('Card component', () => {
  describe('heading', () => {
    it('does not display name2 if empty', () => {
      const props = {
        ...facilityProps,
        name2: ''
      };
      const component = shallow(<Card {...props} />);
      const heading = component.find('CardHeading').dive();
      expect(heading.find('.card-name2').length).toBe(0);
    });

    it('does not display miles if empty', () => {
      const { miles, ...rest } = facilityProps;
      const component = shallow(<Card {...rest} />);
      const heading = component.find('CardHeading').dive();
      expect(heading.find('.card-miles').length).toBe(0);
    });

    it('displays name2 and miles if present', () => {
      const component = shallow(<Card {...facilityProps} />);
      const heading = component.find('CardHeading').dive();
      expect(heading.find('.card-name2').text()).toBe('Tucson Northwest');
      expect(heading.find('.card-miles').text()).toBe('5.57 miles');
    });
  });

  describe('address', () => {
    it('formats properly', () => {
      const props = {
        ...facilityProps,
        street2: ''
      };
      const component = shallow(<Card {...props} />);
      const address = component.find('CardAddress').dive();
      expect(address.text()).toBe('3295 West Desert Road, Tucson, AZ 85741');
    });

    it('displays street2 if present', () => {
      const component = shallow(<Card {...facilityProps} />);
      const address = component.find('CardAddress').dive();
      expect(address.text()).toBe(
        '3295 West Desert Road, Suite 150, Tucson, AZ 85741'
      );
    });
  });

  describe('details', () => {
    it('does not display website if empty', () => {
      const props = {
        ...facilityProps,
        website: 'http://'
      };
      const component = shallow(<Card {...props} />);
      const details = component.find('CardDetails').dive();
      expect(details.find('.card-website').length).toBe(0);
    });

    it('displays website if present', () => {
      const component = shallow(<Card {...facilityProps} />);
      const details = component.find('CardDetails').dive();
      expect(
        details
          .find('.card-website OutboundLink')
          .shallow()
          .text()
      ).toBe('http://www.mytreatmentfacility.com');
    });
  });
});
