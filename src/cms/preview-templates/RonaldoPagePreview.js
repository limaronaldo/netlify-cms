import React from 'react'
import PropTypes from 'prop-types'
import { RonaldoPageTemplate } from '../../templates/ronaldo-page'

const RonaldoPagePreview = ({ entry, widgetFor }) => (
  <RonaldoPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

RonaldoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RonaldoPagePreview