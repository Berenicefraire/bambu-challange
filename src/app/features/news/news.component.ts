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
  }

  getNews(country: string, category: string) {
    this.newsService.getNews(country, category).subscribe(data => this.newsData = data);
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

}
