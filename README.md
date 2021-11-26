# Aplicación de ejemplo en Angular: Tour Of Heroes

En esta versión del proyecto basado en el tutorial de AngularJS se modifica el dashboard para visualizar las fotos de los top super héroes:

```
<h2>Top Heroes</h2>
<div class="heroes-menu">
    <a *ngFor="let hero of heroes" routerLink="/detail/{{hero.id}}">
        <!-- {{hero.name}} -->
        <img class="image featured" src="https://lemonheroes.blob.core.windows.net/heroes/artistic/{{hero.name | lowercase | replace: ' ':'-'}}.jpeg" alt="{{hero.name}}" />
    </a>
</div>
<app-hero-search></app-hero-search>
```

Gracias a esta Logic App:

<img src="images/tour-of-heroes-logic-app.png" alt="logic-app" style="width:600px;"/>

