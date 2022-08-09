import React from 'react'
const courses = [{
    id: 1,
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
  ]

  
    const Header = (props) => {
      return (
        <div>
          <h2>
            {props.name}
          </h2>
        </div>
      )
    }
  
    const Course=(props) =>{
        return (
          <div>
          <Header name= {props.course.name} />
          <Content parts={props.course.parts} />
          <Total parts= {props.course.parts} />
          </div>
        ) 
        }
    const Content = (props) => {
      return(
        <div>
          {props.parts.map((item) => (<Part name={item.name} exercises={item.exercises} />))}             
        </div>
      )
    }
  
    const Part=(props) => {
        return (
             <p>{props.name}  {props.exercises}</p>
        )
      }
      
      const Total=(props)=>{
        const total = props.parts.reduce((s, p) => s + p.exercises,0);
        return <strong>Number of exercises : {total}</strong>
      }

      class CourseComponent extends React.Component {
        render() {
            return (
                <div>
                <h1>Web Development Curriculum</h1>
                {courses.map((course) => ( <Course course={course}/>))} 
                </div>
              ) 
        }
      }

  export default CourseComponent