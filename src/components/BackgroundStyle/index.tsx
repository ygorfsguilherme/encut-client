import styled from "styled-components"
import './BackgroundStyle.css'

function BackgroundStyle() {
  const BackgroundStyle = styled.div`
      position: absolute;
      display: flex;
      width: 100%;
      height: 100vh;
      justify-content: flex-end;
      align-items: center;
      z-index: -1;
  `
  return (
    <BackgroundStyle>
        <img 
          className="personagem" 
          src="/image/personagem_background.png" 
          alt="" 
        />
        
        <img src="/image/links_background.png" alt="" />
    </BackgroundStyle>
  )
}

export default BackgroundStyle