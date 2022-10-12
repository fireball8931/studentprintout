import './App.css';
import { faUser, faKey, faEnvelopeOpen, } from "@fortawesome/free-solid-svg-icons";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';



const queryParameters = new URLSearchParams(window.location.search)
const FirstName = queryParameters.get("FirstName")
const LastName = queryParameters.get("LastName")
const studentpassword = queryParameters.get("studentpassword")
const Typing = queryParameters.get("Typing")
const FirstLast = FirstName + '.' + LastName
const compassemail = FirstLast + '@my-aolcc.com'
const UPN = FirstLast + '@aolccbc.com'

function App() {
  return (
    <div className="App container">
      <div id="pdf">
        <header>
          <h1>Welcome to Academy of Learning, {FirstName}!</h1>
        </header>
        <p>For Reference, here are your login credentials:</p>
        <div className='container'>
          <div className='row fw-bold'>
            <div className='col'>School Computer Login</div>
            <div className='col'>Attendance and Typing</div>
            <div className='col'>Learning Hub</div>
          </div>
          <div className='row'>
            <div className='col'><FontAwesomeIcon icon={faEnvelopeOpen} /> <code>{UPN}</code></div>
            <div className='col'><FontAwesomeIcon icon={faUser} /> <code>{FirstLast}</code></div>
            <div className='col'><FontAwesomeIcon icon={faEnvelopeOpen} /> <code>{compassemail}</code></div>
          </div>
          <div className='row'>
            <div className='col fw-bold'>
              Password for all Systems
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <FontAwesomeIcon icon={faKey} /> <code>{studentpassword}</code>
            </div>
          </div>

        </div>



        <dl>
          <dt>Activating your Learning Hub Account</dt>
          <dd>In order to access your myAOLCC Learning Hub account, you will need to activate your new my-aolcc.com email address.<br />
            To do this, please access your personal email: <FontAwesomeIcon icon={faEnvelopeOpen} /> <code>{compassemail}</code> and follow the prompts to create a new password. We recommend <b><FontAwesomeIcon icon={faKey} /> <code>{studentpassword}</code></b></dd>



          <dt>Logging into Lab computer.</dt>
          <dd><p>**Skip this step if working from home**</p>
            <ol>
              <li>Ensure the Computer, Monitor, Keyboard and Mouse are all turned on.</li>
              <li>At the Welcome screen, click anywhere on the screen to bring up the login screen.</li>
              <li>Enter your Lab Computer username and password then press the [ENTER] key on the keyboard.</li>
            </ol>
          </dd>
          <dt>Attendance Tracker</dt>
          <dd>

            <quote>Note: you are responsible for logging your attendance.<br /> We recommend writing down your attendance in case of issues.</quote>
            <ol>
              <li>Click on the start button. <FontAwesomeIcon icon={faWindows} /></li>
              <li>Type <code>s.aolccbc.com/att</code> and hit <button>Enter</button></li>
              <li>On the attendance tracker page, enter your username and password and hit <button>Enter</button>
                <div className='row fw-bold'>
                  <div className='col'>
                    Username
                  </div>
                  <div className='col'>Password</div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <code>{FirstLast}</code>
                  </div>
                  <div className='col'>
                    <code>{studentpassword}</code>
                  </div>
                </div>

              </li>
              <li>In the Dropdown list, select the course you are working on and click "Sign In".<br />
                <i>NOTE: To sign out, follow steps 1-5, but click "Sign
                  Out" instead</i></li>
              <li>Close this tab by clicking the ✖ or using the keyboard shortcut
                <button>Ctrl</button>+<button>W</button></li>
            </ol>
          </dd>

          <dt>Accessing your courses (myAOLCC)</dt>
          <dd>

            <ol>
              <li>Click on the start button. <FontAwesomeIcon icon={faWindows} /></li>
              <li>Type <code>my.aolcc.ca</code> and hit <button>Enter</button></li>
              <li>Log in using your Learning Hub Credentials  and hit <button>Enter</button>
              <div className='row fw-bold'>
                  <div className='col'>
                    Username
                  </div>
                  <div className='col'>Password</div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <code>{compassemail}</code>
                  </div>
                  <div className='col'>
                    <code>{studentpassword}</code>
                  </div>
                </div>

               



                
              </li>
              <li>If prompted, Save your username and password to make logging into the learning hub quicker.</li>
              <li>If a course was just activated for you, you will see a notification at the top of the page.<br /> Please click "ACCEPT".<br />
                <i>NOTE: If you "DECLINE" a course, there will be a
                  delay in getting the course added to your account.
                  Please contact your facilitator if you do this.</i></li>
            </ol>
          </dd>
          <div style={{ display: Typing }}>
            <dt>Typing Trainer</dt>
            <dd>
              <ol>
                <li>Click on the start button. <FontAwesomeIcon icon={faWindows} /></li>
                <li>If you are at the campus, click on "Connect to Typing Trainer" - Otherwise, click on "Typing Trainer"</li>
                <b>NOTE: When working from home, Typing Trainer needs to be setup by the campus. Please call us.</b>
                <li>Log in with
                <div className='row fw-bold'>
                  <div className='col'>
                    Username
                  </div>
                  <div className='col'>Password</div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <code>{compassemail}</code>
                  </div>
                  <div className='col'>
                    <code>{studentpassword}</code>
                  </div>
                </div>
                </li>
              </ol>

            </dd>
          </div>
        </dl>
      </div>
    </div>



  );

}



export default App;
