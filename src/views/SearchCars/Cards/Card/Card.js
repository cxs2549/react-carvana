import styled from 'styled-components'
import image from '../../../../assets/cards/journey.jpeg'

const StyledCard = styled.div`
box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
margin-bottom: 1rem;
border-radius: 4px;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  #info {
    padding: 1rem;
    padding-bottom: 3rem;
    > div {
      div {
        display: flex; 
        justify-content: space-between;
        margin-bottom: .75rem;
        > div {
          display: flex;
          flex-flow: column;
        }
      }
    }
    span {
      font-size: 12px;
    }
  }
`

const Card = () => {
  return (
    <StyledCard>
      <img src={image} alt="" />
      <div id="info">
        <span>Caravan Certified</span>
        <br />
        <div>
          <div>
            <h5>2018 Dodge <br /> Journey</h5>
            <h4>$23,590</h4>
          </div>
          <div>
            <div>
              <h6>Crossroad</h6>
              <h6>27,610</h6>
            </div>
            <div>
              <h6>Est. $426/mo</h6>
              <h6>$0 cash down</h6>
            </div>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

export default Card
