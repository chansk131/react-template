import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const StyledHeader = styled.header`
  z-index: 1201;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 24px;
  border-bottom: solid 1px #f1f1f1;
`
const HeaderContent = styled.div`
  width: 100%;
  min-height: 56px;
  align-items: center;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  justify-content: space-between;
`
const Header: React.FC = () => {
  const { i18n } = useTranslation()
  const handleChangeLanguage = (language: string): void => {
    i18n.changeLanguage(language)
  }

  return (
    <StyledHeader>
      <HeaderContent>
        <div>Header</div>
        <div>
          <button type="button" onClick={() => handleChangeLanguage('th')}>
            TH
          </button>
          <button type="button" onClick={() => handleChangeLanguage('en')}>
            EN
          </button>
        </div>
      </HeaderContent>
    </StyledHeader>
  )
}

export default Header
