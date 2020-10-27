import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmazon } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
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
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>No of non technical rounds</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Average Duration</td>
                          <td>30 min</td>
                        </tr>
                        <tr>
                          <td>Your Expreience 1</td>
                          <td>Good</td>
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
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>No of non technical rounds</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Average Duration</td>
                          <td>30 min</td>
                        </tr>
                        <tr>
                          <td>Your Expreience 1</td>
                          <td>Good</td>
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
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>No of non technical rounds</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Average Duration</td>
                          <td>30 min</td>
                        </tr>
                        <tr>
                          <td>Your Expreience 1</td>
                          <td>Good</td>
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
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>No of non technical rounds</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>Average Duration</td>
                          <td>30 min</td>
                        </tr>
                        <tr>
                          <td>Your Expreience 1</td>
                          <td>Good</td>
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
};

export default Home;
