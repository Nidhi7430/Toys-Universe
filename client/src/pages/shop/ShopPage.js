import React from 'react';
import InnerBanner from '../../components/inner_banner/InnerBanner';
import shop from '../../images/shop.webp';
import ShopProduct from '../../components/shop_product/ShopProduct';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import latest_arrival1 from '../../images/latest_arrival1.jpg';
import latest_arrival2 from '../../images/latest_arrival2.jpg';
import latest_arrival3 from '../../images/latest_arrival3.jpg';
import latest_arrival4 from '../../images/latest_arrival4.jpg';
import latest_arrival5 from '../../images/latest_arrival5.jpg';
import latest_arrival6 from '../../images/latest_arrival6.jpg';
import latest_arrival1_hover from '../../images/latest_arrival1_hover.jpg';
import latest_arrival2_hover from '../../images/latest_arrival2_hover.jpg';
import latest_arrival3_hover from '../../images/latest_arrival3_hover.jpg';
import latest_arrival4_hover from '../../images/latest_arrival4_hover.jpg';
import latest_arrival5_hover from '../../images/latest_arrival5_hover.jpg';
import latest_arrival6_hover from '../../images/latest_arrival6_hover.jpg';
import { PageLayout } from '../../components/page_layout/PageLayout';

const ShopPage = () => {
  return (
    <PageLayout>
      <InnerBanner image={shop} title="Shop" />
      <MDBContainer className="py-5 my-3">
        <MDBRow>
          <MDBCol lg="4" sm="6" xs="12" className="my-3">
            <div className="shadow-5-strong rounded-3 square">
              <ShopProduct
                image={latest_arrival1}
                image_hover={latest_arrival1_hover}
                cardTitle="Bird Puzzle"
                cardText="Rs.499"
                modalTitle="Bird Puzzle"
                modalText="Rs.499"
                modalImage1={latest_arrival1}
                modalImage2={latest_arrival1_hover}
                material="Wood"
                thickness="3mm (0.3cm)"
                size='5.5" x 5.5" inch (14 x 14cm)'
                packageContains="2x2 puzzle, set of 6 different Fruits in 1 box (24 Pieces)."
                itemNumber=" MR05"
              />
            </div>
          </MDBCol>
          <MDBCol lg="4" sm="6" xs="12" className="my-3">
            <div className="shadow-5-strong rounded-3 square">
              <ShopProduct
                image={latest_arrival2}
                image_hover={latest_arrival2_hover}
                cardTitle="Fruit Puzzle"
                cardText="Rs.499"
                modalTitle="Fruit Puzzle"
                modalText="Rs.499"
                modalImage1={latest_arrival2}
                modalImage2={latest_arrival2_hover}
                material="Wood"
                thickness="3mm (0.3cm)"
                size='5.5" x 5.5" inch (14 x 14cm)'
                packageContains="2x2 puzzle, set of 6 different fruits in 1 box"
                itemNumber=" MR03"
              />
            </div>
          </MDBCol>
          <MDBCol lg="4" sm="6" xs="12" className="my-3">
            <div className="shadow-5-strong rounded-3 square">
              <ShopProduct
                image={latest_arrival3}
                image_hover={latest_arrival3_hover}
                cardTitle="Numbers Puzzle"
                cardText="Rs.449"
                modalTitle="Numbers Puzzle"
                modalText="Rs.449"
                modalImage1={latest_arrival3}
                modalImage2={latest_arrival3_hover}
                material="Wood"
                thickness="3mm (0.3cm)"
                size='2.2" x 4.7" inch (5.5 x 12cm)'
                packageContains="2x1 puzzle, 1 to 10 different Puzzles in 1 box (20 Pieces)."
                itemNumber=" MR04"
              />
            </div>
          </MDBCol>
          <MDBCol lg="4" sm="6" xs="12" className="my-3">
            <div className="shadow-5-strong rounded-3 square">
              <ShopProduct
                image={latest_arrival4}
                image_hover={latest_arrival4_hover}
                cardTitle="Solar System Puzzle"
                cardText="Rs.399"
                modalTitle="Solar System Puzzle"
                modalText="Rs.399"
                modalImage1={latest_arrival4}
                modalImage2={latest_arrival4_hover}
                material="Wood"
                thickness="3mm (0.3cm)"
                size='7.5" x 11.25" inch (19 x 28.5cm)'
                packageContains="4x6 Solar System Puzzle with a reference sheet (24 pieces)."
                itemNumber=" MR07"
              />
            </div>
          </MDBCol>
          <MDBCol lg="4" sm="6" xs="12" className="my-3">
            <div className="shadow-5-strong rounded-3 square">
              <ShopProduct
                image={latest_arrival5}
                image_hover={latest_arrival5_hover}
                cardTitle="Animal Puzzle"
                cardText="Rs.499"
                modalTitle="Animal Puzzle"
                modalText="Rs.499"
                modalImage1={latest_arrival5}
                modalImage2={latest_arrival5_hover}
                material="Wood"
                thickness="3mm (0.3cm)"
                size='5.5" x 5.5" inch (14 x 14cm)'
                packageContains="3x3 puzzle, set of 4 different Fruits in 1 box (36 pieces)."
                itemNumber=" MR06"
              />
            </div>
          </MDBCol>
          <MDBCol lg="4" sm="6" xs="12" className="my-3">
            <div className="shadow-5-strong rounded-3 square">
              <ShopProduct
                image={latest_arrival6}
                image_hover={latest_arrival6_hover}
                cardTitle="Wild Animal Puzzle"
                cardText="Rs.499"
                modalTitle="Wild Animal Puzzle"
                modalText="Rs.499"
                modalImage1={latest_arrival6}
                modalImage2={latest_arrival6_hover}
                material="Wood"
                thickness="3mm (0.3cm)"
                size='5.5" x 5.5" inch (14 x 14cm)'
                packageContains="2x2 puzzle, set of 6 different animals in 1 box"
                itemNumber=" MR02"
              />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </PageLayout>
  );
};

export default ShopPage;
