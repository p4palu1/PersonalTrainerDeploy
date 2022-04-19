import './App.css';
import Footer from "./components/Footer"
import Header from "./components/Header"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from "react-bootstrap"
import HomeScreen from "./screens/HomeScreen"
import WorkoutScreen from "./screens/WorkoutScreen"
import WorkoutSignForScreen from "./screens/WorkoutSignForScreen"
import LoginScreen from "./screens/LoginScreen"
import ProfileScreen from "./screens/ProfileScreen"
import WorkoutUpdateScreen from "./screens/WorkoutUpdateScreen"
import WorkoutCreateScreen from "./screens/WorkoutCreateScreen"
import WorkoutListScreen from "./screens/WorkoutListScreen"
import WorkoutsAvalableScreen from "./screens/WorkoutsAvailableScreen"
import CalendarScreen from "./screens/CalendarScreen"



function App() {
  return (
    <Router>
      <Header />
          <Route path="/workouts/sign/:id" component={WorkoutSignForScreen} exact/>
          <Route path="/workouts/update/:id" component={WorkoutUpdateScreen} exact/>
          <Route path="/workouts/create" component={WorkoutCreateScreen} exact/>
          <Route path="/admin/workouts" component={WorkoutListScreen} exact />
          <Route path="/workouts/:id" component={WorkoutScreen} exact />
          <Route path="/schedule" component={CalendarScreen} exact />
          <Route path="/workouts" component={WorkoutsAvalableScreen} exact />
          <Route path="/search/:keyword" component={WorkoutsAvalableScreen} />
          <Route path="/profile" component={ProfileScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/" component={HomeScreen} exact />

      <Footer />
    </Router>
  );
}

export default App;
