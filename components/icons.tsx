
import React from 'react';

export const EthereumIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L11.2 3.5V13.5L12 14L12.8 13.5V3.5L12 2Z" fill="#8C8C8C"/>
    <path d="M12 15.5L11.2 16V20.5L12 22L12.8 20.5V16L12 15.5Z" fill="#8C8C8C"/>
    <path d="M12 2L5 12L12 14V2Z" fill="#C0C0C0"/>
    <path d="M12 2V14L19 12L12 2Z" fill="#8C8C8C"/>
    <path d="M12 15.5L5 13.5L12 22V15.5Z" fill="#C0C0C0"/>
    <path d="M12 15.5V22L19 13.5L12 15.5Z" fill="#8C8C8C"/>
  </svg>
);

export const BscIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2L4 7.2V16.8L12 22L20 16.8V7.2L12 2ZM8.5 10.5L12 12.3L15.5 10.5L12 8.7L8.5 10.5ZM7 13L10.5 14.8V17L7 15.2V13ZM12 13.8L15.5 12L17 12.9V15.1L12 17.8L7 15.1V12.9L8.5 12L12 13.8ZM13.5 14.8V17L17 15.2V13L13.5 14.8Z" fill="#F0B90B"/>
    </svg>
);

export const ArbitrumIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 18.25C11.31 18.25 10.75 17.69 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.69 12.69 18.25 12 18.25ZM16.5 12.5C15.12 12.5 14.25 11.08 14.25 10C14.25 8.92 15.12 7.5 16.5 7.5C17.88 7.5 18.75 8.92 18.75 10C18.75 11.08 17.88 12.5 16.5 12.5ZM7.5 12.5C6.12 12.5 5.25 11.08 5.25 10C5.25 8.92 6.12 7.5 7.5 7.5C8.88 7.5 9.75 8.92 9.75 10C9.75 11.08 8.88 12.5 7.5 12.5Z" fill="#28A0F0"/>
    </svg>
);

export const PolygonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.33 5.43L12 2.5L17.67 5.43L19.5 9.22V14.78L17.67 18.57L12 21.5L6.33 18.57L4.5 14.78V9.22L6.33 5.43ZM12 4.4L8.14 6.64L9.43 9.22L12 7.8L14.57 9.22L15.86 6.64L12 4.4ZM10.5 10.5L8 12L10.5 13.5V10.5ZM13.5 10.5V13.5L16 12L13.5 10.5ZM12 16.2L9.43 14.78L8.14 17.36L12 19.6L15.86 17.36L14.57 14.78L12 16.2Z" fill="#8247E5"/>
    </svg>
);

export const AvalancheIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 8.5V15.5L12 22L22 15.5V8.5L12 2ZM11 11.5L7 9.5L11 7.5V11.5ZM13 11.5V7.5L17 9.5L13 11.5ZM11 13V17L7 15L11 13ZM13 13L17 15L13 17V13Z" fill="#E84142"/>
    </svg>
);

export const FantomIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.5 17H10.5V14H7.5V11H10.5V8H13.5V11H16.5V14H13.5V17Z" fill="#13B5EC"/>
    </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const RefreshIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-11.664 0l-3.182-3.182a8.25 8.25 0 0111.664 0l3.182 3.182" />
  </svg>
);

export const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const ChainIcon: React.FC<{ chain: string; className?: string }> = ({ chain, className }) => {
  switch (chain.toLowerCase()) {
    case 'ethereum': return <EthereumIcon className={className} />;
    case 'bsc':
    case 'bnb chain': return <BscIcon className={className} />;
    case 'arbitrum': return <ArbitrumIcon className={className} />;
    case 'polygon': return <PolygonIcon className={className} />;
    case 'avax':
    case 'avalanche': return <AvalancheIcon className={className} />;
    case 'fantom': return <FantomIcon className={className} />;
    default: return <div className={`w-6 h-6 rounded-full bg-gray-600 ${className}`} />;
  }
};
