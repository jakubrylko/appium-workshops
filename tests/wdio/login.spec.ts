import { HomeScreen } from '../../screens/Wdio/Homepage/Home.screen'
import { LoginAssertion } from '../../screens/Wdio/Login/Login.assertion'

describe('Login', () => {
  it('Should login', async () => {
    const Home = new HomeScreen()
    const Login = new LoginAssertion()

    await Home.openLoginScreen()
    await Login.assertScreen()
  })
})
