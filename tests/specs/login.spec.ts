import { HomeScreen } from '../screens/home/Home.screen'
import { LoginAssertion } from '../screens/login/Login.assertion'

describe('Login', () => {
  it('Should login', async () => {
    const Home = new HomeScreen()
    const Login = new LoginAssertion()

    await Home.openLoginScreen()
    await Login.assertScreen()
  })
})
