import react from 'react'
import styled from 'styled-components';
const HexagonContent = () => {
    return(
        <div>
         <HexagonInfo><Hexagon></Hexagon><HexagonInfo1></HexagonInfo1></HexagonInfo>
        </div>
    )
}


const HexagonInfo1 = styled.div`
    background-color: green;
    padding: 20px 20px 20px 20px;
`

const HexagonInfo = styled.div`
    background-color: red;
    padding: 20px 20px 20px 20px;
    position:relative;
`

const Hexagon = styled.div`
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    height:200px;
    width: 200px;
    background-color: blue;
    position: absolute
`

const Info = styled.span`
`

export default HexagonContent;