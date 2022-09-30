import React from 'react';

import './HeroImage.styles.scss';

export default function HeroImage({children}) {
  return (
    <main className="hero-image-wrapper">
      <div className="hero-image container">
        {children}
      </div>
    </main>
  );
}