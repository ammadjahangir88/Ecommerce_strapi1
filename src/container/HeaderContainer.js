import Header from  "../components/Header"
import {connect} from  'react-redux'
import {addToCart} from  '../services/Actions/actions'


const mapStateToProps=state =>({
  cardData: state.cardItems
})

const mapDispatchToProps= dispatch=>({
   
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
// export default Home