import AppNavigation, {Screen} from '~/navigations/AppNavigation'
import HomeScreen from '~/screens/Home'

export default function IndexPage() {
  return (
    <AppNavigation>
      <Screen name="Home" component={HomeScreen} />
    </AppNavigation>
  )
}
