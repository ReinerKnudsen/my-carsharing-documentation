import React from 'react';

interface ScreenshotsProps {
  iosImage: string;
  androidImage: string;
  caption?: string;
  alt?: string;
  height?: string;
}

export default function Screenshots({
  iosImage,
  androidImage,
  caption = '',
  alt = 'Screenshot',
  height = '600',
}: ScreenshotsProps): React.ReactElement {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
      <figure
        style={{
          margin: 0,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <img
          src={require(`@site/docs/${iosImage}`).default}
          alt={`${alt} - ${caption} auf iOS`}
          height={height}
        />
        <figcaption>{caption} auf iOS</figcaption>
      </figure>
      <figure
        style={{
          margin: 0,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <img
          src={require(`@site/docs/${androidImage}`).default}
          alt={`${alt} - ${caption} auf Android`}
          height={height}
        />
        <figcaption>{caption} auf Android</figcaption>
      </figure>
    </div>
  );
}
