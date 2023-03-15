import './App.module.css';
import { Header, Nav } from './components'

const App = () => {
  return (
      <div className='app-wrapper'>
        <Header/>
        {/*<Nav/>*/}
        {/*<Route path='/login' render={() => <Login/>}/>*/}
        {/*<Route path='/profile/:userId?' render={() => <ProfileComponents/>}/>*/}
        {/*<Route path='/dialog' render={() => <DialogsComponent/>}/>*/}
        {/*<Route path='/users' render={() => <UserComponent/>}/>*/}
      </div>
  );
}
export default App;
