import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, concatMap, from, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiVtexService {

  
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-VTEX-API-AppKey': environment.vtex.appKey,
    'X-VTEX-API-AppToken': environment.vtex.appToken
  });
   constructor(private http: HttpClient) {}

  private ordersSubject = new BehaviorSubject<any[]>([]);
  orders$ = this.ordersSubject.asObservable();
   
  getOrderById(id: string) {
    return this.http.get(
      `${environment.vtex.vtexBaseUrl}/oms/pvt/orders/${id}`,
      { headers: this.headers }
    );
  }


  getOrdersByIds(orderIds: string[]) {
    return this.http.post(
      'http://localhost:5000/EktOps/obtenerPedidos',
      orderIds // se manda el array directo
    );
  }

   pushOrder(order: any) {
    const current = this.ordersSubject.value;
    this.ordersSubject.next([...current, order]);
  }

  clearOrders() {
    this.ordersSubject.next([]);
  }

}
