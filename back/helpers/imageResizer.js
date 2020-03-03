const sharp = require("sharp");
const uuid = require("uuid/v4");
const path = require("path");

class Resize {
  constructor(imagePath) {
    this.imagePath = imagePath;

    this.saveImage = this.saveImage.bind(this);
  }

  async saveFile(image) {
    const resizedFileName = this.randomFileName();
    const resizedFilePath = this.relativeFilePath(resizedFileName);

    await this.resizeFile(image, resizedFilePath);

    return resizedFileName;
  }

  async resizeFile(buffer, filePath) {
    return await sharp(buffer)
      .resize(300, 300, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(filePath);
  }

  static randomFileName() {
    return `${uuid}.png`;
  }

  relativeFilePath(generatedFileName) {
    return path.resolve(`${this.imagePath}/${generatedFileName}`);
  }
}

module.exports = Resize;
