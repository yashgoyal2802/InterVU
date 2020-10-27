import React from "react";

const CompanyForm = () => {
  return (
    <div>
      <div class="left-comp" style={{ padding: "6.55%" }}>
        <div className="left_comp_list">
          <button className="comp_select">Google</button>
        </div>
        <div className="left_comp_list">
          <button className="comp_select">Facebook</button>
        </div>
        <div className="left_comp_list">
          <button className="comp_select">LinkedIn</button>
        </div>
        <div className="left_comp_list">
          <button className="comp_select">Amazon</button>
        </div>
      </div>
      <div className="right-comp">
        <div className="ff ff_title">
          <a className="ff_link ff_tlink" href="#">
            Google
          </a>
        </div>
        <div className="ff">
          <label className="ff_label">Number of technical rounds</label>
          <input type="text" className="ff_input" placeholder="0" />
        </div>
        <div className="ff">
          <label className="ff_label">Number of non-technical rounds</label>
          <input type="text" className="ff_input" placeholder="0" />
        </div>
        {/* <div class="ff">
          <label class="ff_label">Type of interview</label>
          <input type="text" class="ff_input" placeholder="Offline/Online" />
        </div> */}
        <div className="ff">
          <label className="ff_label">Average Duration</label>
          <input type="text" className="ff_input" placeholder="30 mins" />
        </div>
        <div className="ff">
          <label className="ff_label">Your Exprience</label>
          <input type="text" className="ff_input" placeholder="Good/Bad" />
        </div>
        <div class="ff">
          <button className="btn btn-primary ff_btn mr-20" type="button">
            Add Post
          </button>
          <a className="ff_link" href="#">
            Choose a Different Company
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
