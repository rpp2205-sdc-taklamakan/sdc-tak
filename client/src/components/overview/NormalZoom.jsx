import React from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

class NormalZoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  next() {
    var nextIndex = this.props.selectedPhotoIndex + 1;
    this.props.photoChange(nextIndex);
  }

  previous() {
    var prevIndex = this.props.selectedPhotoIndex - 1;
    this.props.photoChange(prevIndex);
  }

  render() {
    var currentPhoto = this.props.photos[this.props.selectedPhotoIndex];
    return (
      <div className='default-view'>
        <HiArrowNarrowLeft className={this.props.selectedPhotoIndex !== 0 ? 'arrow-icon-white' : 'arrow-icon-white hidden'} onClick={this.previous.bind(this)} />
        {currentPhoto !== null
          ? <div className='big-picture plus-cursor'style={{backgroundImage:`url(${currentPhoto})`}} onClick={this.props.toggleZoom} ></div>
          : <div className='big-picture no-thumbnail' ></div>
        }
        <HiArrowNarrowRight className={this.props.selectedPhotoIndex !== this.props.photos.length - 1 ? 'arrow-icon-white' : 'arrow-icon-white hidden'} onClick={this.next.bind(this)} />
      </div>
    )
  }
}

export default NormalZoom;