import React from "react"
const bannerImageUrl = require("../../static/images/ynaber-banner.jpg")
const logoUrl = require("../../static/images/ynaber-logo.png")

export default () => (
  <div>
    <div
      className="py-32 bg-cover bg-scroll flex flex-col items-center"
      style={{ backgroundImage: "url(" + bannerImageUrl + ")" }}
    >
      <img src={logoUrl} className="w-40" alt="ynaber logo" />
      <h1 className="text-5xl text-white font-bold">YNABer!</h1>
      <p className="text-white">
        YNABer (Noun): An individual who won’t shut up about the You Need a
        Budget app
      </p>
    </div>
  </div>
)
