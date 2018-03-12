import React from 'react'
import PropTypes from 'prop-types'

import URI from 'urijs'

import BioentityProperty from './BioentityProperty';

const fetchResponseJson = async (base, endpoint) => {
  const response = await fetch(URI(endpoint, base).toString())
  const responseJson = await response.json()
  return responseJson
}

class BioentityInformation extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      bioentityProperties: []
    }
  }

  _fetchAndSetState({atlasUrl, geneId}) {
    const atlasEndpoint = `json/bioentity_information/${geneId}`

    return fetchResponseJson(atlasUrl, atlasEndpoint)
      .then((responseJson) => {
        this.setState({
          bioentityProperties: responseJson,
          errorMessage: null
        })
      })
      .catch((reason) => {
        this.setState({
          errorMessage: `${reason.name}: ${reason.message}`
        })
      })
  }

  componentDidMount() {
    return this._fetchAndSetState(this.props)
  }

  render() {
    return (
      <div className={`row`}>
        <div className={`small-12 columns`}>
          <table>
            <tbody>
            {this.state.bioentityProperties.map(function(bioentityProperty){
              return (
                <BioentityProperty
                  key={bioentityProperty.type}
                  {...bioentityProperty} />
              )
            })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

BioentityInformation.propTypes = {
  atlasUrl: PropTypes.string.isRequired,
  geneId: PropTypes.string.isRequired
}

export default BioentityInformation
