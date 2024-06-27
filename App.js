import { BrowserRouter as Route } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Route>
      <AppRoutes />
    </Route>
  );
}

export default App;
