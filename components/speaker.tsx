import {FC} from 'react';
import styled from 'styled-components';
const Speaker:FC = () => {
    return(
        <BackGround> 
                <Position>
                    <Square inputWidth="18vw" inputBorderbottom="56vw solid #36dbf8"
                    ></Square>
                    <NameLength>落合　陽一</NameLength>
                    <NameWidth>Yoichi　Ochiai</NameWidth>
                    <Title>講演者</Title>
                    <Date>6月6日(日) 13:30~14:30</Date>
                    <Date1>at TOHO</Date1>
                </Position> 
                <BackgroundImage src="/speakerbackground.png"></BackgroundImage>                   
                <div> 
                    {/* <ImageSpeaker src="../public/speaker.png"></ImageSpeaker> */}
                  <SpeakerDetail>東京港区六本木生まれ六本木育ち，六本木中学卒業 , 開成高校
                                        卒業 , 筑波大学情報学群情報メディア創成学類卒業，東京大学
                                        大学院学際情報学府博士課程早期終了．計算機自然という新た
                                        な自然ビジョンを目指し , 自身がセンター長を務める大学の研
                                        究センターではホログラム , VR, AI, アクセシビリティなどの
                                        応用研究に従事 , またメディアアーティストとして様々な個展
                                        やコラボレーションを行う．自身のテレビ番組やネット番組等
                                        でも精力的に発信している .
東京港区六本木生まれ六本木育ち，六本木中学卒業 , 開成高校
卒業 , 筑波大学情報学群情報メディア創成学類卒業，東京大学
大学院学際情報学府博士課程早期終了．計算機自然という新た
な自然ビジョンを目指し , 自身がセンター長を務める大学の研
究センターではホログラム , VR, AI, アクセシビリティなどの
応用研究に従事 , またメディアアーティストとして様々な個展
やコラボレーションを行う．自身のテレビ番組やネット番組等
でも精力的に発信している .
東京港区六本木生まれ六本木育ち，六本木中学卒業 , 開成高校
卒業 , 筑波大学情報学群情報メディア創成学類卒業，東京大学
大学院学際情報学府博士課程早期終了．計算機自然という新た
な自然ビジョンを目指し , 自身がセンター長を務める大学の研
究センターではホログラム , VR, AI, アクセシビリティなどの
応用研究に従事 , またメディアアーティストとして様々な個展
やコラボレーションを行う．自身のテレビ番組やネット番組等
でも精力的に発信している .</SpeakerDetail>
                </div>
        </BackGround>
    )
}


type InputSquare = {
    inputWidth:string
    inputBorderbottom:string
}

const BackgroundImage = styled.img`
width:100%;
height:100%;
z-index:-1;
`

const Position = styled.div`
position:relative;
`

const BackGround = styled.div`
background-color:#333333;
padding:0 0 5vw 0;
`

const ImageSpeaker = styled.img`
z-index:10;
width:100%;
height:100%;
position:absolute;
`

const Square = styled.div<InputSquare>`
&::after {
    content: "";
    display: block;
    width:  ${(props) => props.inputWidth};
    /* default:400px  */
    border-bottom: ${(props) => props.inputBorderbottom};
    /* default:10px solid #85d1d0 */
    position:absolute;
    z-index:2;
    opacity: 80%;
}`


const Title = styled.h1 `
position:absolute;
z-index:3;
-ms-writing-mode: tb-rl;
writing-mode: vertical-rl;
height:30vw;
font-size:10vw;
color:white;
margin:5vw 0 0 83vw;
`

const NameLength = styled.nav`
float:left;
position:absolute;
-ms-writing-mode: tb-rl;
writing-mode: vertical-rl;
z-index:4;
height:40vw;
font-size:8vw;
font-weight:bold;
margin: 5vw 0 0 5vw;
`

const NameWidth = styled.span`
position:absolute;
margin:17vw 0 0 -12vw;
z-index:5;
transform:rotate(-90deg);
height:15vw;
font-size:6vw;
`

const Date = styled.nav`
position:absolute;
z-index:5;
color:#1588d5;
font-size:5vw;
margin: 41vw 0 0 35vw;
`
const Date1 = styled.nav`
position:absolute;
z-index:5;
color:#1588d5;
font-size:5vw;
margin: 46vw 0 0 75vw;
`

const SpeakerDetail = styled.p`
border-radius:20px;
border: solid 10px white;
background-color: white;
margin: 5vw 5vw 5vw 45vw;
padding:10px 10px 10px 10px;
`

export default Speaker