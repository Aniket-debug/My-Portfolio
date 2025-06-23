import React from 'react'
const Linkedin_url = "https://www.linkedin.com/in/aniket-agarwal-226a551b1/";
const Github_url = "https://github.com/Aniket-debug";
const CodingProfiles_url = "https://linktr.ee/aniket_167";

export default function HeaderSocials() {
  return (
    <div className="home__socials">
        <a href = {Linkedin_url} className="home__social-links" target="_blank">
            <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href = {Github_url} className="home__social-links" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>

        <a href = {CodingProfiles_url} className="home__social-links" target="_blank">
            <i class="fa-solid fa-code"></i>
        </a>

    </div>
  )
}
