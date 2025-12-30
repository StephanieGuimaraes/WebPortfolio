import React from 'react';

// Bandeira dos EUA (mais fiel)
export const FlagEN = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" rx="2" fill="#fff"/>
    {/* Listras vermelhas */}
    <rect y="0" width="20" height="2" fill="#B22234"/>
    <rect y="2" width="20" height="2" fill="#fff"/>
    <rect y="4" width="20" height="2" fill="#B22234"/>
    <rect y="6" width="20" height="2" fill="#fff"/>
    <rect y="8" width="20" height="2" fill="#B22234"/>
    <rect y="10" width="20" height="2" fill="#fff"/>
    <rect y="12" width="20" height="2" fill="#B22234"/>
    {/* Campo azul */}
    <rect x="0" y="0" width="8.5" height="7" fill="#3C3B6E"/>
    {/* Estrelas simplificadas */}
    <g fill="#fff">
      <circle cx="1.3" cy="1.1" r="0.5"/>
      <circle cx="3.1" cy="1.1" r="0.5"/>
      <circle cx="4.9" cy="1.1" r="0.5"/>
      <circle cx="6.7" cy="1.1" r="0.5"/>
      <circle cx="2.2" cy="2.3" r="0.5"/>
      <circle cx="4.0" cy="2.3" r="0.5"/>
      <circle cx="5.8" cy="2.3" r="0.5"/>
      <circle cx="1.3" cy="3.5" r="0.5"/>
      <circle cx="3.1" cy="3.5" r="0.5"/>
      <circle cx="4.9" cy="3.5" r="0.5"/>
      <circle cx="6.7" cy="3.5" r="0.5"/>
      <circle cx="2.2" cy="4.7" r="0.5"/>
      <circle cx="4.0" cy="4.7" r="0.5"/>
      <circle cx="5.8" cy="4.7" r="0.5"/>
      <circle cx="1.3" cy="5.9" r="0.5"/>
      <circle cx="3.1" cy="5.9" r="0.5"/>
      <circle cx="4.9" cy="5.9" r="0.5"/>
      <circle cx="6.7" cy="5.9" r="0.5"/>
    </g>
  </svg>
);

// Bandeira do Brasil (mantida)
export const FlagBR = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" rx="2" fill="#009B3A"/>
    <polygon points="10,2 18,7 10,12 2,7" fill="#FFDF00"/>
    <circle cx="10" cy="7" r="3" fill="#3E4095"/>
    <rect x="7" y="6.5" width="6" height="1" rx="0.5" fill="#fff"/>
  </svg>
);
