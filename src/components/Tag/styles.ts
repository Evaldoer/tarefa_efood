import styled from 'styled-components'
import { cores } from '../../styles'

import type { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rose};
  color: ${cores.branca};
  font-weight: 700;
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  padding: ${(props) => (props.size === 'big' ? '6px 12px' : '4px 8px')};
  border-radius: 4px;
  max-width: ${(props) => (props.size === 'big' ? '180px' : '100px')};
  margin: 8px 4px 0 0;
  white-space: nowrap;
  text-align: center;
  display: inline-block;
`
