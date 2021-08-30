import React, { useContext, useRef, useState } from "react";
import useEventListener from '@use-it/event-listener'

import { 
  DragItem, 
  Grid, 
  GridItem, 
  GridContext, 
  CardContainer, 
  TitleContainer, 
  ViewImage 
} from "../../components";

const ESCAPE_KEYS = ['27', 'Escape'];

const HomePage = () => {
  const { items, moveItem } = useContext(GridContext);

  const [loading, setLoading] = useState(true);
  const [imageDialog, setImageDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= items.length) {
      setLoading(false);
    }
  }

  const onKeyPressHandler = ({ key }) => {
    if (ESCAPE_KEYS.includes(String(key))) {
      setImageDialog(false);
    }
  }

  useEventListener('keydown', onKeyPressHandler);

  const loadFullImage = (url) => {
    setCurrentImage(url);
    setImageDialog(true);
  }

  const closeImageModal = () => setImageDialog(false);

  return (
    <Grid>
      {items.map(item => (
        <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
          <GridItem>
            <div style={{ display: loading ? "block" : "none" }}>
              <div style={{ paddingTop: '100.000%', position: "relative" }}>
                <img
                  src="https://i.stack.imgur.com/h6viz.gif"
                  width="100%"
                  height="100%"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <CardContainer style={{ display: loading ? "none" : "block" }}>
              <TitleContainer>
                <h4>{item.attr}</h4>
              </TitleContainer>
              <img
                src={item.src}
                onLoad={imageLoaded}
                alt={item.attr}
                style={{
                  maxWidth: '100%',
                  backgroundPosition: '50%',
                  backgroundSize: 'cover'
                }}
                onClick={() => loadFullImage(item.src)}
              />
            </CardContainer>
          </GridItem>
        </DragItem>
      ))}
      {imageDialog && <ViewImage closeImageModal={closeImageModal} src={currentImage} />}
    </Grid>
  )
};

export default HomePage;
