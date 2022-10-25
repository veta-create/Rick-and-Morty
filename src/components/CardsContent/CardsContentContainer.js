import { connect } from "react-redux"
import CardsContent from "./CardsContent"

  let mapStateToProps = (state) => {
    return {
        cardsData: state.cardsData
    }
  }

  const CardsContentContainer = connect(mapStateToProps)(CardsContent)

  export default CardsContentContainer