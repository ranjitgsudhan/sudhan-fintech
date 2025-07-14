
import React from 'react';
import Link from 'next/link';
import { getImagePrefix } from '@/utils/utils';

const FooterLogo = () => {
  return (
    <>
    <Link href="/">
      <img
        src={`${getImagePrefix()}images/logo/footer-logo.png`}
        alt="logo"
        // width={100}
        // height
        style={{ width: "250px", height: "190px" }}
      />
    </Link>
    </>
   
  )
}

export default FooterLogo
