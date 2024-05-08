// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  InnerContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const lockImage = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const unLockImage = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isShow, setStatus] = useState(false)
  const onClickStatus = () => {
    setStatus(prevState => !prevState)
  }

  return (
    <MainContainer>
      {isShow ? (
        <InnerContainer>
          <Image src={unLockImage} alt="unlock" />
          <Text>Your Device is Unlocked</Text>
          <Button type="button" onClick={onClickStatus}>
            Lock
          </Button>
        </InnerContainer>
      ) : (
        <InnerContainer>
          <Image src={lockImage} alt="lock" />
          <Text>Your Device is Locked</Text>
          <Button type="button" onClick={onClickStatus}>
            Unlock
          </Button>
        </InnerContainer>
      )}
    </MainContainer>
  )
}

export default Unlock
