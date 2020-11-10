import { Button } from 'antd'
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
const LanguageButton = styled(Button)`
  padding: 4px 6px;
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
          <LanguageButton
            type={i18n.language === 'th' ? 'link' : 'text'}
            onClick={() => handleChangeLanguage('th')}
          >
            TH
          </LanguageButton>
          <LanguageButton
            type={i18n.language === 'en' ? 'link' : 'text'}
            onClick={() => handleChangeLanguage('en')}
          >
            EN
          </LanguageButton>
        </div>
      </HeaderContent>
    </StyledHeader>
  )
}

export default Header
