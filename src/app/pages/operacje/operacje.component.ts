import { Component } from '@angular/core';

@Component({
  selector: 'app-operacje',
  standalone: true,
  imports: [],
  templateUrl: './operacje.component.html',
  styleUrl: './operacje.component.css',
})
export class OperacjeComponent {
  jakie_dane = document.getElementById('inputText') as HTMLInputElement;
  co_znalazlem = document.getElementById('output') as HTMLDivElement;

  link_do_API = 'https://jsonplaceholder.typicode.com/posts';

  // ---- GET: wyszukiwanie posta po ID ----
  async getPost() {
    const id = this.jakie_dane.value.trim();
    if (!id) {
      this.co_znalazlem.innerText = 'Podaj ID posta do wyszukania!';
      return;
    }
    try {
      const res = await fetch(`${this.link_do_API}/${id}`);
      if (!res.ok) throw new Error('Nie znaleziono posta!');
      const data = await res.json();
      this.co_znalazlem.innerText = `ID: ${data.id}nTitle: ${data.title}nBody: ${data.body}`;
    } catch (err) {
      this.co_znalazlem.innerText = `Błąd: ${(err as Error).message}`;
    }
  }
}
