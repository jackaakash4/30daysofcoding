
import Cardlist from './Cardlist'
import { robots } from './robots'
import Searchbox from './Searchbox'

const  state = {
    robots: robots,
    Searchfield: ''
}


const App = () => {
    return (
        <div className='tc'>
            <h1>RoboSibling</h1>
            <Searchbox/>
        <Cardlist robots={robots}/>
        </div>
    );
}

export default App;