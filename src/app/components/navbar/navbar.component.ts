import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileModalComponent } from '../file-modal/file-modal.component';
import { ApiVtexService } from '../../services/api-vtex.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, FileModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  openModal = false;

  orders: string[] = [];
  inputOrders = '';

  constructor(
    private apiVtex: ApiVtexService,
    private loader: LoaderService
  ) {}

  // ====== BUSQUEDA DESDE INPUT ======
  searchFromInput() {
    this.orders = this.inputOrders
      .split(',')
      .map(o => o.trim())
      .filter(o => o.length > 0);

    if (!this.orders.length) return;

    this.executeSearch();
  }

  // ====== CARGA DESDE ARCHIVO ======
  onFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const content = reader.result as string;

      if (file.name.endsWith('.json')) {
        const parsed = JSON.parse(content);
        const raw = Array.isArray(parsed.orders)
          ? parsed.orders.join(',')
          : parsed.orders ?? '';

        this.orders = raw
          .split(',')
          .map((o:any)=> o.trim())
          .filter((o:any) => o.length > 0);
      } else {
        this.orders = content
          .split(',')
          .map(o => o.trim())
          .filter(o => o.length > 0);
      }
    };

    reader.readAsText(file);
  }

  // ====== ACEPTAR MODAL ======
  onAccept() {
    this.openModal = false;
    this.executeSearch();
  }

  // ====== EJECUCIÓN ÚNICA ======
  private executeSearch() {
    this.loader.show();
    this.apiVtex.clearOrders();

    setTimeout(() => {
      this.apiVtex.getOrdersByIds(this.orders).subscribe({
        next: (orders: any) => {
          Object.values(orders).forEach(order =>
            this.apiVtex.pushOrder(order)
          );
          this.loader.hide();
        },
        error: err => {
          console.error(err);
          this.loader.hide();
        }
      });
    });
  }
}
