import styled from "styled-components";
import { cores } from "../../styles";

import type { Props } from ".";

export const TagContainer = styled.div<Props>`
    background-color: ${cores.rose};
    color: ${cores.branca};
    font-size: 12px;
    font-weight: 700;
    padding: 6px 4px;
    max-width:  ${props => props.size === 'big' ? '180px' : '80px'};
    margin: 8px;
    white-space: nowrap;
    text-align: center;
`