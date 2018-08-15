import React, {Component} from 'react';
import quizData from './quiz_data.json';
import QuizQuestions from './QuizQuestions';

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            quiz_position : 1
        }
    }

    render(){
        return(
            <QuizQuestions quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
        )
    }
}


export default Quiz;