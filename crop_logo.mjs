import sharp from 'sharp';

async function processLogo() {
  const inputPath = 'public/logo_alta_jeronimo_sem_fundo.png';
  
  // 1. Trim transparent borders
  const trimmed = await sharp(inputPath)
    .trim()
    .toBuffer({ resolveWithObject: true });
    
  console.log(`Trimmed size: ${trimmed.info.width}x${trimmed.info.height}`);

  // Save the tightly cropped logo
  await sharp(trimmed.data)
    .png()
    .toFile('public/logo.png');

  await sharp(trimmed.data)
    .png()
    .toFile('public/logo_cropped.png');

  // Let's also create an inverted / white text variant for dark background if needed
  // In the original logo: emblem is orange, text is dark navy.
  // When displayed on dark navy #081325, the dark text might be hard to read.
  // Let's create a version where dark pixels are lightened/made crisp white and orange stays vibrant!
  const { data, info } = await sharp(trimmed.data)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const whiteTextData = Buffer.from(data);
  for (let i = 0; i < whiteTextData.length; i += info.channels) {
    const r = whiteTextData[i];
    const g = whiteTextData[i + 1];
    const b = whiteTextData[i + 2];
    const a = info.channels === 4 ? whiteTextData[i + 3] : 255;

    if (a > 30) {
      // Check if it's the dark navy text (low red, dark tone)
      const isNavy = r < 70 && g < 90 && b < 130;
      if (isNavy) {
        // Change to crisp white/off-white #F8FAFC
        whiteTextData[i] = 248;
        whiteTextData[i + 1] = 250;
        whiteTextData[i + 2] = 252;
      }
    }
  }

  await sharp(whiteTextData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  })
    .png()
    .toFile('public/logo_white.png');

  console.log('Successfully created public/logo.png and public/logo_white.png!');
}

processLogo().catch(console.error);
