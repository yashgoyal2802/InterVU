import React from "react";

const CompanyForm = () => {
  return (
    <div>
      <div class="left-comp">
        <img class="left_img1" src="../../public/assets/interview.png" />
      </div>
      <div class="right-comp">
        <div class="ff ff_title">
          <a class="ff_link ff_tlink" href="#">
            Amazon
          </a>
        </div>
        <div class="ff">
          <label class="ff_label">Number of technical rounds</label>
          <input type="text" class="ff_input" placeholder="0" />
        </div>
        <div class="ff">
          <label class="ff_label">Number of non-technical rounds</label>
          <input type="text" class="ff_input" placeholder="0" />
        </div>
        {/* <div class="ff">
          <label class="ff_label">Type of interview</label>
          <input type="text" class="ff_input" placeholder="Offline/Online" />
        </div> */}
        <div class="ff">
          <label class="ff_label">Average Duration</label>
          <input type="text" class="ff_input" placeholder="30 mins" />
        </div>
        <div class="ff">
          <label class="ff_label">Your Exprience</label>
          <input type="text" class="ff_input" placeholder="Good/Bad" />
        </div>
        <div class="ff">
          <button class="btn btn-primary ff_btn mr-20" type="button">
            Add Post
          </button>
          <a class="ff_link" href="#">
            Choose a Different Company
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyForm;
