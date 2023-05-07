import React from 'react';
import { Typography } from '@material-tailwind/react';
import { Bars2Icon } from '@heroicons/react/24/outline';

import BrandImage from '../../assets/svg/brand_access.svg';
import GitHubImage from '../../assets/svg/github.svg';
import ReactImage from '../../assets/svg/react.svg';
import SpringImage from '../../assets/svg/spring.svg';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className='footer__container'>
        <img src={BrandImage} alt='logo-ct' className='w-16' />
        <ul className='footer__list'>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='footer__link'
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='footer__link'
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='footer__link'
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='footer__link'
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <div className='footer__bottom'>
        <Typography variant='h5' className='copyright'>
          &copy; 2023 AccessAid
        </Typography>
        <div className='social-media__container'>
          <Typography
            as='a'
            href='https://github.com/AccessAid'
            className='social-media'
          >
            <img src={GitHubImage} alt='logo-ct' className='w-10' />
          </Typography>
          <Typography as='a' href='#' className='social-media'>
            <img src={ReactImage} alt='logo-ct' className='w-10' />
          </Typography>
          <Typography as='a' href='#' className='social-media'>
            <img src={SpringImage} alt='logo-ct' className='w-10' />
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
