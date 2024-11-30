import { useContext } from "react";
import { WorkoutContext } from "../context/WrokoutContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function Display({ workout }) {
  const { dispatch } = useContext(WorkoutContext);

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="min-h-24 w-[400px] bg-white rounded-md mt-8 px-5">
      <h4 className="text-green-900 text-lg font-bold">{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <button onClick={handleDelete} className="px-3 py-2 bg-red-500 ml-[100px] rounded-lg">
        Delete
      </button>
    </div>
  );
}
