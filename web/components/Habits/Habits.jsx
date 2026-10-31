import Habit from "./Habit"
import CustomButton from "../Common/CustomButton"

export default function Habits(){
    return (
        <div className="flex flex-col w-full gap-2 pt-4">
          <p className="font-semibold text-lg text-blue-500">My habits</p>  
          <Habit name={"Meditation"} frequency={"1/day"}></Habit>
          <Habit name={"Meditation"} frequency={"1/day"}></Habit>
          <Habit name={"Meditation"} frequency={"1/day"}></Habit>
          <Habit name={"Meditation"} frequency={"1/day"}></Habit>
          <Habit name={"Meditation"} frequency={"1/day"}></Habit>
          <CustomButton width={"max"} className="w-full" buttonText={"Add new habit"}></CustomButton>
        </div>
    )
}