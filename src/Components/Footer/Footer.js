import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Fragment } from 'react';
import './Footer.scss';
import { Outlet } from 'react-router-dom';

export default function Footer() {
  return (
    <Fragment>
      <Outlet />
      <div className='footer row'>
        <div className='footer-elem col-lg-4'>
          <p>2021 Jean Niyigaba - All rights reserved</p>
        </div>
        <div className='footer-elem footer-logo col-lg-4'>
          <p>JN</p>
        </div>
        <div className='footer-elem col-lg-4'>
          <p>
            <a
              href='https://github.com/Jean198?'
              className='footer-icons'
              target='blank'
            >
              <FaGithub className='text-2xl' />{' '}
            </a>

            <a
              href='https://www.linkedin.com/in/jean-de-dieu-niyigaba-235587168/'
              className='footer-icons'
              target='blank'
            >
              {' '}
              <FaLinkedin className='text-2xl' />
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
