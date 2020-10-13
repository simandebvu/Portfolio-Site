import React from 'react';
import Me from '../images/Me.png';

export const Profile = () => (
  <>
    <img src={Me} alt="" className="img-fluid rounded-circle" />
    <h1 className="text-light"><a href="/">S Mandebvu</a></h1>
    <div className="social-links mt-3 text-center">
      <a aria-label="site link" href="http://www.twitter.com/simandebvu" target="_blank" rel="noopener noreferrer" className="twitter"><i className="bx bxl-twitter" /></a>
      <a aria-label="site link" href="http://www.github.com/simandebvu" className="github" target="_blank" rel="noopener noreferrer"><i className="bx bxl-github" /></a>
      <a aria-label="site link" href="mailto:simandebvu@icloud.com?subject=Your Portfolio Site" className="mail-send" target="_blank" rel="noopener noreferrer"><i className="bx bx-mail-send" /></a>
      <a aria-label="site link" href="http://www.linkedin.com/in/simandebvu" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin" /></a>
      <a aria-label="site link" href="http://www.medium.com/@simandebvu" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bxl-medium" /></a>
      {' '}
      <a aria-label="site link" href="https://hackernoon.com/u/simandebvu" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bx-pen" /></a>
    </div>
  </>
);

export default Profile;
