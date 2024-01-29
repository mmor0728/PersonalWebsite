import './App.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import portrait from "./assets/MMORPORTRAIT.jpg";
function App() {

  return (
      <>
          <div className="parent">
              <header className="header">Matthew Moravec</header>
          </div>
         
          <div className="card" >
            <Tabs>
                  <TabList>
                      <Tab>Introduction</Tab>
                      <Tab>Professional Experience</Tab>
                      <Tab>Education</Tab>
                      <Tab>Athletics</Tab>
                  </TabList>
                  <TabPanel  >
                      <div className="parent">   
                          <img src={portrait} width="50%" height="50%" />
                      </div>
                      <p>
                          Welcome! I am a software developer who's professional experience has has focused on web development in C#/.net, typescript and React.
                          I hope you find this site informative and find that it gives insight into all aspects of my life.
                      </p>
                  </TabPanel>
                  <TabPanel>
                      <div>
                          <header className="headerSmall">Epic Systems</header>
                          <p>
                              Software Developer    June 2022 - December 2023
                              <br></br>
                              Worked throughout Epics entire stack using M (Cache), C#, typescript and React to perform the following actions
                              <br></br>
                              <br></br>
                              Implement new features in the codebase:
                              <ul>
                                  <li>Design new feature and decide project scope</li>
                                  <li>Implement code changes in CDE (Current development
                                      environment)</li>
                                  <li>Test changes in CDE to ensure quality</li>
                                  <li>Move code through QA and fix any bugs that are found</li>
                              </ul>
                              Implement bug fixes in the codebase:
                              <ul>
                                  <li>Read bug report and determine what the issue is</li>
                                  <li>Design fix and implement changes in CDE</li>
                                  <li>Test changes in CDE to ensure quality</li>
                                  <li>Move code through QA and fix any bugs that are found</li>
                              </ul>
                          </p>
                          <header className="headerSmall">MOD Lab</header>
                          <p>
                              Student Researcher  June 2021 - August 2021
                              <br></br>
                              Worked to artifically replicate data from the Marquette basketball team using a Generative Adversarial Network to make the existing statistical models more robust
                          </p>
                          <header className="headerSmall">Bozdag Lab</header>
                          <p>
                              Student Researcher January 2020 - May 2021
                              <br></br>
                              Worked to create an R package and documentation for a series of R scripts to associate micro-RNA with different types of cancer
                              <br></br>
                              <a href="https://github.com/bozdaglab/miRDriver" target="_blank">
                                  <text>Github link for the miRDriver package</text>
                              </a>
                              <br></br>
                              <a href="https://www.nature.com/articles/s41598-022-07628-z" target="_blank">
                                  <text>Publication link</text>
                              </a>
                          </p>
                          <header className="headerSmall">Home Depot</header>
                          <p>
                              Seasonal Garden Associate March 2019 - July 2019
                              <br></br>
                              Assisted customers with questions about product functionality and helped customers with moving heavy merchanise.
                          </p>
                          <header className="headerSmall">Downers Grove Swim and Raquet Club</header>
                          <p>
                              Life Guard June 2018 - September 2018
                              <br></br>
                              Spectated all patrons activity in and around the pool, reminded patrons of safety rules, and in the event of a patron safety event,
                              perform first aid
                          </p>
                       </div>
              </TabPanel>
              <TabPanel>
                      <div>
                          <header className="headerSmall">Marquette University</header>
                          <p>
                              September 2019 - May 2022
                              <br></br>
                              Majors in Data Science and Economics minor in Computer Science
                          </p>
                          <header className="headerSmall"> Downers Grove North High School</header>
                          <p>
                             August 2015 - June 2019
                          </p>
                      </div>
                  </TabPanel>
                  <TabPanel>
                      <header className="headerSmall">Running</header>
                      <p>
                          PRs
                          <br></br>
                          400: 55.8
                          <br></br>
                          800: 2:01
                          <br></br>
                          1600: 4:24
                          <br></br>
                          1 mile: 4:24
                          <br></br>
                          3200: 9:15
                          <br></br>
                          3 mile: 14:39
                          <br></br>
                          5k: 15:45
                          <br></br>
                          8k: 26:15
                      </p>
                      <a href="https://www.tfrrs.org/athletes/7361761/Marquette/Matt_Moravec.html" target="_blank">
                          <text>TFRRS link</text>
                      </a>
                      <br></br>
                      <a href="https://www.dgnxcandtrack.com/query.php?load_count=1&years=56&yearf=68&sex=M&season=&ath=55897&meet=&event=&loc=&ath_year=&level=&sort=meet_date+desc&showonce=0" target="_blank">
                          <text>Highschool times</text>
                      </a>
                  </TabPanel>
            </Tabs>
          </div>
    </>
  )
}

export default App
