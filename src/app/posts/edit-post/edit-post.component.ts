import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postCreateDTO, postDTO } from '../posts';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: postDTO = {
    title: 'Wembanyama lo vuelve a reventar y el Rey de la NBA se rinde ante él: "No es un unicornio, es un alien de 2,20"',
    slug: 'wembanyama-lo-vuelve-a-reventar-y-el-rey-de-la-nba-se-rinde-ante-el-no-es-un-unicornio-es-un-alien-de-2-20',
    content: 'Victor Wembanyama, el prodigio francés de 18 años con 2,20 metros de altura y 2,31 de envergadura, ha vuelto a maravillar a los ojeadores de la NBA en su segundo partido con Metropolitans 92 en Estados Unidos ante Ignite de la G League. Tras firmar 37 puntos (4 de 9 en tiros de 2 y 7 de 11 triples), 4 rebotes, 1 robo y 5 tapones en 37 minutos en su primer partido en el segundo ha logrado 36 puntos, 11 rebotes, 4 asistencias y 4 tapones.',
    featuredImage: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_3147,h_1770,x_0,y_178/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/12up_es_international_web/01gemrmc3vjcsdvzdvhc.jpg',
    postDate: new Date,
    statusId: 3
  };

  ngOnInit(): void {
  }

  title = 'Edit Post';

  store(post: postCreateDTO) {
    console.log(post);
  }

}
