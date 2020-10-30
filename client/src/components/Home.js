import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAmazon,
  faFacebook,
  faLinkedinIn,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalReactPackages: null,
    };
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response_amazon = await fetch(
      "http://localhost:5001/api/subs/getSubs/Amazon"
    );
    const data_amazon = await response_amazon.json();
    console.log(data_amazon);
    this.setState({
      numberOfTechnicalRoundsAMZN:
        data_amazon[data_amazon.length - 1].numberOfTechnicalRounds,
      numberOfNonTechnicalRoundsAMZN:
        data_amazon[data_amazon.length - 1].numberOfNonTechnicalRounds,
      AverageDurationAMZN: data_amazon[data_amazon.length - 1].AverageDuration,
      YourExpericenceAMZN: data_amazon[data_amazon.length - 1].YourExpericence,
      numberOfTechnicalRoundsAMZN2:
        data_amazon[data_amazon.length - 2].numberOfTechnicalRounds,
      numberOfNonTechnicalRoundsAMZN2:
        data_amazon[data_amazon.length - 2].numberOfNonTechnicalRounds,
      AverageDurationAMZN2: data_amazon[data_amazon.length - 2].AverageDuration,
      YourExpericenceAMZN2: data_amazon[data_amazon.length - 2].YourExpericence,
    });

    const response_google = await fetch(
      "http://localhost:5001/api/subs/getSubs/Google"
    );
    const data_google = await response_google.json();
    console.log(data_google);
    this.setState({
      numberOfTechnicalRoundsGOOG:
        data_google[data_google.length - 1].numberOfTechnicalRounds,
      numberOfNonTechnicalRoundsGOOG:
        data_google[data_google.length - 1].numberOfNonTechnicalRounds,
      AverageDurationGOOG: data_google[data_google.length - 1].AverageDuration,
      YourExpericenceGOOG: data_google[data_google.length - 1].YourExpericence,
      numberOfTechnicalRoundsGOOG2:
        data_google[data_google.length - 2].numberOfTechnicalRounds,
      numberOfNonTechnicalRoundsGOOG2:
        data_google[data_google.length - 2].numberOfNonTechnicalRounds,
      AverageDurationGOOG2: data_google[data_google.length - 2].AverageDuration,
      YourExpericenceGOOG2: data_google[data_google.length - 2].YourExpericence,
    });

    const response_facebook = await fetch(
      "http://localhost:5001/api/subs/getSubs/Facebook"
    );
    const data_facebook = await response_facebook.json();
    console.log(data_facebook);
    this.setState({
      numberOfTechnicalRoundsFB:
        data_facebook[data_facebook.length - 1].numberOfTechnicalRounds,
      numberOfNonTechnicalRoundsFB:
        data_facebook[data_facebook.length - 1].numberOfNonTechnicalRounds,
      AverageDurationFB:
        data_facebook[data_facebook.length - 1].AverageDuration,
      YourExpericenceFB:
        data_facebook[data_facebook.length - 1].YourExpericence,
      numberOfTechnicalRoundsFB2:
        data_facebook[data_facebook.length - 2].numberOfTechnicalRounds,
      numberOfNonTechnicalRoundsFB2:
        data_facebook[data_facebook.length - 2].numberOfNonTechnicalRounds,
      AverageDurationFB2:
        data_facebook[data_facebook.length - 2].AverageDuration,
      YourExpericenceFB2:
        data_facebook[data_facebook.length - 2].YourExpericence,
    });

    const response_linkedin = await fetch(
      "http://localhost:5001/api/subs/getSubs/Linkedin"
    );
    const data_linkedin = await response_linkedin.json();
    console.log(data_linkedin);
    this.setState({
      numberOfTechnicalRoundsLINKEDIN:
        data_linkedin[data_linkedin.length - 1].numberOfTechnicalRounds,
      numberOfNonTechnicalRoundsLINKEDIN:
        data_linkedin[data_linkedin.length - 1].numberOfNonTechnicalRounds,
      AverageDurationLINKEDIN:
        data_linkedin[data_linkedin.length - 1].AverageDuration,
      YourExpericenceLINKEDIN:
        data_linkedin[data_linkedin.length - 1].YourExpericence,
      numberOfTechnicalRoundsLINKEDIN2:
        data_linkedin[data_linkedin.length - 2].numberOfTechnicalRounds,
      numberOfNonTechnicalRoundsLINKEDIN2:
        data_linkedin[data_linkedin.length - 2].numberOfNonTechnicalRounds,
      AverageDurationLINKEDIN2:
        data_linkedin[data_linkedin.length - 2].AverageDuration,
      YourExpericenceLINKEDIN2:
        data_linkedin[data_linkedin.length - 2].YourExpericence,
    });
  }

  render() {
    const {
      numberOfTechnicalRoundsAMZN,
      numberOfNonTechnicalRoundsAMZN,
      AverageDurationAMZN,
      YourExpericenceAMZN,
      numberOfTechnicalRoundsAMZN2,
      numberOfNonTechnicalRoundsAMZN2,
      AverageDurationAMZN2,
      YourExpericenceAMZN2,
      numberOfTechnicalRoundsFB,
      numberOfNonTechnicalRoundsFB,
      AverageDurationFB,
      YourExpericenceFB,
      numberOfTechnicalRoundsFB2,
      numberOfNonTechnicalRoundsFB2,
      AverageDurationFB2,
      YourExpericenceFB2,
      numberOfTechnicalRoundsGOOG,
      numberOfNonTechnicalRoundsGOOG,
      AverageDurationGOOG,
      YourExpericenceGOOG,
      numberOfTechnicalRoundsGOOG2,
      numberOfNonTechnicalRoundsGOOG2,
      AverageDurationGOOG2,
      YourExpericenceGOOG2,
      numberOfTechnicalRoundsLINKEDIN,
      numberOfNonTechnicalRoundsLINKEDIN,
      AverageDurationLINKEDIN,
      YourExpericenceLINKEDIN,
      numberOfTechnicalRoundsLINKEDIN2,
      numberOfNonTechnicalRoundsLINKEDIN2,
      AverageDurationLINKEDIN2,
      YourExpericenceLINKEDIN2,
    } = this.state;
    return (
      <div class="table-responsive">
        <table class="table">
          <tbody>
            <tr className="h_row">
              <td className="h_company">
                <FontAwesomeIcon icon={faAmazon} /> Amazon
              </td>
              <td className="h_col">
                <div className="card">
                  <div className="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No of technical rounds</td>
                            <td>{numberOfTechnicalRoundsAMZN}</td>
                          </tr>
                          <tr>
                            <td>No of non technical rounds</td>
                            <td>{numberOfNonTechnicalRoundsAMZN}</td>
                          </tr>
                          <tr>
                            <td>Average Duration</td>
                            <td>{AverageDurationAMZN}</td>
                          </tr>
                          <tr>
                            <td>Your Expreience 1</td>
                            <td>{YourExpericenceAMZN}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
              <td className="h_col">
                <div className="card">
                  <div className="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No of technical rounds</td>
                            <td>{numberOfTechnicalRoundsAMZN2}</td>
                          </tr>
                          <tr>
                            <td>No of non technical rounds</td>
                            <td>{numberOfNonTechnicalRoundsAMZN2}</td>
                          </tr>
                          <tr>
                            <td>Average Duration</td>
                            <td>{AverageDurationAMZN2}</td>
                          </tr>
                          <tr>
                            <td>Your Expreience 1</td>
                            <td>{YourExpericenceAMZN2}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="h_row2">
              <td className="h_company" style={{ color: "#00020a" }}>
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </td>
              <td className="h_col">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No of technical rounds</td>
                            <td>{numberOfTechnicalRoundsFB}</td>
                          </tr>
                          <tr>
                            <td>No of non technical rounds</td>
                            <td>{numberOfNonTechnicalRoundsFB}</td>
                          </tr>
                          <tr>
                            <td>Average Duration</td>
                            <td>{AverageDurationFB}</td>
                          </tr>
                          <tr>
                            <td>Your Expreience 1</td>
                            <td>{YourExpericenceFB}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
              <td className="h_col">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No of technical rounds</td>
                            <td>{numberOfTechnicalRoundsFB2}</td>
                          </tr>
                          <tr>
                            <td>No of non technical rounds</td>
                            <td>{numberOfNonTechnicalRoundsFB2}</td>
                          </tr>
                          <tr>
                            <td>Average Duration</td>
                            <td>{AverageDurationFB2}</td>
                          </tr>
                          <tr>
                            <td>Your Expreience 1</td>
                            <td>{YourExpericenceFB2}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="h_row">
              <td className="h_company">
                <FontAwesomeIcon icon={faLinkedinIn} />
                Linkedin
              </td>
              <td className="h_col">
                <div className="card">
                  <div className="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No of technical rounds</td>
                            <td>{numberOfTechnicalRoundsLINKEDIN}</td>
                          </tr>
                          <tr>
                            <td>No of non technical rounds</td>
                            <td>{numberOfNonTechnicalRoundsLINKEDIN}</td>
                          </tr>
                          <tr>
                            <td>Average Duration</td>
                            <td>{AverageDurationLINKEDIN}</td>
                          </tr>
                          <tr>
                            <td>Your Expreience 1</td>
                            <td>{YourExpericenceLINKEDIN}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
              <td className="h_col">
                <div className="card">
                  <div className="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No of technical rounds</td>
                            <td>{numberOfTechnicalRoundsLINKEDIN2}</td>
                          </tr>
                          <tr>
                            <td>No of non technical rounds</td>
                            <td>{numberOfNonTechnicalRoundsLINKEDIN2}</td>
                          </tr>
                          <tr>
                            <td>Average Duration</td>
                            <td>{AverageDurationLINKEDIN2}</td>
                          </tr>
                          <tr>
                            <td>Your Expreience 1</td>
                            <td>{YourExpericenceLINKEDIN2}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="h_row2">
              <td className="h_company" style={{ color: "#00020a" }}>
                <FontAwesomeIcon icon={faGoogle} /> Google
              </td>
              <td className="h_col">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No of technical rounds</td>
                            <td>{numberOfTechnicalRoundsGOOG}</td>
                          </tr>
                          <tr>
                            <td>No of non technical rounds</td>
                            <td>{numberOfNonTechnicalRoundsGOOG}</td>
                          </tr>
                          <tr>
                            <td>Average Duration</td>
                            <td>{AverageDurationGOOG}</td>
                          </tr>
                          <tr>
                            <td>Your Expreience 1</td>
                            <td>{YourExpericenceGOOG}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
              <td className="h_col">
                <div class="card">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>No of technical rounds</td>
                            <td>{numberOfTechnicalRoundsGOOG2}</td>
                          </tr>
                          <tr>
                            <td>No of non technical rounds</td>
                            <td>{numberOfNonTechnicalRoundsGOOG2}</td>
                          </tr>
                          <tr>
                            <td>Average Duration</td>
                            <td>{AverageDurationGOOG2}</td>
                          </tr>
                          <tr>
                            <td>Your Expreience 1</td>
                            <td>{YourExpericenceGOOG2}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            {/* <tr style="background: rgb(2,62,138);">
              <td style="width: 200px;padding-top: 100px;padding-left: 80px;color: rgb(255,255,255);">
                Google
              </td>
              <td style="width: 550px;">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">BY</h4>
                    <h6 class="text-muted card-subtitle mb-2">selected</h6>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </td>
              <td style="width: 550px;">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr style="background: #b1e3ee;">
              <td style="width: 200px;padding-top: 100px;padding-left: 80px;border-color: #00020a;">
                Microsoft
              </td>
              <td style="width: 550px;">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">BY</h4>
                    <h6 class="text-muted card-subtitle mb-2">selected</h6>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </td>
              <td style="width: 550px;">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
            <tr style="background: rgb(2,62,138);">
              <td style="width: 200px;padding-top: 100px;padding-left: 80px;color: rgb(255,255,255);">
                Netflix
              </td>
              <td style="width: 550px;">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">BY</h4>
                    <h6 class="text-muted card-subtitle mb-2">selected</h6>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </td>
              <td style="width: 550px;">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Title</h4>
                    <h6 class="text-muted card-subtitle mb-2">Subtitle</h6>
                    <p class="card-text">
                      Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Donec id elit non mi porta gravida at eget metus.
                    </p>
                  </div>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
