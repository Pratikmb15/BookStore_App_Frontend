import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/Book/book.service';
import { response } from 'express';

interface Book {
  bookId: number;
  bookName: string;
  author: string;
  description: string;
  price: number;
  discuount: number;  // Note: There's a typo here ('discuount' instead of 'discount')
  quantity: number;
  imageUrl: string;
}
@Component({
  selector: 'app-display-books',
  standalone: false,
  templateUrl: './display-books.component.html',
  styleUrl: './display-books.component.scss'
})
export class DisplayBooksComponent implements OnInit {
  error:any;
  books: Book[] = [];
  currentPage = 1;
  totalPages = 10;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.fetchBooks();
   }

  changePage(page: number): void {
    this.currentPage = page;
  }

  fetchBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (response: any) => {
        console.log('Books response:', response);
        if (response && response.success && response.data) {
          // Add UI state properties to each note
          this.books = response.data;
        } else {
          this.error = 'Invalid response format';
          console.error('Invalid response format:', response);
        }

      }
    })
  }
}
