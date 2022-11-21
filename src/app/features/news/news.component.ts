import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services/news.service';
import { Country } from '../shared/interfaces/interfaceNews.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  
  currentCountry: string;
  currentCategory: string;
  countryList: any[] = [];
  newsData: any[] = [];
  articlesCounter: number = 0;
  isLoading:boolean = false;
  articleSelected: any;
  
  // Handler modal
  showModal:boolean = false;

  // Categories
  categories: string[] = ['business','entertainment','general','health','science','sports','technology']

  constructor(private newsService: NewsService) {
    // Default settings
    this.currentCountry = 'mx';
    this.currentCategory ='technology';
  }

  ngOnInit(): void { 
    this.getNews(this.currentCountry, this.currentCategory);
    this.getCountryList();
    this.getCountryName();
  }

  getNews(country: string, category: string) {
    this.isLoading = true;
    this.newsService.getNews(country, category).subscribe(data => {
      const {status, totalResults, articles} = data;
      this.articlesCounter = totalResults;
      this.newsData = articles;
      this.isLoading = false;
    });
  }

  getCountryList() {
    this.newsService.getCountriesList().subscribe((countries: any) => this.countryList = countries)
  }

  onChangeCountry(e:any) {
    this.currentCountry = e;
    this.getNews(this.currentCountry, this.currentCategory);
  }

  onChangeCategory(e:any) {
    this.currentCategory = e;
    this.getNews(this.currentCountry, this.currentCategory);
  }

  getCountryName() {
    let [obj] = this.countryList.filter(obj => obj.acronim == this.currentCountry);
    return obj.country;
  }

  readArticle(article: any) {
    this.articleSelected = article;
    this.showModal = true;
  }

  handlerModal(e:boolean) {
    this.showModal = e;
  }

}
