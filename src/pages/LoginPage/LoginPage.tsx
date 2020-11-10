import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import PageWrapper from '../../components/layout/PageWrapper'

const Root = styled.div`
  margin-top: 128px;
  max-width: 444px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`
const Form = styled.div`
  display: grid;
  grid-row-gap: 16px;
`

const LoginPage: React.FC<unknown> = () => {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <Root>
        <h1>{t('Login')}</h1>
        <Form>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button type="submit">Login</button>
        </Form>
      </Root>
    </PageWrapper>
  )
}

export default LoginPage
