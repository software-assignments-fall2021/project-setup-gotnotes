import './default.scss';

import { Switch, Route/*, Redirect*/ } from "react-router-dom";

import {
  mockUniData,
  mockClassData,
  mockFileData,
  currentUserID,
  mockUserData,
} from './assets/mocks/mockData'

//Components
import { ListItem } from './components/Mobile/ListItem';
import AdminToolbar from './components/AdminToolbar'

//Pages
import { Unis } from './pages/Search/Unis';
import { Courses } from './pages/Search/Courses';
import { Files } from './pages/Search/Files';

import { SignUp } from './pages/Login/SignUp';
import { Login } from './pages/Login/Login'
import { ResetPass } from './pages/Login/ResetPass';

import { Admin } from './pages/Admin'

import { Account } from './pages/Account/Account';


function App() {
  //ANCHOR: for now we are using the mock data imported above to test our designs
  //let's focus on overall functionality of individual components, 
  //before we tie everything together and code up the app logic

  return (

    <div className="App">

      <AdminToolbar props={{currentUser: mockUserData.filter(user => user.userID === currentUserID)[0]}}/>
      <Switch>        
        
        <Route exact path="/unis" render={() => (
          
            <Unis />
          
        )} />
        <Route exact path="/:uniName/courses" render={() => (
          
            <Courses />
          
        )} />
        <Route exact path="/:uniName/:courseName/files" render={() => (
          
            <Files />
          
        )} />
        
        
       

        <Route path="/signup"
          render={() => (
            
              <SignUp />
            
          )}
        />
        <Route path="/login"
          render={() => (
            
              <Login />
            
          )}
        />
        <Route path="/resetpass"
          render={() => (
            
              <ResetPass />
            
          )}
        />
       
        <Route path="/account"
          render={() => (
            
              
                <Account />
              
            
          )}
        />
        
        
        <Route path="/admin"
          render={() => (
            
                <Admin />
            
          )}
        />
      </Switch>

      


      

    </div>
  );
}

export default App;