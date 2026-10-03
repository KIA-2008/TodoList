import { useEffect , useState } from "react";
import corzina from "./corzina.png"
import "./App.css"

function App(){
  const [todos , setTodos] = useState([
  {
    name: "Maga",
    age: 25
  },
  {
    name: "Alex",
    age: 25
  },
  {
    name: "Dida",
    age: 25
  }
])
  const [text , setText] = useState("")


  ////////////////////////////////////////////////////////////////

//   const [cars , setCars] = useState([
//   {
//     marka: "Mersedes",
//     model: "Benz"
//   },
//   {
//     marka: "BMW",
//     model: "E60"
//   },
//   {
//     marka: "Audi",
//     model: "RS"
//   }
//   ])

//   const [ textCar , settextCar] = useState("")

// function addCar(){
//   const newCar = {
//     marka: textCar,
//     model: "RS"
//   }
//   setCars([...cars, newCar])
//   console.log(cars);
//   return cars
// }

/////////////////////////////////////////////////////////////////////////


function addTodo(){
  const newTodo = {
    name: text,
    age: 0
  }
setTodos([...todos, newTodo])
console.log(todos);
return todos

}



  return(
    <div className="App">
      <h3>TodList</h3>
      <div className="form_list">
        <div className="add_date">
          <input className="input_todos" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Новая задача ..."/>
          <button className="btn_todos" onClick={()=> addTodo()} >Добавить</button>
          {/* <input value={textCar} onChange={(e)=> settextCar(e.target.value)} placeholder="Новый автомобиль ..."/>
          <button onClick={()=> addCar()} >Добавить</button> */}
        </div>

        <div className="spisok_todos">
          <h1>СПИСОК ЗАДАЧ</h1>
          <ul className="ul_todos">
            {todos.map((todo , index)=>{
                return<li key={index}>{todo.name}
                <div className="icon_corz"> <img src={corzina}/></div>
                </li>
            })}
            
          </ul>
          {/* <ul>
            {cars.map((car , index)=>{
                return<li key={index}>{car.marka}</li>
            })}
          </ul> */}

        </div>
      </div>
    </div>
  )
}

export default App