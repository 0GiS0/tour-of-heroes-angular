import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  standalone: false,
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  loading = false;
  saving = false;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.loading = true;
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.loading = false;
    });
  }

  add(Name: string): void {
    Name = Name.trim();
    if (!Name) {
      return;
    }
    this.saving = true;
    this.heroService.addHero({ name: Name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
      this.saving = false;
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h! == hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
