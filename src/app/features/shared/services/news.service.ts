import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  
  getNews(country: string, category: string):Observable<any> {
    const apiKey = environment.apiNewsSecretKey;
    const apiNewsUrl = environment.apiNewsUrl
    return this.http.get(`${apiNewsUrl}?category=${category}&country=${country}&apiKey=${apiKey}`);
  }

  getCountriesList():Observable<any> {
    const countries = [
      {country: 'Argentina', acronim: 'ar'},
      {country: 'EmiratosArabes', acronim: 'ae'},
      {country: 'Austria', acronim: 'at'},
      {country: 'Australia', acronim: 'au'},
      {country: 'Belgica', acronim: 'be'},
      {country: 'Bulgaria', acronim: 'bg'},
      {country: 'Brasil', acronim: 'br'},
      {country: 'Canada', acronim: 'ca'},
      {country: 'Suiza', acronim: 'ch'},
      {country: 'China', acronim: 'cn'},
      {country: 'Colombia', acronim: 'co'},
      {country: 'Cuba', acronim: 'cu'},
      {country: 'Chequia', acronim: 'cz'},
      {country: 'Alemania', acronim: 'de'},
      {country: 'Egipto', acronim: 'eg'},
      {country: 'Francia', acronim: 'fr'},
      {country: 'ReinoUnido', acronim: 'gb'},
      {country: 'Grecia', acronim: 'gr'},
      {country: 'HongKong', acronim: 'hk'},
      {country: 'Hungria', acronim: 'hu'},
      {country: 'Indonesia', acronim: 'id'},
      {country: 'Irlanda', acronim: 'ie'},
      {country: 'Israel', acronim: 'il'},
      {country: 'India', acronim: 'in'},
      {country: 'Italia', acronim: 'it'},
      {country: 'Japon', acronim: 'jp'},
      {country: 'KoreaDelSur', acronim: 'kr'},
      {country: 'Lituania', acronim: 'lt'},
      {country: 'Letonia', acronim: 'lv'},
      {country: 'Marruecos', acronim: 'ma'},
      {country: 'Mexico', acronim: 'mx'},
      {country: 'Malasia', acronim: 'my'},
      {country: 'Nigueria', acronim: 'ng'},
      {country: 'PaisesBajos', acronim: 'nl'},
      {country: 'Noruega', acronim: 'no'},
      {country: 'NuevaZelandia', acronim: 'nz'},
      {country: 'Filipinas', acronim: 'ph'},
      {country: 'Polonia', acronim: 'pl'},
      {country: 'Portugal', acronim: 'pt'},
      {country: 'Rumania', acronim: 'ro'},
      {country: 'Serbia', acronim: 'rs'},
      {country: 'Rusia', acronim: 'ru'},
      {country: 'ArabiaSaudita', acronim: 'sa'},
      {country: 'Suecia', acronim: 'se'},
      {country: 'Singapur', acronim: 'sg'},
      {country: 'Eslovania', acronim: 'si'},
      {country: 'Eslovaquia', acronim: 'sk'},
      {country: 'Tailandia', acronim: 'th'},
      {country: 'Turquia', acronim: 'tr'},
      {country: 'Taiwan', acronim: 'tw'},
      {country: 'Ucrania', acronim: 'ua'},
      {country: 'EstadosUnidos', acronim: 'us'},
      {country: 'Venezuela', acronim: 've'},
      {country: 'Sudrafica', acronim: 'za'},
    ];
    return of(countries);
  }
  
}
