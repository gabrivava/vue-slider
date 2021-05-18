//Descrizione:
/* Creare uno slider di immagini: potete usare le immagini che desiderate.
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera (usate un event listener su document e ascoltate per il keyup)
Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (usate created o mounted!). */

const root = new Vue(
    {
        el: '#root',

        data: {

            images: [
                'https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Simple-Background-Images-52.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRl7CQUroV2D3pw1arY8bdj7_beaKnCJvv3g&usqp=CAU',
                'https://lh3.googleusercontent.com/tPUc0xYeWvqKyqwNFH1wFKaKjfRt06rCB2tWVtF6laHLDQQeyIOcXyp6gpH0hPPb6Ibg=s153',
                'https://trvlmrk.com/wp-content/uploads/2019/05/belize-2234122_960_720.jpg',
                'https://betweenamericas.com/wp-content/uploads/2020/01/erupcje-1024x685.jpg'
            ],

            counter: 0,

            
        },

        methods: {
            next() {
                if (this.counter === this.images.length - 1) {
                    return this.counter = 0; 
                } 
                return this.counter ++
            },

            prev: function() {
                if (this.counter === 0) {
                    return this.counter = this.images.length - 1
                }
                return this.counter --
            },
                
        }
    }
);
