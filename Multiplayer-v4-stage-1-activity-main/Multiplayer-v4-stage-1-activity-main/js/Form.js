class Form {
  constructor() {
    this.input=creatInput("enter your name")
    this.playButton= creatButton("play")
    this.titleImg= creaImg("assets/title.png")
    this.greeting = createElement("h2")
  }
   seElementPosition(){
    this.titleImg.position(120,160)
    this.input.postion(width/2-110,height/2-80)
    this.playButton.postion(width/2-90,height/2-20)
    this.greeting.postion(width/2-300,height/2-100) 
   }
   setElementStyle(){
    this.titleImg.class("gameTitle")
    this.input.class("customInput")
    this.playButton.class("cutomButton")
    this.greeting.class("greeting") 
   }
   hide(){
    this.greeting.hide()
    this.playButton.hide()
    this.input()
   }

   handleMousePressed() 
   { this.playButton.mousePressed(() => 
    { this.input.hide(); 
      this.playButton.hide(); 
      var message = ` Hello ${this.input.value()}
       </br>wait for another player to join...`; 
       this.greeting.html(message); player.name = this.input.value();
        player.index = 1; 
      
    })}
   display(){
    this.setElementPosition()
    this.handleMousePressed()
   } 











}
