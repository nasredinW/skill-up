import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {isBool} from "pdfjs-dist/types/shared/util";


@Component({
  selector: 'app-quizz-form',
  templateUrl: './quizz-form.component.html',
  styleUrls: ['./quizz-form.component.css']
})
export class QuizzFormComponent implements OnInit{

  quizForm!: FormGroup;

  questions: any[] = [];

  @Output() newItemEvent = new EventEmitter<object>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.quizForm = this.fb.group({
      question: [''],
      option1: [''],
      option2: [''],
      option3: [''],
      option4: [''],
      correctAnswer: ['option1']
    });
  }

  addQuestion(): void {
    const question = this.quizForm.get('question')?.value;
    const option1 = this.quizForm.get('option1')?.value;
    const option2 = this.quizForm.get('option2')?.value;
    const option3 = this.quizForm.get('option3')?.value;
    const option4 = this.quizForm.get('option4')?.value;
    const correctAnswer = this.quizForm.get('correctAnswer')?.value;

    const options = [
      {value: option1, correct: correctAnswer === 'option1'},
      {value: option2, correct: correctAnswer === 'option2'},
      {value: option3, correct: correctAnswer === 'option3'},
      {value: option4, correct: correctAnswer === 'option4'}
    ];

    this.questions.push({question, options});
    this.quizForm.reset();
  }

  onSubmit(): void {


    // @ts-ignore
    console.log(this.questions.options )
    console.log(this.questions)
    this.newItemEvent.emit(this.questions);


  }


}
