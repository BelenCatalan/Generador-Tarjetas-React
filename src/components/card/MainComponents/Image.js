import React from 'react';
const fr = new FileReader();
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fakeFileClick = this.fakeFileClick.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      profileImage: '',
    };
  }
  handleImage(e) {
    let myFile = e.target.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }
  writeImage() {
    // console.log(fr.result);
    this.setState({
      profileImage: fr.result,
    });
    // console.log(this.state.profileImage);
  }
  fakeFileClick(e) {
    e.preventDefault();
    this.fileInput.click();
  }
  render() {
    return (
      <div>
        <label for='img' class='label-img'>
          Imagen de perfil
        </label>
        <div class='img-container'>
          <input onChange={this.handleImage} type='file' name='' id='img-selector' class='hiddenField js__profile-upload-btn' ref={(fileInput) => (this.fileInput = fileInput)} />
          <button type='button' class='btn-add js-btn-img' onClick={this.fakeFileClick}>
            Añadir imagen
          </button>
          <div class='img-user js-preview' style={{ backgroundImage: `url(${this.state.profileImage})` }}></div>
        </div>
      </div>
    );
  }
}

export default Image;
// function getImage(e) {
//   var myFile = e.currentTarget.files[0];

//   fr.addEventListener('load', writeImage);
//   fr.readAsDataURL(myFile);
// }

// function writeImage() {
//   /* En la propiedad `result` de nuestro FR se almacena el resultado
//    */
//   profileImage.src = `${fr.result}`;
//   profilePreview.style.backgroundImage = `url(${fr.result})`;
//   userInfo.photo = fr.result;
//   saveOnLocalStorage();
// }

// function fakeFileClick() {
//   fileField.click();
// }