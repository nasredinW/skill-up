import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

interface Quiz {
  questions: Question[];
}

interface Question {
  question: string;
  options: Option[];
}

interface Option {
  value: string;
  correct: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  private url = 'http://localhost:1998/quizzes/add';

  constructor(private http: HttpClient) {}

  addQuiz(quiz: Quiz): Observable<Quiz> {
    return this.http.post<Quiz>(this.url, quiz);
  }
}
