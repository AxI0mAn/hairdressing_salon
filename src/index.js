import './styles/view/contacts.scss';
import './styles/view/reviews.scss';
import './styles/view/price.scss';
import './styles/view/cosmetics.scss';
import './styles/view/ourTeam.scss';
import './styles/view/index.scss';
//
import modal from './scripts/modal.js';
modal();

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

new Swiper('.swiper-review', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.btn_review_right',
    prevEl: '.btn_review_left',
  },
});
