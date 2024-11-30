import { useEffect, useContext } from "react";
import axios from "axios";
import Display from "../components/Display";
import WorkoutForm from "../components/WorkoutForm";
import { WorkoutContext } from "../context/WrokoutContext";

function Home() {
  const { workouts, dispatch } = useContext(WorkoutContext);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("http://localhost:4000/api/workouts");
      if (response.status === 200) {
        dispatch({ type: "SET_WORKOUTS", payload: response.data });
      }
    };
    fetchdata();
  }, [dispatch]);

  return (
    <div className="home flex justify-between">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <Display key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
