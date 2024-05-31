const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Dimensions for the image
const width = 848;
const height = 600;

export async function createCertificate(
  studentName,
  instructorName,
  courseName,
  { fonts },
) {
  const { poppins, great_Vibes, playpen_sans } = fonts || {};
  const date = new Date();
  const completionDate =
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  const image = await loadImage("/cert-template.jpg");
  const pattern = context.createPattern(image, "no-repeat");
  context.fillStyle = pattern;
  context.fillRect(0, 0, width, height);
  context.font = `50px ${great_Vibes.style.fontFamily}`;
  context.textAlign = "center";
  context.fillStyle = "#e9b72e";
  context.fillText(studentName, 424, 305);
  context.font = `17px ${poppins.style.fontFamily}`;
  context.textAlign = "center";
  context.fillStyle = "#818589";
  const message = `for successfully completing ${courseName} online course on ${completionDate}`;
  const lines = formatTitle(message);
  context.fillText(lines[0], 424, 360);
  if (lines[1]) {
    context.fillText(lines[1], 424, 380);
  }
  if (lines[2]) {
    context.fillText(lines[2], 424, 400);
  }
  context.font = `8px ${playpen_sans.style.fontFamily}`;
  context.textAlign = "center";
  context.fillStyle = "#000";
  context.fillText("Best Regards", 424, 480);
  context.font = `20px ${great_Vibes.style.fontFamily}`;
  context.fillText(instructorName, 424, 510);
  // const buffer = canvas.toBuffer("image/jpeg");
  // here is the most important part because if you dont replace you will get a DOM 18 exception.
  const img = canvas
    .toDataURL("image/jpeg")
    .replace("image/jped", "image/octet-stream");

  return await getImage({
    canvas,
    ctx: context,
    width,
    height,
    mime: "image/jpeg",
    quality: 1,
  });
}

export const createCanvas = (width, height) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const bsr =
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    ctx.backingStorePixelRatio ||
    1;
  const pixelRatio = dpr / bsr;

  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;

  canvas.style.width = width + "px";
  canvas.style.height = height + "px";

  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

  return canvas;
};

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();

    function cleanup() {
      image.onload = null;
      image.onerror = null;
    }

    image.onload = () => {
      cleanup();
      resolve(image);
    };
    image.onerror = (err) => {
      cleanup();
      reject(err);
    };

    image.src = src;
  });
}

export const downloadFile = (dataUrl) => {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = "certificate.jpeg";
  a.click();
};

const formatTitle = (title) => {
  let output = [];

  const firstLine = getMaxNextLine(title);
  const secondLine = getMaxNextLine(firstLine.remainingChars);
  const thirdLine = getMaxNextLine(secondLine.remainingChars);

  output = [firstLine.line];
  let fmSecondLine = secondLine.line;

  if (secondLine.remainingChars.length > 0) fmSecondLine;
  output.push(fmSecondLine);

  let fmThirdLine = thirdLine.line;
  if (thirdLine.remainingChars.length > 0) fmThirdLine;

  output.push(fmThirdLine);

  return output;
};

const getMaxNextLine = (input, maxChars = 50) => {
  // Split the string into an array of words.
  const allWords = input.split(" ");
  // Find the index in the words array at which we should stop or we will exceed
  // maximum characters.
  //prev is current single response of reduce function
  // cur is current element
  //index is index of current element
  const lineIndex = allWords.reduce((prev, cur, index) => {
    //? means optional variable
    //prev.done=true means max chars have been considered for a line
    if (prev?.done) return prev;
    const endLastWord = prev?.position || 0;
    //plus 1 is for space character
    //position represents characters traversed till now for a line
    const position = endLastWord + 1 + cur.length;
    return position >= maxChars ? { done: true, index } : { position, index };
  });
  // Using the index, build a string for this line ...
  const line = allWords.slice(0, lineIndex.index).join(" ");
  // And determine what's left.
  const remainingChars = allWords.slice(lineIndex.index).join(" ");
  // Return the result.
  return { line, remainingChars };
};

export const getImage = async ({
  canvas,
  ctx,
  width,
  height,
  mime = "image/jpeg",
  quality = 1,
}) => {
  return new Promise((resolve) => {
    ctx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      width,
      height,
    );

    canvas.toBlob(resolve, mime, quality);
  });
};
