import styled, { createGlobalStyle } from 'styled-components'

// 🎨 Paleta de cores usada no Figma
export const cores = {
  begeclaro: '#FFF8F2',
  bege: '#FFEBD9',
  rose: '#E66767',
  branca: '#FFFFFF',
}

// 🌐 Estilos globais da aplicação
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  body {
    background-color: ${cores.begeclaro};
    color: #333;
  }

  button {
    font-family: 'Roboto', sans-serif;
  }
`

// 📦 Container padrão para centralizar conteúdo
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`
