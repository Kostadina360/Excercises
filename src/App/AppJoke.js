import React from 'react'
import Joke from './Joke'

function AppJoke() {
    return (
        <div>
             <Joke 
             question= 'What does a nosey pepper do?'
             punchLine='Gets jalapeno business!'
               
             />
             <Joke
            question= 'What do you call an alligator in a vest?'
            punchLine='An Investigator'
              />
             <Joke
            question='What do you call a fake noodle?'
            punchLine='An Impasta'
              />
             <Joke
            question='What’s the difference between a guitar and a fish?'
            punchLine='You can’t tuna fish.'
            />
             <Joke
            question='What do you get from a pampered cow?'
            punchLine=' Spoiled milk.'
             />
        </div>
       
    )
}

export default AppJoke