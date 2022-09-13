import React from "react";

const news = {
  source: {
    id: null,
    name: "Mile High Report",
  },
  author: "Tim Lynch",
  title:
    "Broncos vs Seahawks live updates: Russell Wilson booed, more coverage - Mile High Report",
  description:
    "Welcome to the final game of Week 1. It’ll be the Denver Broncos on the road on Monday Night Football to take on the Seattle Seahawks.",
  url: "https://www.milehighreport.com/2022/9/12/23348917/week-1-broncos-seahawks-live-updates",
  urlToImage:
    "https://cdn.vox-cdn.com/thumbor/ozvirR-EbS7vuv1J62Ge4wG4jbU=/0x0:6480x3393/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23981802/usa_today_18941727.jpg",
  publishedAt: "2022-09-13T02:25:54Z",
  content:
    "© 2022 Vox Media, LLC. All Rights Reserved\r\n* 21+ (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, LS (select parishes), MI, NH, NJ, NY, OR, PA, TN, VA, WV, WY only.Eligibility restrictions apply. Terms … [+102 chars]",
};

function HeadlineCard({ headlines }) {
  return (
    <div className="sourceCard" style={{ height: "auto", padding: "10px" }}>
      <img
        src={headlines.urlToImage}
        style={{ maxWidth: "40%", borderRadius: "5px" }}
        loading="loading"
      />
      <p style={{ marginLeft: "10px", width: "50%" }}>{headlines.title}</p>
    </div>
  );
}

export default HeadlineCard;
