import { sourceHanSansTC as fontWeight } from '@twreporter/core/lib/constants/font-weight'
import predefinedPropTypes from '../constants/prop-types'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import styled from 'styled-components'

const GroupFlagContainer = styled.div`
  position: relative;
  margin-top: 36px;
  margin-bottom: 14px;
  &:first-of-type {
    margin-top: 12px;
  }
`

const Flag = styled.h2`
  /* h2 reset start */
  margin: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  /* h2 reset end */
  margin-left: 6px;
  background: ${props => props.background};
  color: ${props => props.color};
  display: inline-flex;
  max-width: 95%;
  padding: 3px 10px 2px 5px;
  line-height: 1.28;
`

const Label = styled.span`
  font-size: 20px;
  font-weight: ${fontWeight.normal};
  letter-spacing: 0.5px;
  flex: 0 0 auto;
`

const Title = styled.span`
  font-size: 20px;
  font-weight: ${fontWeight.regular};
  margin-left: 0.4em;
  flex: 0 1 auto;
`

export default class GroupFlag extends PureComponent {
  static propTypes = {
    as: PropTypes.string.isRequired,
    color: PropTypes.string,
    background: PropTypes.string,
    ...predefinedPropTypes.groupFlag,
  }

  static defaultProps = {
    color: '#fff',
    background: '#a47a44',
  }

  render() {
    const { label, color, background, title, as } = this.props
    return (
      <GroupFlagContainer>
        <Flag color={color} background={background} as={as}>
          {label ? <Label>{label}</Label> : null}
          {title ? <Title>{title}</Title> : null}
        </Flag>
      </GroupFlagContainer>
    )
  }
}