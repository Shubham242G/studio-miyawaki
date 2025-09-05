// components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Premium Web Development & Branding Agency",
  description = "Transform your brand with our premium web development, PR services, and branding solutions. Expert team delivering exceptional digital experiences.",
  keywords = "web development, branding, PR services, digital marketing, premium design, React development",
  image = "/og-image.jpg",
  url = "https://yourwebsite.com"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Your Agency Name" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
