module.exports = (doc, name) => {
  // handsome photo
  doc.image('yo.jpg', 440, 292, {
    fit: [354, 500],
    align: 'left',
    valign: 'bottom'
  });

  // binary
  doc
    .font('fonts/HelveticaNowText-Thin.ttf')
    .fillColor('#B2B2B2')
    .fontSize(10)
    .text(
      '01110100 01101000 01101001 01101110 01101011 00100000 01100100 01101001 01100110 01100110 01100101 01110010 01100101 01101110 01110100 00100000 01100001 01101110 01100100 00100000 01100011 01110010 01100101 01100001 01110100 01100101',
      doc.page.width - 220,
      20,
      {
        width: 200,
        lineGap: -2,
        align: 'right'
      }
    );

  doc.fillColor('#000');

  // introduction
  doc
    .font('fonts/HelveticaNowText-ExtraBold.ttf')
    .fontSize(50)
    .text('HI,', 20, 5)
    .fillColor('#252525')
    .moveDown(-0.35);
  doc
    .font('fonts/HelveticaNowText-ExtraBold.ttf')
    .text(name)
    .fillColor('#464646')
    .moveDown(-0.4);
  doc
    .font('fonts/HelveticaNowText-ExtraBold.ttf')
    .text("I'M")
    .fillColor('#636363')
    .moveDown(-0.4);
  doc
    .font('fonts/HelveticaNowText-ExtraBold.ttf')
    .text('RICK')
    .fillColor('#7d7d7d')
    .moveDown(-0.4);
  doc
    .font('fonts/HelveticaNowText-ExtraBold.ttf')
    .text('JIMENEZ')
    .moveDown(-0.2);
  doc
    .font('fonts/HelveticaNowText-Thin.ttf')
    .fontSize(25)
    .text('Software and Systems Engineer')
    .moveDown(0.2);

  // about me
  doc
    .font('fonts/HelveticaNowText-Light.ttf')
    .fontSize(10)
    .text(
      `I have 18 years of work experience in the digital environment, and I have worked primarily in advertising agencies and software development companies. Additionally, I’ve been part of projects including video editing and post production, 3D product modeling, graphic design and photography.`,
      {
        lineGap: -2,
        align: 'justify'
      }
    )
    .moveDown();

  doc
    .text(
      `I dedicate myself to creating connections between people by merging technology with knowledge.`,
      {
        lineGap: -2,
        align: 'justify'
      }
    )
    .moveDown();

  doc.text(
    `I believe in the transformation of all things and manage my philosophy through this world. In a few words, I define myself as a person in constant evolution..`,
    {
      width: 490,
      lineGap: -2,
      align: 'justify'
    }
  );
};
