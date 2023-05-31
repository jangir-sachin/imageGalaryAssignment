import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button, IconButton, } from '@material-ui/core';
import { PlayArrow, Pause, ChevronLeft, ChevronRight, Style } from '@material-ui/icons';

// Define your image data here
const images = [
  { src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', alt: 'Image 1', details: 'W Maldives', para:'  the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text. Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder textor placeholder text. Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.' },
  { src: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg', alt: 'Image 2', details: 'W Maldives', para:'  ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem IImage details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.psum online text generator creates fictitious, fake,Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text. Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text causal, or placeholder text.' },
  { src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', alt: 'Image 1', details: 'W Maldives', para:'  ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text. Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text or placeholder text.' },
  { src: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg', alt: 'Image 2', details: 'W Maldives', para:' the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text. online text generator creates fictitious, fake, causal,Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text. Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text or placeholder text.' },
    { src: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg', alt: 'Image 2', details: 'W Maldives', para:' ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text. Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text. Image details 1 ehffmUse the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.Use the text generator to create your own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text own text! The Lorem Ipsum online text generator creates fictitious, fake, causal, or placeholder text.' },
  // Add more images as needed
];


const CatalogViewer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const showPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleSlideshow = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const showImage = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  return (
    <Grid style={{padding:'20px'}} container spacing={3}>
      <Grid item xs={12} md={8}>
        <Paper style={{marginBottom:'20px'}}>
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} style={{ width: '100%', height:'400px', borderRadius:'20px', }} />
        </Paper>
        <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid  item xs={12}>
          
            <Grid container justify="center" spacing={2}>
            <IconButton onClick={showPreviousImage}>
              <ChevronLeft />
            </IconButton>
                {images.map((image, index) => (
                <Grid item key={index}>
                    <Button 
                    style={{padding:'0px'}}
                    onClick={() => showImage(index)}
                    variant={currentIndex === index ? 'contained' : 'outlined'}
                    color="primary"
                    >
                    <img
                        src={image.src}
                        alt={image.alt}
                        style={{ width: '110px', height: '100px',  borderRadius:'12px', }}
                    />
                    </Button>
                </Grid>
                ))}
                <IconButton onClick={showNextImage}>
              <ChevronRight />
            </IconButton>
            </Grid>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper>
          <Typography variant="h6">{images[currentIndex].details}</Typography>
        </Paper>
        <Grid style={{height:'420px', }}>
    
        <p>
        {images[currentIndex].para}
        </p>
        </Grid>
        <Grid style={{textAlign:'center'}} item>
            <IconButton style={{ backgroundColor:'blue', color:'white' }} onClick={toggleSlideshow}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
          </Grid>
      </Grid>
    </Grid>
  );
};

export default CatalogViewer;
