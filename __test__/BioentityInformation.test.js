import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import BioentityInformation from '../src/BioentityInformation.js'

Enzyme.configure({ adapter: new Adapter() })

describe(`BioentityInformation`, () => {
  test(`with no data matches snapshot`, () => {
    const tree = renderer.create(<BioentityInformation atlasUrl={``} geneId={``} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test(`should render without throwing an error`, () => {
    expect(mount(<BioentityInformation atlasUrl={``} geneId={``} />)).toHaveLength(1)
  })
})
