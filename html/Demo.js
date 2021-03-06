import React from 'react'
import ReactDOM from 'react-dom'
import BioentityInformation from '../src/BioentityInformation'
import AtlasAutocomplete from 'expression-atlas-autocomplete'
import GeneSearchForm from 'scxa-gene-search-form'

class Demo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      geneId: ``
    }
  }

  render() {
    return (
      <div>
        <AtlasAutocomplete
          atlasUrl={`http://localhost:8080/gxa/sc/`}
          wrapperClassName={`row column expanded`}
          suggesterEndpoint={`json/suggestions`}
          initialValue={this.state.geneId}
          onSelect={ (geneId) => { this.setState({geneId: geneId}) }} />

        <BioentityInformation
          atlasUrl={`http://localhost:8080/gxa/sc/`}
          geneId={this.state.geneId} />
      </div>

    )
  }
}

const render = (options, target) => {
  ReactDOM.render(<Demo {...options} />, document.getElementById(target))
}

export {render}
