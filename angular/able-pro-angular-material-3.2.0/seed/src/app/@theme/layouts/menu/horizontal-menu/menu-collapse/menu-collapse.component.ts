// Angular import
import { Component, OnInit, inject, input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterModule } from '@angular/router';

// project import
import { NavigationItem } from 'src/app/@theme/types/navigation';
import { SharedModule } from 'src/app/demo/shared/shared.module';
import { MenuItemHorizontalComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu-collapse',
  imports: [SharedModule, CommonModule, MenuItemHorizontalComponent, RouterModule],
  templateUrl: './menu-collapse.component.html',
  styleUrls: ['./menu-collapse.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', display: 'block' }),
        animate('250ms ease-in-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [animate('250ms ease-in-out', style({ transform: 'translateY(-100%)' }))])
    ])
  ]
})
export class MenuCollapseComponent implements OnInit {
  private location = inject(Location);

  // public props

  // all Version Get Item(Component Name Take)
  readonly item = input<NavigationItem>();
  current_url: string = ''; // Add current URL property
  visible;

  // Constructor
  constructor() {
    this.visible = false;
  }

  ngOnInit() {
    this.updateActiveMenu(); // Call updateActiveMenu on init
  }

  // Method to update the active menu item based on URL
  updateActiveMenu() {
    this.current_url = this.location.path();
    // eslint-disable-next-line
    //@ts-ignore
    const baseHref = this.location['_baseHref'] || ''; // Use baseHref if necessary
    this.current_url = baseHref + this.current_url;

    // Timeout to allow DOM to fully render before checking for the links
    setTimeout(() => {
      const links = document.querySelectorAll('a.nav-link') as NodeListOf<HTMLAnchorElement>;
      links.forEach((link: HTMLAnchorElement) => {
        if (link.getAttribute('href') === this.current_url) {
          this.activateParentMenu(link);
        }
      });
    }, 0);
  }

  // Method to activate the parent menu of the active item
  activateParentMenu(element: HTMLAnchorElement) {
    let parent = element.parentElement;
    while (parent && parent.classList) {
      if (parent.classList.contains('coded-hasmenu')) {
        parent.classList.add('coded-trigger');
        parent.classList.add('active');
      }
      parent = parent.parentElement;
    }
  }

  // Method to handle the collapse of the navigation menu
  navCollapse(e: MouseEvent) {
    let parent = e.target as HTMLElement;

    if (parent?.tagName === 'SPAN') {
      parent = parent.parentElement!;
    }

    parent = (parent as HTMLElement).parentElement!;

    const sections = document.querySelectorAll('.coded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('coded-trigger');
      }
    }

    let first_parent = parent.parentElement!;
    let pre_parent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement!;
    if (first_parent.classList.contains('coded-hasmenu')) {
      do {
        first_parent.classList.add('coded-trigger');
        first_parent = (first_parent.parentElement as HTMLElement).parentElement!;
      } while (first_parent.classList.contains('coded-hasmenu'));
    } else if (pre_parent.classList.contains('coded-submenu')) {
      do {
        pre_parent.parentElement?.classList.add('coded-trigger');
        pre_parent = (((pre_parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement!;
      } while (pre_parent.classList.contains('coded-submenu'));
    }
    parent.classList.toggle('coded-trigger');
  }
}
