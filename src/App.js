import './App.css';

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
    <div className="App">
      
        <h1>Welcome to Academy of Learning, {FirstName}!</h1>
        <p>For Reference, here are your login credentials:</p>
        <table>
            <tbody>
                <tr>
                    <td><u><b>School Computer Login</b></u></td>
                    <td><u><b>Attendance &amp; Typing</b></u></td>
                    <td><u><b>Learning Hub</b></u></td>
                </tr>
                <tr>
                    <td><b>Username:</b>{UPN}</td>
                    <td><b>Username:</b>{FirstName}.{LastName}</td>
                    <td><b>Username:</b>{compassemail}</td>
                </tr>
                <tr>
                    <td colSpan="3"><b>Password:</b> {studentpassword}</td>
                    
                </tr>
            </tbody>
        </table>

<h3>Activating your Learning Hub Account</h3>
<p>In order to access your myAOLCC Learning Hub account, you will need to activate your new my-aolcc.com email address.<br />
To do this, please access your personal email: {compassemail} and follow the prompts to create a new password. We recommend <b>{studentpassword}</b></p>
        <h3>1. Logging into the school computer.</h3>
        <p>**Skip this step if working from home**</p>
        <ol>
            <li>Ensure the Computer, Monitor, Keyboard and Mouse are all turned on.</li>
            <li>At the Welcome screen, click anywhere on the screen to bring up the login screen.</li>
            <li>Enter your Lab Computer username and password then press the [ENTER] key on the keyboard.</li>
        </ol>
        <h3>2. AOLCCBC.COM</h3>
        <ol>
            <li>Click on the start button.</li>
            <li>Type aolccbc.com and hit enter - this will launch the school website in your web browser.</li>
        </ol>

        <h3>3. Attendance Tracker</h3>
        <p>Note: you are responsible for logging your attendance.<br /> We recommend writing down your attendance in case of issues.</p>
        <ol>
            <li>Find the "Student Resources" menu. If it is not visible, click the menu button, then "Student Resources". Then click the "Attendance Tracker" link.</li>
            <li>On the attendance tracker page, enter your student username and password and click the Select Course button.
            </li>
            <li>In the Dropdown list, select the course you are working on and click "Sign In".<br />
                <i>NOTE: To sign out, follow steps 1-5, but click "Sign
                            Out" instead</i></li>
            <li>Close this tab by clicking the X or using the keyboard shortcut [CTRL]+W.</li>
        </ol>

        <h3>4. Accessing your courses (myAOLCC)</h3>
        <ol>
            <li>Now that you are back on the campus home page, click on myAOLCC
            </li>
            <li>Log in using your Learning Hub Credentials</li>
            <li>If prompted, Save your username and password to make logging into the learning hub quicker.</li>
            <li>If a course was just activated for you, you will see a notification at the top of the page.<br /> Please click "ACCEPT".<br />
                <i>NOTE: If you "DECLINE" a course, there will be a
                            delay in getting the course added to your account.
                            Please contact your facilitator if you do this.</i></li>
        </ol>
        <div style={{display:Typing}}>
        <h3>5. Typing Trainer</h3>
        <ol>
            <li>Click the start button.</li>
            <li>If you are at the campus, click on "Connect to Typing Trainer" - Otherwise, click on "Typing Trainer"</li>
            <li>Log in with your username and password from above.</li>
        </ol>
        
        </div>
        </div>
    

    
  );

}



export default App;
