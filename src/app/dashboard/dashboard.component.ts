import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  loading = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes.slice(1, 5);
      this.loading = false;
    });
  }
}
