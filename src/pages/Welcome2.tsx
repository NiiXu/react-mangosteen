import * as React from 'react'
import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid red;
  height: 100px;
  &:hover {
    background-color: yellow;
  }
`
const BlueBox = styled(Box)`
    border: 1px solid blue;
`
export const Welcome2: React.FC = () => {
    return (
        <div>
            <Box>
                山竹记账
            </Box>
            <BlueBox>
                hi
            </BlueBox>
        </div>
    )
}
