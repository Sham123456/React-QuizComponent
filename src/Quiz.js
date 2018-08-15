import React, {Component} from 'react';
import quizData from './quiz_data.json';
import QuizQuestions from './QuizQuestions';
import QuizEnd from "./QuizEnd";

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {
            quiz_position : 1
        }
    }

    handleResetClick(){
        this.setState({quiz_position : 1})
    }

    showNextQuestion() {
        const currentPosition = this.state.quiz_position;
        this.setState({quiz_position: currentPosition + 1});
    }

    render(){
        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length) ? true : false ;
        if(isQuizEnd){
            return(
                <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/>
            )
        }else{
            return(
                <QuizQuestions quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)}/>
            )
        }
    }
}


export default Quiz;