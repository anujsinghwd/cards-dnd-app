import React, { useContext } from "react";

import { DragItem, Grid, GridItem, GridContext, CardContainer, TitleContainer } from "../../components";

const HomePage = () => {
  const { items, moveItem } = useContext(GridContext);

  return (
    <Grid>
      {items.map(item => (
        <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
          <GridItem>
            <CardContainer>
              <TitleContainer>
                <h4>{item.attr}</h4>
              </TitleContainer>
              <img src={item.src} alt={item.attr} style={{ maxWidth: '100%', backgroundPosition: '50%', backgroundSize: 'cover' }} />
            </CardContainer>
          </GridItem>
        </DragItem>
      ))}
    </Grid>
  )
};

export default HomePage;
